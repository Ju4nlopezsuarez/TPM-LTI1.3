package es.us.dit.lti;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.security.interfaces.RSAPrivateKey;
import java.time.Duration;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.util.JSONObjectUtils;

import es.us.dit.lti.entity.Consumer;
import es.us.dit.lti.entity.LtiUser;
import es.us.dit.lti.entity.ResourceLink;
import es.us.dit.lti.entity.ResourceUser;
import es.us.dit.lti.persistence.KeyService;
import es.us.dit.lti.persistence.ToolConsumerUserDao;
import es.us.dit.lti.persistence.ToolResourceUserDao;

/**
 * Servicio encargado de la sincronización de miembros usando NRPS (Names and
 * Role Provisioning Services).
 
 * @author Juan López Suárez
*/
public class NrpsService {

    private static final Logger logger = LoggerFactory.getLogger(NrpsService.class);

    /**
     * Sincroniza la lista de la clase (roster) con la base de datos de TPM.
     * 
     * @param contextMembershipsUrl Endpoint de NRPS del LMS
     * @param clientId              ID del cliente de la herramienta (LTI 1.3)
     * @param tokenUrl              URL del servicio de tokens del LMS
     * @param consumer              El consumidor LTI (Plataforma/Deployment) actual
     * @param resourceLink          El enlace de recurso (ResourceLink) desde el que
     *                              se accedió
     */
    public static List<Map<String, Object>> syncRoster(String contextMembershipsUrl, String clientId, String tokenUrl, Consumer consumer,
            ResourceLink resourceLink) {
        List<Map<String, Object>> processedMembers = null;
        try {
            // 1. Obtener Access Token mediante Client Credentials
            String accessToken = getNrpsAccessToken(clientId, tokenUrl);
            if (accessToken == null) {
                logger.error("NRPS: No se pudo obtener el Access Token.");
            } else {
                // 2. Consumir la API NRPS
                HttpClient client = HttpClient.newBuilder()
                        .connectTimeout(Duration.ofSeconds(10))
                        .build();

                HttpRequest request = HttpRequest.newBuilder()
                        .uri(URI.create(contextMembershipsUrl))
                        .header("Authorization", "Bearer " + accessToken)
                        .header("Accept", "application/vnd.ims.lti-nrps.v2.membershipcontainer+json")
                        .GET()
                        .build();

                HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

                if (response.statusCode() >= 400) {
                    logger.error("NRPS: Fallo en la llamada a {}. Status: {}, Body: {}", contextMembershipsUrl,
                            response.statusCode(), response.body());
                } else {
                    // 3. Procesar los miembros devueltos y sincronizarlos
                    Map<String, Object> jsonMap = JSONObjectUtils.parse(response.body());
                    List<Object> members = (List<Object>) jsonMap.get("members");

                    if (members != null) {
                        processedMembers = new java.util.ArrayList<>();
                        for (Object m : members) {
                            Map<String, Object> member = (Map<String, Object>) m;
                            String userId = (String) member.get("user_id"); // En LTI 1.3 el "sub" suele venir aquí

                            if (userId != null) {
                                // Comprobar si existe el LtiUser en el sistema bajo este Consumer
                                LtiUser user = ToolConsumerUserDao.getById(consumer.getSid(), userId);
                                boolean canProceed = true;

                                if (user == null) {
                                    user = new LtiUser();
                                    user.setConsumer(consumer);
                                    user.setUserId(userId);
                                    user.setSourceId(userId); // Fallback interno

                                    // Si vienen detalles del nombre/email, los mapeamos
                                    if (member.containsKey("given_name")) {
                                        user.setNameGiven((String) member.get("given_name"));
                                    }
                                    if (member.containsKey("family_name")) {
                                        user.setNameFamily((String) member.get("family_name"));
                                    }
                                    if (member.containsKey("name")) {
                                        user.setNameFull((String) member.get("name"));
                                    }
                                    if (member.containsKey("email")) {
                                        user.setEmail((String) member.get("email"));
                                    }

                                    boolean created = ToolConsumerUserDao.create(user);
                                    if (!created) {
                                        logger.error("NRPS: Error al crear el usuario {}", userId);
                                        canProceed = false;
                                    }
                                }

                                if (canProceed) {
                                    // Comprobar si el usuario está asociado a este ResourceLink
                                    ResourceUser ru = ToolResourceUserDao.getById(resourceLink.getSid(), user.getSid());
                                    if (ru == null) {
                                        ru = new ResourceUser();
                                        ru.setUser(user);
                                        ru.setResourceLink(resourceLink);
                                        ToolResourceUserDao.create(ru);
                                    }
                                    
                                    // Añadir a la lista de procesados
                                    Map<String, Object> memberInfo = new java.util.HashMap<>();
                                    memberInfo.put("name", user.getNameFull() != null ? user.getNameFull() : user.getNameGiven() + " " + user.getNameFamily());
                                    memberInfo.put("email", user.getEmail());
                                    memberInfo.put("roles", member.get("roles"));
                                    processedMembers.add(memberInfo);
                                }
                            }
                        }
                        logger.info("NRPS: Total miembros procesados: {}", processedMembers.size());
                    }
                }
            }
        } catch (Exception e) {
            logger.error("NRPS: Excepción durante la sincronización", e);
        }
        return processedMembers;
    }

    /**
     * Obtiene el token de autorización OAuth 2.0 (Client Credentials Grant) con
     * permisos para NRPS.
     */
    private static String getNrpsAccessToken(String clientId, String tokenUrl) {
        String token = null;
        try {
            KeyService keyService = new KeyService();
            String kid = keyService.getFirstKid();
            RSAKey rsaKey = keyService.getPrivateKey(kid);

            if (rsaKey == null) {
                logger.error("NRPS: No se encontró la clave privada local para el kid: {}", kid);
            } else {
                RSAPrivateKey privateKey = rsaKey.toRSAPrivateKey();

                // Reutilizamos la función ya existente para generar el Client Assertion (JWT firmado)
                String clientAssertion = SecurityUtil.createLti13ClientAssertion(clientId, tokenUrl, privateKey, kid);

                // Scope oficial para consumir los miembros del contexto de forma de solo lectura
                String scope = "https://purl.imsglobal.org/spec/lti-nrps/scope/contextmembership.readonly";
                String formData = "grant_type=client_credentials"
                        + "&client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer"
                        + "&client_assertion=" + clientAssertion
                        + "&scope=" + scope;

                HttpClient client = HttpClient.newBuilder()
                        .connectTimeout(Duration.ofSeconds(10))
                        .build();

                HttpRequest request = HttpRequest.newBuilder()
                        .uri(URI.create(tokenUrl))
                        .header("Content-Type", "application/x-www-form-urlencoded")
                        .POST(HttpRequest.BodyPublishers.ofString(formData, StandardCharsets.UTF_8))
                        .build();

                HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

                if (response.statusCode() >= 400) {
                    logger.error("NRPS: El LMS rechazó la petición del token. HTTP {}: {}", response.statusCode(),
                            response.body());
                } else {
                    Map<String, Object> jsonMap = JSONObjectUtils.parse(response.body());
                    token = (String) jsonMap.get("access_token");
                }
            }
        } catch (Exception e) {
            logger.error("NRPS: Excepción al intentar obtener el token", e);
        }
        return token;
    }
}

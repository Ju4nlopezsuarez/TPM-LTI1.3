package es.us.dit.lti.persistence;
import com.nimbusds.jose.JWSAlgorithm;
import com.nimbusds.jose.jwk.JWK;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.KeyUse;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.gen.RSAKeyGenerator;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
/**
 * Servicio encargado de la gestión de claves asimétricas para LTI 1.3.
 * Genera, almacena y recupera claves RSA de la tabla 'lti_key_set'.
 */
public class KeyService {
	/**
	 * Utility class that provides methods for managing connections to a database.
	 */
	private static IDbUtil dbUtil = null;

	/**
	 * Sets the db utility class.
	 *
	 * @param dbu the db utility class to set
	 */
	public static synchronized void setDbUtil(IDbUtil dbu) {
		dbUtil = dbu;
	}

	/**
	 * Gets the db utility class.
	 *
	 * @return the db utility class
	 */
	public static synchronized IDbUtil getDbUtil() {
		return dbUtil;
	}

	/**
	 * Obtiene una conexión a la base de datos.
	 *
	 * @return una conexión a la base de datos
	 * @throws Exception si ocurre un error al obtener la conexión
	 */
	private Connection getConnection() throws Exception {
		if (dbUtil == null) {
			throw new IllegalStateException("KeyService no ha sido inicializada.");
		}
		return dbUtil.getConnection();
	}

     /**
     * Genera un nuevo par de claves RSA 2048 y lo guarda en la base de datos.
     * @return El ID de la clave generada (kid)
     */
    public String generateAndSaveNewKey() throws Exception {
        // 1. Generar clave RSA con Nimbus (Librería LTI 1.3)
        RSAKey jwk = new RSAKeyGenerator(2048)
                .keyUse(KeyUse.SIGNATURE) 
                .keyID(UUID.randomUUID().toString())
                .algorithm(JWSAlgorithm.RS256)       // Algoritmo recomendado para LTI 1.3
                .generate();

        // 2. Guardar en Base de Datos
        String sql = "INSERT INTO lti_key_set (kid, private_key, public_key, alg) VALUES (?, ?, ?, ?)";
        
        try (Connection conn = getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            
            ps.setString(1, jwk.getKeyID());
            
            ps.setString(2, jwk.toJSONString()); 
            
            ps.setString(3, jwk.toPublicJWK().toJSONString()); 

            ps.setString(4, jwk.getAlgorithm().getName());
            
            ps.executeUpdate();
        }
        
        return jwk.getKeyID();
    }
    /**
     * Obtiene todas las claves PÚBLICAS para exponerlas en el endpoint JWKS.
     * El LMS usará esto para verificar nuestras firmas.
     */
    public JWKSet getPublicJWKSet() throws Exception {
        List<JWK> keys = new ArrayList<>();
        String sql = "SELECT public_key FROM lti_key_set";

        try (Connection conn = getConnection();
             PreparedStatement ps = conn.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            
            while (rs.next()) {
                String jsonParams = rs.getString("public_key");
                // Convertimos el String JSON de la BD a un objeto JWK
                keys.add(JWK.parse(jsonParams));
            }
        }
        return new JWKSet(keys);
    }
    /**
     * Obtiene una clave PRIVADA específica para firmar un mensaje.
     * @param kid El ID de la clave (Key ID) que se desea obtener
     * @return La clave RSA correspondiente al kid, o null si no se encuentra
     */
    public RSAKey getPrivateKey(String kid) throws Exception {
        String sql = "SELECT private_key FROM lti_key_set WHERE kid = ?";
        
        try (Connection conn = getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            
            ps.setString(1, kid);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return RSAKey.parse(rs.getString("private_key"));
                }
            }
        }
        return null;
    }

}










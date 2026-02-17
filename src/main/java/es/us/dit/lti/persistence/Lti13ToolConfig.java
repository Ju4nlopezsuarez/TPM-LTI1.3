package es.us.dit.lti.persistence;
/**
 * Clase POJO para transportar la configuración
 * LTI 1.3 de una herramienta desde la base de datos a los Servlets.
 */
public class Lti13ToolConfig {
    private String toolName;
    private String clientId;
    private String issuer;
    private String oidcAuthUrl;
    private String jwksUrl;
    private String deploymentId;

    public Lti13ToolConfig(String toolName, String clientId, String issuer, String oidcAuthUrl, String jwksUrl, String deploymentId) {
        this.toolName = toolName;
        this.clientId = clientId;
        this.issuer = issuer;
        this.oidcAuthUrl = oidcAuthUrl;
        this.jwksUrl = jwksUrl;
        this.deploymentId = deploymentId;
    }

    // Getters
    public String getToolName() { return toolName; }
    public String getClientId() { return clientId; }
    public String getIssuer() { return issuer; }
    public String getOidcAuthUrl() { return oidcAuthUrl; }
    public String getJwksUrl() { return jwksUrl; }
    public String getDeploymentId() { return deploymentId; }
}


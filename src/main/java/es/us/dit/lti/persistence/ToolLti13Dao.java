package es.us.dit.lti.persistence;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * DAO especializado en la recuperación de credenciales y configuración
 * para el flujo LTI 1.3.
 */
public class ToolLti13Dao {

    private static IDbUtil dbUtil = null;

    /**
     * Inyección de dependencia de base de datos (llamado desde AppLoader)
     */
    public static synchronized void setDbUtil(IDbUtil dbu) {
        dbUtil = dbu;
    }

    private Connection getConnection() throws SQLException {
        if (dbUtil == null) {
            throw new IllegalStateException("ToolLti13Dao no inicializado. dbUtil es null.");
        }
        return dbUtil.getConnection();
    }

    /**
     * Busca la configuración de una herramienta por su Issuer (LMS).
     * Utilizado en el paso 1: OIDC Login.
     * 
     * @param issuer El identificador del LMS (iss)
     * @return Objeto de configuración o null si no existe.
     */
    public Lti13ToolConfig findByIssuer(String issuer) {
        
        String sql = "SELECT client_id, oidc_auth_url, jwks_url, deployment_id " +
                     "FROM tool WHERE issuer = ? AND lti_version = '1.3.0'";
        
        try (Connection conn = getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            
            ps.setString(1, issuer);
            
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return new Lti13ToolConfig(
                        rs.getString("client_id"),
                        issuer,
                        rs.getString("oidc_auth_url"),
                        rs.getString("jwks_url"),
                        rs.getString("deployment_id")
                    );
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
            // Podria loggear
        }
        return null;
    }

    /**
     * Busca la configuración usando el Client ID y el Issuer (más específico).
     * Utilizado en el paso 2: LtiServlet (Launch) si es necesario validar ambos.
     */
    public Lti13ToolConfig findByClientId(String clientId) {
         String sql = "SELECT issuer, oidc_auth_url, jwks_url, deployment_id " +
                      "FROM tool WHERE client_id = ? AND lti_version = '1.3.0'";
         
         try (Connection conn = getConnection();
              PreparedStatement ps = conn.prepareStatement(sql)) {
             
             ps.setString(1, clientId);
             
             try (ResultSet rs = ps.executeQuery()) {
                 if (rs.next()) {
                     return new Lti13ToolConfig(
                         clientId,
                         rs.getString("issuer"),
                         rs.getString("oidc_auth_url"),
                         rs.getString("jwks_url"),
                         rs.getString("deployment_id")
                     );
                 }
             }
         } catch (SQLException e) {
             e.printStackTrace();
         }
         return null;
    }
}


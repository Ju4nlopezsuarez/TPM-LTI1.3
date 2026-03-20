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
     * OIDC Login.
     * 
     * @param issuer El identificador del LMS (iss)
     * @return Objeto de configuración o null si no existe.
     */
    public Lti13ToolConfig findByIssuer(String issuer) {
        
        String sql = "SELECT name, client_id, oidc_auth_url, jwks_url, deployment_id, token_url " +
                     "FROM tool WHERE issuer = ? AND lti_version = '1.3.0'";
        Connection conn = null;
        try{ 
            conn= getConnection();
            try (PreparedStatement ps = conn.prepareStatement(sql)) {
            
            ps.setString(1, issuer);
            
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return new Lti13ToolConfig(
                        rs.getString("name"),
                        rs.getString("client_id"),
                        issuer,
                        rs.getString("oidc_auth_url"),
                        rs.getString("jwks_url"),
                        rs.getString("deployment_id"),
                        rs.getString("token_url")
                    );
                }
            }
        }
        } catch (SQLException e) {
            e.printStackTrace();
            // Podria loggear
        } finally {
            if (conn != null && dbUtil != null) {
                dbUtil.closeConnection(conn);
            }
        }
        return null;
    }

    /**
     * Busca la configuración usando el Client ID y el Issuer (más específico).
     * Utilizado en el LtiServlet (Launch) si es necesario validar ambos.
     */
    public Lti13ToolConfig findByClientId(String clientId) {
         String sql = "SELECT name,issuer, oidc_auth_url, jwks_url, deployment_id, token_url " +
                      "FROM tool WHERE client_id = ? AND lti_version = '1.3.0'";
         Connection conn = null;
         try{ 
             conn= getConnection();
            
             try (PreparedStatement ps = conn.prepareStatement(sql)) {
             
             ps.setString(1, clientId);
             
             try (ResultSet rs = ps.executeQuery()) {
                 if (rs.next()) {
                     return new Lti13ToolConfig(
                        rs.getString("name"),
                         clientId,
                         rs.getString("issuer"),
                         rs.getString("oidc_auth_url"),
                         rs.getString("jwks_url"),
                         rs.getString("deployment_id"),
                         rs.getString("token_url")
                     );
                 }
             }
            }
         } catch (SQLException e) {
             e.printStackTrace();
         } finally {
             if (conn != null && dbUtil != null) {
                 dbUtil.closeConnection(conn);
             }
         }
         return null;
    }
    /**Descubre y registra dinámicamente Clientes y Despliegues LTI 1.3
     * Devuelve la URL de autorización OIDC del LMS para el Issuer dado, o null si no se encuentra.
     */
    public String discoverAndGetOidcAuthUrl(String issuer, String clientId, String deploymentId){
        String oidcAuthUrl = null;
        Connection conn = null;
        Integer platformId = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            conn = getConnection();
            // Verificar si el Issuer ya existe en la base de datos
            String checkSql = "SELECT id, oidc_auth_url FROM lti_platform WHERE issuer = ? AND lti_version = '1.3.0'";
            ps = conn.prepareStatement(checkSql);
            if (ps != null) {
                ps.setString(1, issuer);
                rs = ps.executeQuery();
                if (rs!=null) {
                    if (rs.next()) {
                        // Issuer ya registrado, devolver URL de autorización
                        oidcAuthUrl = rs.getString("oidc_auth_url");
                        platformId = rs.getInt("id");
                    }
                }
            }
            if (rs != null) {
                rs.close();
                rs=null;
            }
            if (ps != null) {
                ps.close();
                ps=null;
            }
            //Si la plataforma existe, procedemos a registrar el Client ID y Deployment ID dinámicamente
            if (platformId!=null) {
                Integer clientIdPk = null;
                String clientCheckSql = "SELECT id FROM lti_client WHERE client_id = ? AND platform_id = ?";
                ps = conn.prepareStatement(clientCheckSql);
                if(ps!=null) {
                    ps.setString(1, clientId);
                    ps.setInt(2, platformId);
                    rs = ps.executeQuery();
                    if (rs!=null) {
                        if (rs.next()) {
                            clientIdPk = rs.getInt("id");
                        }
                    }
                }
                if (rs != null) {
                    rs.close();
                    rs=null;
                }
                if (ps != null) {
                    ps.close();
                    ps=null;
                }
                //Si es nuevo lo añadimos
                if (clientIdPk == null) {
                    String clientInsertSql = "INSERT INTO lti_client (client_id, platform_id) VALUES (?, ?)";
                    ps = conn.prepareStatement(clientInsertSql);
                    if (ps != null) {
                        ps.setString(1, clientId);
                        ps.setInt(2, platformId);
                        ps.executeUpdate();
                        rs = ps.getGeneratedKeys();
                        if ( rs.next()) {
                            clientIdPk = rs.getInt(1);
                        }
                    }
                    if (rs!=null) {
                        rs.close();
                        rs=null;
                    }
                    if(ps !=null) {
                        ps.close();
                        ps=null;
                    }
                    
                }
                //Descubrir y registrar Deployment ID dinámicamente
                if (deploymentId != null && clientIdPk != null) {
                    boolean hasDeployment = false;
                    String sqlDep = "SELECT id FROM lti_deployment WHERE deployment_id = ?";
                    ps = conn.prepareStatement(sqlDep);
                    if (ps != null) {
                        ps.setString(1, deploymentId);
                        rs = ps.executeQuery();
                        if (rs != null) {
                            if (rs.next()) {
                                hasDeployment = true;   
                            }
                        }
                }
                if (ps != null) {
                    ps.close();
                    ps=null;
                }
                if (rs != null) {
                    rs.close();
                    rs=null;
                }
                    if (!hasDeployment) {
                        String depInsertSql = "INSERT INTO lti_deployment (deployment_id, client_id) VALUES (?, ?)";
                        ps = conn.prepareStatement(depInsertSql);
                        if (ps != null) {
                            ps.setString(1, deploymentId);
                            ps.setInt(2, clientIdPk);
                            ps.executeUpdate();
                        }
                        if (ps != null) {
                            ps.close();
                            ps=null;
                        }
                    }
                }
                
            }
            
    }catch (SQLException e) {
        e.printStackTrace();
    } finally {
        if (ps != null) {
            try {
                ps.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        if (conn != null && dbUtil != null) {
            dbUtil.closeConnection(conn);
        }

}
return oidcAuthUrl;
}

}

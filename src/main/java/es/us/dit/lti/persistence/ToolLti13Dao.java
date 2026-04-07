package es.us.dit.lti.persistence;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import es.us.dit.lti.entity.Tool;

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

    /* Devuelve los nombres y descripción de todas las herramientas */
    public List<Tool> findAll() {
        String sql = "SELECT name, description FROM tool";
        Connection conn = null;
        List<Tool> tools = new ArrayList<>();
        try {
            conn = getConnection();
            try (PreparedStatement ps = conn.prepareStatement(sql)) {
                try (ResultSet rs = ps.executeQuery()) {
                    while (rs.next()) {
                        Tool tool = new Tool();
                        tool.setName(rs.getString("name"));
                        tool.setDescription(rs.getString("description"));
                        tools.add(tool);
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
        return tools;
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
        try {
            conn = getConnection();
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
                                rs.getString("token_url"));
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
        String sql = "SELECT p.name, p.issuer, p.oidc_auth_url, p.jwks_url, d.deployment_id, p.token_url " +
                     "FROM lti_client c " +
                     "INNER JOIN lti_platform p ON c.platform_id = p.id " +
                     "LEFT JOIN lti_deployment d ON d.client_id = c.id " +
                     "WHERE c.client_id = ?";
        Connection conn = null;
        try {
            conn = getConnection();

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
                                rs.getString("token_url"));
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

    /**
     * Descubre y registra dinámicamente Clientes y Despliegues LTI 1.3
     * Devuelve la URL de autorización OIDC del LMS para el Issuer dado, o null si
     * no se encuentra.
     */
    public String discoverAndGetOidcAuthUrl(String issuer, String clientId, String deploymentId) {
        String oidcAuthUrl = null;
        Connection conn = null;
        Integer platformId = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            conn = getConnection();
            // Verificar si el Issuer ya existe en la base de datos
            String checkSql = "SELECT id, oidc_auth_url FROM lti_platform WHERE issuer = ?";
            ps = conn.prepareStatement(checkSql);
            if (ps != null) {
                ps.setString(1, issuer);
                rs = ps.executeQuery();
                if (rs != null) {
                    if (rs.next()) {
                        // Issuer ya registrado, devolver URL de autorización
                        oidcAuthUrl = rs.getString("oidc_auth_url");
                        platformId = rs.getInt("id");
                    }
                }
            }
            if (rs != null) {
                rs.close();
                rs = null;
            }
            if (ps != null) {
                ps.close();
                ps = null;
            }
            // Si la plataforma existe, procedemos a registrar el Client ID y Deployment ID
            // dinámicamente
            if (platformId != null) {
                Integer clientIdPk = null;
                String clientCheckSql = "SELECT id FROM lti_client WHERE client_id = ? AND platform_id = ?";
                ps = conn.prepareStatement(clientCheckSql);
                if (ps != null) {
                    ps.setString(1, clientId);
                    ps.setInt(2, platformId);
                    rs = ps.executeQuery();
                    if (rs != null) {
                        if (rs.next()) {
                            clientIdPk = rs.getInt("id");
                        }
                    }
                }
                if (rs != null) {
                    rs.close();
                    rs = null;
                }
                if (ps != null) {
                    ps.close();
                    ps = null;
                }
                // Si es nuevo lo añadimos
                if (clientIdPk == null) {
                    String clientInsertSql = "INSERT INTO lti_client (client_id, platform_id) VALUES (?, ?)";
                    ps = conn.prepareStatement(clientInsertSql);
                    if (ps != null) {
                        ps.setString(1, clientId);
                        ps.setInt(2, platformId);
                        ps.executeUpdate();
                        rs = ps.getGeneratedKeys();
                        if (rs.next()) {
                            clientIdPk = rs.getInt(1);
                        }
                    }
                    if (rs != null) {
                        rs.close();
                        rs = null;
                    }
                    if (ps != null) {
                        ps.close();
                        ps = null;
                    }

                }
                // Descubrir y registrar Deployment ID dinámicamente
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
                        ps = null;
                    }
                    if (rs != null) {
                        rs.close();
                        rs = null;
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
                            ps = null;
                        }
                    }
                }

            }

        } catch (SQLException e) {
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

    /**
     * Busca si un enlace de Blackboard ya está asociado a una herramienta en el
     * TPM.
     */
    public String getMappedTool(String resourceLinkId) {
        String toolname = null;
        java.sql.Connection conn = null;
        java.sql.PreparedStatement ps = null;
        java.sql.ResultSet rs = null;

        try {
            conn = getConnection();
            String sql = "SELECT toolname FROM lti_link_mapping WHERE resource_link_id = ?";
            ps = conn.prepareStatement(sql);
            ps.setString(1, resourceLinkId);
            rs = ps.executeQuery();

            if (rs.next()) {
                toolname = rs.getString("toolname");
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (rs != null) {
                try {
                    rs.close();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            if (ps != null) {
                try {
                    ps.close();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            if (conn != null && dbUtil != null) {
                dbUtil.closeConnection(conn);
            }
        }
        return toolname;
    }

    /**
     * Guarda la asociación entre el enlace de Blackboard y la clave de la
     * herramienta.
     */
    public boolean saveResourceLinkMapping(String resourceLinkId, String toolname) {
        boolean success = false;
        java.sql.Connection conn = null;
        java.sql.PreparedStatement ps = null;

        try {
            conn = getConnection();
            String sql = "INSERT INTO lti_link_mapping (resource_link_id, toolname) VALUES (?, ?)";
            ps = conn.prepareStatement(sql);
            ps.setString(1, resourceLinkId);
            ps.setString(2, toolname);

            if (ps.executeUpdate() > 0) {
                success = true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (ps != null) {
                try {
                    ps.close();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            if (conn != null && dbUtil != null) {
                dbUtil.closeConnection(conn);
            }
        }
        return success;
    }

}

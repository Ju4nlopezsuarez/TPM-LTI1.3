package es.us.dit.lti.persistence;

import es.us.dit.lti.entity.LtiDeployment;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class LtiDeploymentDao {

    private static IDbUtil dbUtil = null;

    public static synchronized void setDbUtil(IDbUtil dbu) {
        dbUtil = dbu;
    }

    private Connection getConnection() throws SQLException {
        if (dbUtil == null) {
            throw new IllegalStateException("LtiDeploymentDao no inicializado. dbUtil es null.");
        }
        return dbUtil.getConnection();
    }

    public List<LtiDeployment> findByClientId(int clientIdPk) {
        List<LtiDeployment> list = new ArrayList<>();
        String sql = "SELECT id, client_id, deployment_id FROM lti_deployment WHERE client_id = ?";
        Connection conn = null;
        try {
            conn = getConnection();
            try (PreparedStatement ps = conn.prepareStatement(sql)) {
                ps.setInt(1, clientIdPk);
                try (ResultSet rs = ps.executeQuery()) {
                    while (rs.next()) {
                        list.add(new LtiDeployment(
                                rs.getInt("id"),
                                rs.getInt("client_id"),
                                rs.getString("deployment_id")
                        ));
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
        return list;
    }

    public LtiDeployment findById(int id) {
        String sql = "SELECT id, client_id, deployment_id FROM lti_deployment WHERE id = ?";
        Connection conn = null;
        try {
            conn = getConnection();
            try (PreparedStatement ps = conn.prepareStatement(sql)) {
                ps.setInt(1, id);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        return new LtiDeployment(
                                rs.getInt("id"),
                                rs.getInt("client_id"),
                                rs.getString("deployment_id")
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

    public boolean insert(LtiDeployment d) {
        String sql = "INSERT INTO lti_deployment (client_id, deployment_id) VALUES (?, ?)";
        Connection conn = null;
        try {
            conn = getConnection();
            try (PreparedStatement ps = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
                ps.setInt(1, d.getClientIdPk());
                ps.setString(2, d.getDeploymentId());
                int rows = ps.executeUpdate();
                if (rows > 0) {
                    try (ResultSet rs = ps.getGeneratedKeys()) {
                        if (rs.next()) {
                            d.setId(rs.getInt(1));
                        }
                    }
                    return true;
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            if (conn != null && dbUtil != null) {
                dbUtil.closeConnection(conn);
            }
        }
        return false;
    }

    public boolean update(LtiDeployment d) {
        String sql = "UPDATE lti_deployment SET client_id=?, deployment_id=? WHERE id=?";
        Connection conn = null;
        try {
            conn = getConnection();
            try (PreparedStatement ps = conn.prepareStatement(sql)) {
                ps.setInt(1, d.getClientIdPk());
                ps.setString(2, d.getDeploymentId());
                ps.setInt(3, d.getId());
                int rows = ps.executeUpdate();
                return rows > 0;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            if (conn != null && dbUtil != null) {
                dbUtil.closeConnection(conn);
            }
        }
        return false;
    }

    public boolean delete(int id) {
        String sql = "DELETE FROM lti_deployment WHERE id=?";
        Connection conn = null;
        try {
            conn = getConnection();
            try (PreparedStatement ps = conn.prepareStatement(sql)) {
                ps.setInt(1, id);
                int rows = ps.executeUpdate();
                return rows > 0;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            if (conn != null && dbUtil != null) {
                dbUtil.closeConnection(conn);
            }
        }
        return false;
    }
}

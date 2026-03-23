package es.us.dit.lti.persistence;

import es.us.dit.lti.entity.LtiClient;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class LtiClientDao {

    private static IDbUtil dbUtil = null;

    public static synchronized void setDbUtil(IDbUtil dbu) {
        dbUtil = dbu;
    }

    private Connection getConnection() throws SQLException {
        if (dbUtil == null) {
            throw new IllegalStateException("LtiClientDao no inicializado. dbUtil es null.");
        }
        return dbUtil.getConnection();
    }

    public List<LtiClient> findByPlatformId(int platformId) {
        List<LtiClient> list = new ArrayList<>();
        String sql = "SELECT id, platform_id, client_id FROM lti_client WHERE platform_id = ?";
        Connection conn = null;
        try {
            conn = getConnection();
            try (PreparedStatement ps = conn.prepareStatement(sql)) {
                ps.setInt(1, platformId);
                try (ResultSet rs = ps.executeQuery()) {
                    while (rs.next()) {
                        list.add(new LtiClient(
                                rs.getInt("id"),
                                rs.getInt("platform_id"),
                                rs.getString("client_id")
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

    public LtiClient findById(int id) {
        String sql = "SELECT id, platform_id, client_id FROM lti_client WHERE id = ?";
        Connection conn = null;
        try {
            conn = getConnection();
            try (PreparedStatement ps = conn.prepareStatement(sql)) {
                ps.setInt(1, id);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        return new LtiClient(
                                rs.getInt("id"),
                                rs.getInt("platform_id"),
                                rs.getString("client_id")
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

    public boolean insert(LtiClient c) {
        String sql = "INSERT INTO lti_client (platform_id, client_id) VALUES (?, ?)";
        Connection conn = null;
        try {
            conn = getConnection();
            try (PreparedStatement ps = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
                ps.setInt(1, c.getPlatformId());
                ps.setString(2, c.getClientId());
                int rows = ps.executeUpdate();
                if (rows > 0) {
                    try (ResultSet rs = ps.getGeneratedKeys()) {
                        if (rs.next()) {
                            c.setId(rs.getInt(1));
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

    public boolean update(LtiClient c) {
        String sql = "UPDATE lti_client SET platform_id=?, client_id=? WHERE id=?";
        Connection conn = null;
        try {
            conn = getConnection();
            try (PreparedStatement ps = conn.prepareStatement(sql)) {
                ps.setInt(1, c.getPlatformId());
                ps.setString(2, c.getClientId());
                ps.setInt(3, c.getId());
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
        String sql = "DELETE FROM lti_client WHERE id=?";
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

package es.us.dit.lti.persistence;

import es.us.dit.lti.entity.LtiPlatform;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class LtiPlatformDao {

    private static IDbUtil dbUtil = null;

    public static synchronized void setDbUtil(IDbUtil dbu) {
        dbUtil = dbu;
    }

    private Connection getConnection() throws SQLException {
        if (dbUtil == null) {
            throw new IllegalStateException("LtiPlatformDao no inicializado. dbUtil es null.");
        }
        return dbUtil.getConnection();
    }

    public List<LtiPlatform> findAll() {
        List<LtiPlatform> list = new ArrayList<>();
        String sql = "SELECT id, issuer, oidc_auth_url, jwks_url, token_url, name FROM lti_platform";
        Connection conn = null;
        try {
            conn = getConnection();
            try (PreparedStatement ps = conn.prepareStatement(sql);
                 ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    list.add(new LtiPlatform(
                            rs.getInt("id"),
                            rs.getString("issuer"),
                            rs.getString("oidc_auth_url"),
                            rs.getString("jwks_url"),
                            rs.getString("token_url"),
                            rs.getString("name")
                    ));
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

    public LtiPlatform findById(int id) {
        String sql = "SELECT id, issuer, oidc_auth_url, jwks_url, token_url, name FROM lti_platform WHERE id = ?";
        Connection conn = null;
        try {
            conn = getConnection();
            try (PreparedStatement ps = conn.prepareStatement(sql)) {
                ps.setInt(1, id);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        return new LtiPlatform(
                                rs.getInt("id"),
                                rs.getString("issuer"),
                                rs.getString("oidc_auth_url"),
                                rs.getString("jwks_url"),
                                rs.getString("token_url"),
                                rs.getString("name")
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

    public LtiPlatform findByIssuer(String issuer) {
        String sql = "SELECT id, issuer, oidc_auth_url, jwks_url, token_url, name FROM lti_platform WHERE issuer = ?";
        Connection conn = null;
        try {
            conn = getConnection();
            try (PreparedStatement ps = conn.prepareStatement(sql)) {
                ps.setString(1, issuer);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        return new LtiPlatform(
                                rs.getInt("id"),
                                rs.getString("issuer"),
                                rs.getString("oidc_auth_url"),
                                rs.getString("jwks_url"),
                                rs.getString("token_url"),
                                rs.getString("name")
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

    public boolean insert(LtiPlatform p) {
        String sql = "INSERT INTO lti_platform (issuer, oidc_auth_url, jwks_url, token_url, name) VALUES (?, ?, ?, ?, ?)";
        Connection conn = null;
        try {
            conn = getConnection();
            try (PreparedStatement ps = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
                ps.setString(1, p.getIssuer());
                ps.setString(2, p.getOidcAuthUrl());
                ps.setString(3, p.getJwksUrl());
                ps.setString(4, p.getTokenUrl());
                ps.setString(5, p.getName());
                int rows = ps.executeUpdate();
                if (rows > 0) {
                    try (ResultSet rs = ps.getGeneratedKeys()) {
                        if (rs.next()) {
                            p.setId(rs.getInt(1));
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

    public boolean update(LtiPlatform p) {
        String sql = "UPDATE lti_platform SET issuer=?, oidc_auth_url=?, jwks_url=?, token_url=?, name=? WHERE id=?";
        Connection conn = null;
        try {
            conn = getConnection();
            try (PreparedStatement ps = conn.prepareStatement(sql)) {
                ps.setString(1, p.getIssuer());
                ps.setString(2, p.getOidcAuthUrl());
                ps.setString(3, p.getJwksUrl());
                ps.setString(4, p.getTokenUrl());
                ps.setString(5, p.getName());
                ps.setInt(6, p.getId());
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
        String sql = "DELETE FROM lti_platform WHERE id=?";
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

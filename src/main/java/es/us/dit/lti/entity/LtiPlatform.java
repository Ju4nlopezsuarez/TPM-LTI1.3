package es.us.dit.lti.entity;

public class LtiPlatform {

    private int id;
    private String issuer;
    private String oidcAuthUrl;
    private String jwksUrl;
    private String tokenUrl;
    private String name;

    public LtiPlatform() {
    }

    public LtiPlatform(int id, String issuer, String oidcAuthUrl, String jwksUrl, String tokenUrl, String name) {
        this.id = id;
        this.issuer = issuer;
        this.oidcAuthUrl = oidcAuthUrl;
        this.jwksUrl = jwksUrl;
        this.tokenUrl = tokenUrl;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getIssuer() {
        return issuer;
    }

    public void setIssuer(String issuer) {
        this.issuer = issuer;
    }

    public String getOidcAuthUrl() {
        return oidcAuthUrl;
    }

    public void setOidcAuthUrl(String oidcAuthUrl) {
        this.oidcAuthUrl = oidcAuthUrl;
    }

    public String getJwksUrl() {
        return jwksUrl;
    }

    public void setJwksUrl(String jwksUrl) {
        this.jwksUrl = jwksUrl;
    }

    public String getTokenUrl() {
        return tokenUrl;
    }

    public void setTokenUrl(String tokenUrl) {
        this.tokenUrl = tokenUrl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "LtiPlatform{" +
                "id=" + id +
                ", issuer='" + issuer + '\'' +
                ", oidcAuthUrl='" + oidcAuthUrl + '\'' +
                ", jwksUrl='" + jwksUrl + '\'' +
                ", tokenUrl='" + tokenUrl + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}

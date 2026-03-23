package es.us.dit.lti.entity;

public class LtiClient {

    private int id;
    private int platformId;
    private String clientId;

    public LtiClient() {
    }

    public LtiClient(int id, int platformId, String clientId) {
        this.id = id;
        this.platformId = platformId;
        this.clientId = clientId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPlatformId() {
        return platformId;
    }

    public void setPlatformId(int platformId) {
        this.platformId = platformId;
    }

    public String getClientId() {
        return clientId;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
    }

    @Override
    public String toString() {
        return "LtiClient{" +
                "id=" + id +
                ", platformId=" + platformId +
                ", clientId='" + clientId + '\'' +
                '}';
    }
}

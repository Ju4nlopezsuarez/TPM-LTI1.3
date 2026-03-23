package es.us.dit.lti.entity;

public class LtiDeployment {

    private int id;
    private int clientIdPk;
    private String deploymentId;

    public LtiDeployment() {
    }

    public LtiDeployment(int id, int clientIdPk, String deploymentId) {
        this.id = id;
        this.clientIdPk = clientIdPk;
        this.deploymentId = deploymentId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getClientIdPk() {
        return clientIdPk;
    }

    public void setClientIdPk(int clientIdPk) {
        this.clientIdPk = clientIdPk;
    }

    public String getDeploymentId() {
        return deploymentId;
    }

    public void setDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
    }

    @Override
    public String toString() {
        return "LtiDeployment{" +
                "id=" + id +
                ", clientIdPk=" + clientIdPk +
                ", deploymentId='" + deploymentId + '\'' +
                '}';
    }
}

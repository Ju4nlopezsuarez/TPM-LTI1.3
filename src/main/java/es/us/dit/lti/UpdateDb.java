package es.us.dit.lti;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.nio.file.Files;
import java.nio.file.Paths;

public class UpdateDb {
    public static void main(String[] args) {
        String dbPath = "jdbc:sqlite:tpm.db";
        String scriptPath = "/tmp/update.sql";
        
        System.out.println("Connecting to " + dbPath + "...");
        try (Connection conn = DriverManager.getConnection(dbPath);
             Statement stmt = conn.createStatement()) {
            
            String sql = new String(Files.readAllBytes(Paths.get(scriptPath)));
            System.out.println("Executing script...");
            
            String[] commands = sql.split(";");
            for (String command : commands) {
                if (!command.trim().isEmpty()) {
                    try {
                        stmt.execute(command);
                        System.out.println("Executed successfully: " + command.trim().split("\n")[0] + "...");
                    } catch (Exception e) {
                        System.out.println("Info (might be expected): " + e.getMessage());
                    }
                }
            }
            
            System.out.println("Update done.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

# ⚙️ TPM (Tool Provider Manager) - LTI 1.3 Advantage

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Jakarta EE](https://img.shields.io/badge/Jakarta_EE-275284?style=for-the-badge&logo=jakartaee&logoColor=white)
![Maven](https://img.shields.io/badge/Apache_Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)
![LTI 1.3](https://img.shields.io/badge/LTI-1.3_Advantage-00599C?style=for-the-badge)
![License](https://img.shields.io/badge/License-GPL_v3-blue.svg?style=for-the-badge)

**Tool Provider Manager (TPM)** is an LTI v1.3 Advantage tool provider designed to act as a secure middleware for managing non-LTI external tools within a Learning Management System (LMS).

<details>
  <summary>📋 Table of Contents</summary>
  <ol>
    <li><a href="#-description">Description</a></li>
    <li><a href="#-architecture">Architecture</a></li>
    <li><a href="#-features--motivation">Features & Motivation</a></li>
    <li><a href="#-performance--load-testing">Performance & Load Testing</a></li>
    <li><a href="#-technologies-used">Technologies Used</a></li>
    <li><a href="#-compilation--installation">Compilation & Installation</a></li>
    <li><a href="#-usage-examples">Usage Examples</a></li>
    <li><a href="#-contact--authors">Contact & Authors</a></li>
  </ol>
</details>

---

## 🚀 Description

Tool Provider Manager (TPM) implements an [LTI 1.3 Advantage](https://www.imsglobal.org/spec/lti/v1p3/) Tool Provider (TP). It securely bridges external tools with any compatible Tool Consumer (TC) or LMS (like Moodle, Canvas, or Blackboard). 

It utilizes modern asymmetric cryptography (JSON Web Tokens and OpenID Connect) for secure authentication and natively supports registering grades directly into the LMS gradebook via [Assignment and Grade Services (AGS v2.0)](https://www.imsglobal.org/spec/lti-ags/v2p0). Additionally, it features backward compatibility with legacy LTI 1.1 connections for a seamless transition.

### Supported Tool Types:
1. **Assessment/Correction tools:** Receive a file submitted by the student, process it, and return a numerical score (0-100) along with text/HTML feedback. The score is automatically synced with the LMS.
2. **Web applications (Redirection mode):** External applications that securely utilize LMS credentials and user data without natively implementing the LTI standard.

---

## 📐 Architecture

TPM acts as a middleware. It allows reusing local scripts, assessment tools, or custom web apps that were not originally designed to run online, handling the complex LTI 1.3 security flows transparently.

```text
                                   +-------+
                           .------>|TOOL_1 |
 +-------+      +-------+  |       +-------+
 |       |      |       |<-´
 |       |----->|       |          +-------+
 |  TC   |      |  TP   |<-------->|TOOL_2 |
 |       |      |       |<------.  +-------+
 |  LMS  |      |  TPM  |       |    ...
 |       |<-----|       |-----. |  +-------+
 |       |      |       |--.  | `->|TOOL_N |
 +-------+      +-------+  |  |    +-------+
                           |  |
                           |  |    +---------+
                           |  `--->|WEBAPP_1 |
                           |       +---------+
                           |         ...
                           |       +---------+
                           `------>|WEBAPP_N |
                                   +---------+
```

*(Note: While previous prototypes existed based on LTI 1.1, this version is a completely revamped and independent implementation upgraded to the latest LTI 1.3 Advantage security standards).*

---

## 💡 Features & Motivation

TPM is designed to solve real-world teaching challenges in technical degrees:

* **Automated File Grading:** Provides instant feedback for complex file submissions (e.g., code evaluation, programming assignments) that standard LMS quizzes cannot handle.
* **Pre-processing:** Reports common formatting errors before grading, saving time for both students and teachers.
* **Legacy Script Reusability:** Gives a second life to custom grading scripts that teachers traditionally ran manually.
* **Granular Access Control:** 4 distinct management roles (*Super Users, Tool Administrators, Editors, and Testers*) ensure secure administration separate from the LMS environment.

---

## 📊 Performance & Load Testing

To guarantee the reliability of the system under real academic environments, TPM has been extensively tested using **Apache JMeter**. 

Despite the high computational cost of the new LTI 1.3 asymmetric cryptography (RSA-SHA256 signatures and JWT validation), the system maintains excellent response times.

* 📂 **JMeter Scripts:** The test plans (`.jmx`), configurations, and raw results used for this validation are available in the `/jmeter` directory of this repository.
* 📈 **Results:** The hybrid system successfully handles concurrent launches natively, ensuring that LMS servers are not bottlenecked during peak usage (e.g., automated exam corrections).

---

## 🛠️ Technologies Used

* **Java** (JDK 11+)
* **Jakarta EE Servlets** & **JSP** (JavaServer Pages)
* **Apache Maven** (Dependency Management)
* **Security:** LTI 1.3 Core, OpenID Connect (OIDC), JWT, AGS v2.0, NRPS.
* **Database:** SQLite, PostgreSQL, or MariaDB/MySQL.

---

## ⚙️ Compilation & Installation

### 1. Build the project
[Apache Maven](https://maven.apache.org/) is required. Run the following command in the project root:

```bash
mvn clean package
```

### 2. Database Setup
Create a database using one of the provided SQL scripts located in `src/scripts/sql`.

### 3. Server Deployment
Deploy the generated `.war` file in a Jakarta EE 10 compatible application server (e.g., [Tomcat 10.1](https://tomcat.apache.org/download-10.cgi)).

Configure the database resource via JNDI with the name `jdbc/ltidb`. Example `context.xml` for Tomcat using SQLite:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Context reloadable="true">
    <Resource auth="Container" driverClassName="org.sqlite.JDBC" maxIdle="1" maxTotal="1" maxWaitMillis="-1" name="jdbc/ltidb" password type="javax.sql.DataSource" url="jdbc:sqlite:/absolute/path/to/your/tpm.db" username/>
    <CookieProcessor sameSiteCookies="strict"/>
</Context>
```

### 4. First Run
Access the application's context path. Log in using the default management credentials:
* **Username:** `super`
* **Password:** `super`

⚠️ *Change this password immediately upon first login.*

---

## 📚 Usage Examples

* [TPM-sshtool-template](https://github.com/fjfjgg/TPM-sshtool-template) - Example of an assessment tool accessible via SSH.
* [TPM-httptool-template](https://github.com/fjfjgg/TPM-httptool-template) - Example of a RESTful assessment tool accessible via HTTP (Python/Flask).
* [demo-oauth-lti](https://github.com/fjfjgg/demo-oauth-lti) - Web app integration via HTTP for initial data exchange.

---

## 🤝 Contributions
Contributions are greatly appreciated! If you have a suggestion that would make this project better, please fork the repo and create a pull request, or open an issue with the tag `enhancement`.

## 📄 License
Distributed under the GNU GENERAL PUBLIC LICENSE Version 3. See `LICENSE` for more information.

## ✉️ Contact & Authors

* **LTI 1.3 Architecture & Upgrade (Author):** Juan López Suárez
* **Original LTI 1.1 Architecture & Tutor:** Francisco José Fernández Jiménez ([@fjfjgg](https://github.com/fjfjgg))

**Project Link:** [https://github.com/ju4nlopezsuarez/tpm-lti1.3](https://github.com/ju4nlopezsuarez/tpm-lti1.3)

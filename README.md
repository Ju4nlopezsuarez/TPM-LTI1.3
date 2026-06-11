# TPM (Tool Provider Manager) - LTI 1.3 Advantage

Tool Provider Manager, an LTI v1.3 Advantage tool provider for managing non-LTI tools.

## Table of Contents

 1. [Description](#description)
 2. [Project Status](#project-status)
 3. [Technologies Used](#technologies-used)
 4. [Compilation](#compilation)
 5. [Installation](#installation)
 6. [Usage Examples](#usage-examples)
 7. [To Do](#to-do)
 8. [Contributions](#contributions)
 9. [License](#license)
10. [Contact & Authors](#contact--authors)
11. [References](#references)

## Description

Tool Provider Manager, or TPM for short, implements an [LTI 1.3 Advantage](https://www.imsglobal.org/spec/lti/v1p3/) Tool Provider (TP). A TP provides external tools to a Learning Management System (LMS) or Tool Consumer (TC) securely. It shares user credentials using modern asymmetric cryptography (JSON Web Tokens and OIDC) and can register grades directly into the LMS gradebook via [Assignment and Grade Services (AGS v2.0)](https://www.imsglobal.org/spec/lti-ags/v2p0). It also features backward compatibility with legacy LTI 1.1 connections.

TPM acts as a middleware or manager for external tools that do not natively support LTI standards and could not interact with the LMS on their own. TPM allows reusing assessment tools—primarily those not originally designed to run online—or easily creating new tools without having to worry about implementing complex LTI 1.3 security flows.

Currently, 2 types of "tools" can be connected to the TPM:

* **Assessment/Correction tools:** These receive a file submitted by the student and return a numerical score (0-100) along with text or HTML content to be displayed as feedback. The numerical result is sent back to the LMS to be recorded in the gradebook.
* **Web applications (Redirection mode):** Applications that want to connect with the LMS to utilize its credentials and user data without natively implementing the LTI standard, and do not need to return a grade to the LMS.

The following diagram illustrates the interaction between the different components:

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

While previous prototypes existed, this is a completely revamped, independent implementation upgraded to the latest security standards.

TPM provides 2 different interfaces:

* **LMS Interface:** The frontend displayed to students and teachers inside the virtual campus.
* **Management Interface:** Users access this interface with different credentials than the LMS and do not need to be LMS users. There are 4 types of management users:
  * **Super users:** Can create other users, change global application settings, and perform maintenance operations.
  * **Tool administrators:** Create *virtual* tools, configure connections with external web applications, and assign them unique identifiers (Client IDs/Deployment IDs). They can assign other users to these tools.
  * **Editors:** Edit the configuration of tools created by other administrators.
  * **Testers:** Can only test the tools assigned to them.

*(Note: Administrators can also edit and test, and editors can also test tools).*

TPM identifies which tool to execute when an LMS request arrives based on the `resource_link_id` and the OIDC security claims previously configured.

TPM provides common functionalities to all tools:

* Management of submitted files and obtained results.
* Tracking and storage of student attempts.
* Data isolation: The same tool can be reused across different courses or LMS platforms. TPM strictly separates students and attempts based on the Resource Link used.

### Motivation

This application was developed primarily to:

* Automatically grade files submitted by students, providing instant feedback. LMS platforms support auto-grading for certain quiz types, but not for complex file evaluations.
* Pre-process submitted files to report common formatting errors before grading. This allows students to fix submissions to meet minimum requirements and saves teachers from wasting time on formal aspects.
* Reuse custom grading scripts that teachers traditionally ran manually after downloading all submitted files.
* Avoid building web applications that duplicate user management already handled by the LMS. Access to custom web apps can be securely restricted to enrolled students and teachers without requiring manual user registration.

### Functionalities

The functionality provided by TPM depends on whether the tool is an assessment tool or a web application (*redirection mode*).

#### Assessment Tools

The following types of assessment tools are supported:

1. **Unknown type:** Used for testing purposes (Dummy runner).
2. **Local:** The tool runs on the same machine as the TPM server. Restricted only to specific administrators due to security implications and potential server performance impact.
3. **Over SSH:** The tool is executed remotely via SSH. Supports configuring multiple servers for alternative sending (round-robin). Includes mechanisms for remote tool updates via the LMS interface.
4. **Over HTTP:** The tool is executed via HTTP requests (REST API). Allows configuration of the HTTP method, headers, parameters, and how the JSON response is processed to extract the score and feedback message.
5. **Storage only:** No external assessment tool is executed; it simply uses TPM's built-in capabilities to store and manage submissions.

The minimum LMS interface common to all tools features a customizable description, a form to submit a file or text, and a space to display the result. If the user is a teacher, administrative tool info is also displayed. Optionally, the following can be enabled:

- **Delivery key:** The user must know a specific password to submit.
- **Previous attempts:** A student can view their previously submitted files/texts and results. A teacher can view all users' attempts, delete attempts, retrieve user info, and re-run grading manually. Attempts can be filtered and bulk-downloaded.
- **Time restrictions:** Countdowns are displayed if the tool is nearing its deadline for new attempts.
- **File constraints:** Restrictions on the expected filename and size.
- **Concurrency limits:** Restricts the number of users submitting attempts simultaneously.
- **Storage options:** Toggles for storing files and/or results on the server.
- **Attempt limits:** Maximum number of attempts allowed per user.
- **Teacher commands:** An additional text box enabling the teacher to send specific commands to the assessment tool.
- **Grade Passback:** Automated synchronization of grades to the LMS gradebook via AGS.

Local, SSH, and HTTP tools receive the following parameters:
1. The submitted file (if text is requested, it is stored as a file).
2. A unique identifier for the user making the attempt.
3. The original filename.
4. A unique counter incremented on each attempt.
5. A boolean indicating if the user is an instructor.

Additional parameters such as course name, locale, or static custom values can optionally be sent.

#### Redirection Mode

The redirection mode is primarily based on the [OAuth 2.0 Client Credentials Grant Type](https://oauth.net/2/grant-types/client-credentials/), though it is not strictly limited to it. The workflow is as follows:

1. TPM sends a backend request to the external web application. This authenticated request contains user and context data. The web app generates an access token and a continuation URL.
2. The user's browser is redirected to the new URL with the generated token. The web application retrieves the associated data and grants access.
3. If necessary, a further redirection is performed to avoid [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) issues. From this point on, the user interacts directly with the web application seamlessly, without manual registration.

The web application can alter its behavior depending on whether the user is a teacher or student.

## Project Status

Fully operational. (LTI 1.3 Upgrade Complete).

## Technologies Used

* Java (JDK 11+)
* Jakarta EE Servlets
* JSP (JavaServer Pages)
* Apache Maven
* LTI 1.3 Core Security (JWT, RS256, OIDC)

## Compilation

[Apache Maven](https://maven.apache.org/) is required.

Simply run the following command in the project root:

```shell
mvn clean package
```

## Installation

Create a database using one of the SQL scripts located in `src/scripts/sql`. SQLite, PostgreSQL, and MariaDB/MySQL are supported.

Deploy the generated `.war` file in a Jakarta EE 10 application server. The server only needs to implement the *Jakarta EE Web Profile*, such as [Tomcat 10.1](https://tomcat.apache.org/download-10.cgi). 

You must configure the database resource in the context or globally with the JNDI name `jdbc/ltidb`. For example, in Tomcat 10, you can create the following XML configuration (`tpm.xml`) for an SQLite database:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Context reloadable="true">
        <Resource auth="Container" driverClassName="org.sqlite.JDBC" maxIdle="1" maxTotal="1" maxWaitMillis="-1" name="jdbc/ltidb" password type="javax.sql.DataSource" url="jdbc:sqlite:/absolute/path/to/your/tpm.db" username/>
        <CookieProcessor sameSiteCookies="strict"/>
</Context>
```

Start the server.

Next, access the application's context path. Log in using the default credentials: username `super` and password `super`. **Change the password immediately** to a secure one and create new management users.

## Usage Examples

* [TPM-sshtool-template](https://github.com/fjfjgg/TPM-sshtool-template) - Example of an assessment tool accessible via SSH.
* [demo-oauth-lti](https://github.com/fjfjgg/demo-oauth-lti) - An integrated messaging application showcasing web app integration via HTTP for initial data exchange.
* [TPM-httptool-template](https://github.com/fjfjgg/TPM-httptool-template) - Example of a RESTful assessment tool accessible via HTTP (Python/Flask).

## To Do

* [ ] Translate the management interface into multiple languages. (The LMS interface is already available in English and Spanish).
* [ ] Implement additional cloud storage methods (e.g., S3).
* [ ] Create a comprehensive user manual.

## Contributions

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this project better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Do not forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the GNU GENERAL PUBLIC LICENSE Version 3. See `LICENSE.txt` for more information.

## Contact & Authors

* **LTI 1.3 Architecture & Upgrade:** Juan López Suárez
* **Original LTI 1.1 Architecture & Tutor:** Francisco José Fernández Jiménez - [@fjfjes](https://github.com/fjfjgg) - fjfj @ us.es

Project Link: [https://github.com/ju4nlopezsuarez/tpm-lti1.3](https://github.com/ju4nlopezsuarez/tpm-lti1.3)

## References

* [LTI 1.3 Core Specification](https://www.imsglobal.org/spec/lti/v1p3/)
* [LTI Assignment and Grade Services (AGS v2.0)](https://www.imsglobal.org/spec/lti-ags/v2p0)
* [LTI Names and Role Provisioning Services (NRPS v2.0)](https://www.imsglobal.org/spec/lti-nrps/v2p0)
* [OAuth 2.0 Client Credentials Grant Type](https://oauth.net/2/grant-types/client-credentials/)

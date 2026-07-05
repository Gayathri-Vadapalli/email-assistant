# Email Writer - Backend Service

A Spring Boot backend application that generates professional email replies using Google Gemini API. This service provides a REST API endpoint that accepts email content and tone preferences, then generates contextually appropriate email responses.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Running Locally](#running-locally)
- [API Documentation](#api-documentation)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)

## Features

✅ **Professional Email Generation** - Generate contextually appropriate email replies using AI  
✅ **Tone Customization** - Support for different email tones (formal, casual, friendly, etc.)  
✅ **REST API** - Simple POST endpoint for email generation  
✅ **Reactive Design** - Uses Spring WebFlux for non-blocking HTTP operations  
✅ **CORS Enabled** - Ready for frontend integration from any origin  
✅ **Clean Architecture** - Separation of concerns with service and controller layers  

## Prerequisites

Before running this application locally, ensure you have the following installed:

### Required Software

- **Java JDK 17 or higher**
  - [Download Java](https://www.oracle.com/java/technologies/downloads/#java17)
  - Verify installation: `java -version`

- **Apache Maven 3.6.0 or higher**
  - [Download Maven](https://maven.apache.org/download.cgi)
  - Verify installation: `mvn -version`

- **Git** (optional, for cloning the repository)
  - [Download Git](https://git-scm.com/downloads)

### API Keys & Credentials

- **Google Gemini API Key**
  - Sign up at [Google AI Studio](https://aistudio.google.com/)
  - Create a new API key
  - Keep this key secure and do not commit to version control

## Project Structure

```
email-writer-sb/
├── src/
│   ├── main/
│   │   ├── java/com/email/writer/
│   │   │   ├── EmailWriterSbApplication.java      # Application entry point
│   │   │   └── app/
│   │   │       ├── EmailGeneratorController.java   # REST API endpoints
│   │   │       ├── EmailGeneratorService.java      # Business logic
│   │   │       ├── EmailRequest.java               # Request model
│   │   │       └── WebClientConfig.java            # WebClient configuration
│   │   └── resources/
│   │       └── application.properties              # Application configuration
│   └── test/                                        # Test files
├── pom.xml                                          # Maven dependencies & build config
├── mvnw / mvnw.cmd                                  # Maven wrapper scripts
└── README.md                                        # This file
```

## Installation & Setup

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd email-writer-sb
```

Or if you already have the files, navigate to the project directory:

```bash
cd email-writer-sb
```

### Step 2: Verify Java Installation

Ensure Java 17 is installed:

```bash
java -version
```

Expected output should show Java 17.x.x

### Step 3: Verify Maven Installation

```bash
mvn -version
```

If Maven is not installed globally, you can use the Maven wrapper included in the project:

```bash
./mvnw -v
```

Or on Windows:

```bash
mvnw.cmd -v
```

### Step 4: Set Up Environment Variables

The application requires two environment variables for the Gemini API configuration.

#### On Windows (PowerShell):

```powershell
$env:GEMINI_URL="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"
$env:GEMINI_KEY="your-actual-api-key-here"
```

#### On Windows (Command Prompt):

```cmd
set GEMINI_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent
set GEMINI_KEY=your-actual-api-key-here
```

#### On macOS/Linux:

```bash
export GEMINI_URL="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"
export GEMINI_KEY="your-actual-api-key-here"
```

**⚠️ Important:** Replace `your-actual-api-key-here` with your actual Google Gemini API key.

### Step 5: Build the Project

Navigate to the project root directory and run:

```bash
mvn clean install
```

Or using the Maven wrapper:

```bash
./mvnw clean install
```

This command will:
- Clean previous builds
- Download all dependencies
- Compile the source code
- Run tests
- Package the application

**Expected output:** Build should end with `BUILD SUCCESS`

## Running Locally

### Method 1: Using Maven (Recommended for Development)

Once the build is successful, start the application with:

```bash
mvn spring-boot:run
```

Or using the Maven wrapper:

```bash
./mvnw spring-boot:run
```

**Expected output:**
```
...
Tomcat started on port(s): 8080 (http) with context path ''
Email Writer application is running successfully!
```

### Method 2: Running the JAR File

After building, you can run the packaged JAR file directly:

```bash
java -jar target/email-writer-sb-0.0.1-SNAPSHOT.jar
```

The application will start on `http://localhost:8080`

### Verifying the Application is Running

Open your browser or use curl to check if the application is running:

```bash
curl http://localhost:8080/actuator/health
```

Or simply visit: `http://localhost:8080/actuator/health`

## API Documentation

### Email Generation Endpoint

**Endpoint:** `POST /api/email/generate`

**Description:** Generates a professional email reply based on the provided email content and tone.

**Base URL:** `http://localhost:8080`

#### Request Body

```json
{
  "emailContent": "Hi, I wanted to reach out about the project deadline. Can you provide an update on the current status?",
  "tone": "professional"
}
```

**Parameters:**
- `emailContent` (required): The original email content to reply to
- `tone` (optional): The desired tone for the reply. Examples: "professional", "friendly", "casual", "formal"

#### Response

**Success Response (200 OK):**
```json
"Dear colleague,\n\nThank you for reaching out regarding the project deadline. I appreciate your inquiry about our current progress.\n\n..."
```

The response is a plain text string containing the generated email reply.

#### Example Request using cURL

```bash
curl -X POST http://localhost:8080/api/email/generate \
  -H "Content-Type: application/json" \
  -d '{
    "emailContent": "Hi, could you help me with the project?",
    "tone": "professional"
  }'
```

#### Example Request using JavaScript/Fetch

```javascript
fetch('http://localhost:8080/api/email/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    emailContent: 'Hi, could you help me with the project?',
    tone: 'professional'
  })
})
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

## Configuration

### Application Properties

Configuration is managed through `src/main/resources/application.properties`:

```properties
spring.application.name=email-writer-sb
gemini.api.url=${GEMINI_URL}
gemini.api.key=${GEMINI_KEY}
```

### Port Configuration

By default, the application runs on port `8080`. To change it, add the following to `application.properties`:

```properties
server.port=9090
```

### CORS Configuration

The application is configured to accept requests from all origins (`@CrossOrigin(origins = "*")`). For production, modify the `EmailGeneratorController` to restrict CORS to specific domains:

```java
@CrossOrigin(origins = {"https://yourdomain.com", "https://app.yourdomain.com"})
```

## Troubleshooting

### Issue: "Java version not found" error during build

**Solution:**
- Verify Java 17 is installed: `java -version`
- Set JAVA_HOME environment variable to your Java 17 installation directory
- Restart your terminal/IDE after setting environment variables

### Issue: "mvn command not found"

**Solution:**
- Either install Maven globally, or
- Use the included Maven wrapper: `./mvnw` (macOS/Linux) or `mvnw.cmd` (Windows)

### Issue: "GEMINI_URL or GEMINI_KEY not set" error

**Solution:**
- Verify environment variables are set correctly
- Use `echo $GEMINI_KEY` (macOS/Linux) or `echo %GEMINI_KEY%` (Windows) to check
- Ensure variables are set before running the application
- For permanent setup, add to your system environment variables

### Issue: "Failed to connect to Gemini API"

**Solution:**
- Verify your API key is valid at [Google AI Studio](https://aistudio.google.com/)
- Check your internet connection
- Ensure the API URL is correct
- Verify API key has appropriate permissions

### Issue: "Port 8080 already in use"

**Solution:**
- Either stop the application using port 8080, or
- Change the port in `application.properties`: `server.port=9090`
- Then rebuild and run: `mvn clean spring-boot:run`

### Issue: Build fails with "BUILD FAILURE"

**Solution:**
- Check error messages in the console
- Ensure all prerequisites are installed correctly
- Try: `mvn clean install -DskipTests` to skip tests and see if the core build works
- Clear Maven cache: `mvn clean -q`

## Development Notes

- **Framework:** Spring Boot 4.1.0
- **Language:** Java 17
- **Build Tool:** Maven
- **Reactive Library:** Spring WebFlux with Project Reactor
- **JSON Processing:** Jackson
- **Annotations:** Lombok (for reducing boilerplate code)

## Next Steps

1. Integrate with your frontend application using the API endpoint
2. Add authentication/authorization if needed
3. Implement database integration for email history
4. Add unit and integration tests
5. Deploy to production environment

## Support & Troubleshooting

For additional help:
- Check Spring Boot documentation: https://spring.io/projects/spring-boot
- Google Gemini API docs: https://ai.google.dev/tutorials
- Review application logs for error messages

---

**Last Updated:** 2026  

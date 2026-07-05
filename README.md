# Email Writer Assistant

Email Writer Assistant is a three-part project for generating AI-assisted email replies:

- A Spring Boot backend that calls Gemini and exposes the `/api/email/generate` endpoint.
- A React + Vite web app for composing email prompts and generating replies.
- A Chrome extension that injects an AI Reply button into Gmail compose windows.

## What’s Included

- Backend service: `email-writer-sb`
- Web application: `email-writer-react`
- Chrome extension: `email-writer-ext`

## Features

- Generate context-aware email replies from pasted email text.
- Choose a reply tone such as professional, casual, or friendly.
- Use the same backend from both the web app and the browser extension.
- Load the extension locally for Gmail-based testing.

## Repository Layout

```text
Email_Assisstant/
├── email-writer-sb/       # Spring Boot backend
├── email-writer-react/    # React + Vite frontend
└── email-writer-ext/      # Chrome extension for Gmail
```

## Prerequisites

- Node.js 16 or later
- npm
- Java 17 or later
- Maven 3.6+ or the included Maven wrapper
- Google Chrome or another Chromium-based browser

## Local Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd Email_Assisstant
```

### 2. Start the backend service

Open a terminal in `email-writer-sb` and set the Gemini environment variables first.

PowerShell:

```powershell
Set-Item Env:GEMINI_URL "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"
Set-Item Env:GEMINI_KEY "your-gemini-api-key"
./mvnw.cmd spring-boot:run
```

Or with Maven installed globally:

```bash
mvn spring-boot:run
```

The backend should be available at `http://localhost:8080`.

### 3. Start the React app

Open a second terminal in `email-writer-react` and run:

```bash
npm install
npm run dev
```

The web app should be available at `http://localhost:5173`.

### 4. Load the Chrome extension

1. Open Chrome and go to `chrome://extensions`.
2. Turn on Developer mode.
3. Click Load unpacked.
4. Select the `email-writer-ext` folder.
5. Open Gmail and refresh the page.

The extension will use the backend at `http://localhost:8080`.

## How the Project Works

1. The frontend or Gmail extension sends the current email content to the backend.
2. The backend forwards the request to Gemini using the configured API key.
3. The generated response is returned as plain text.
4. The frontend or extension inserts the reply for the user to review and copy.

## API Endpoint

`POST http://localhost:8080/api/email/generate`

Request body:

```json
{
  "emailContent": "string",
  "tone": "professional"
}
```

## Build Commands

Backend:

```bash
cd email-writer-sb
./mvnw clean package
```

Frontend:

```bash
cd email-writer-react
npm run build
```

## Notes

- The backend must be running before the frontend or extension can generate replies.
- If Gmail changes its DOM structure, the extension selectors may need maintenance.
- The project is designed for local development and can be adapted for production deployment.
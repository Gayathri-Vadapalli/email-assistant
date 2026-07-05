# Email Writer Assistant

Email Writer Assistant is a Chrome extension that adds an **AI Reply** button inside Gmail compose windows. When clicked, it sends the current email context to a local backend and inserts the generated reply back into the compose editor.

## Features

- Adds an AI Reply button to Gmail compose toolbars.
- Collects visible email content from the open message thread.
- Sends the email content to a local API for reply generation.
- Inserts the generated response directly into the Gmail compose box.

## Project Structure

- `manifest.json` - Chrome extension manifest.
- `content.js` - Gmail content script that injects the button and handles reply generation.
- `content.css` - Styles for the injected UI.

## Requirements

- Google Chrome or another Chromium-based browser.
- A local backend running at `http://localhost:8080`.
- Gmail access in the browser.

## Local Setup

1. Clone or download this repository.
2. Make sure your backend API is running and reachable at `http://localhost:8080/api/email/generate`.
3. Open Chrome and go to `chrome://extensions`.
4. Turn on **Developer mode** in the top-right corner.
5. Click **Load unpacked**.
6. Select the `email-writer-ext` folder.
7. Open Gmail and refresh the page.
8. Start a new compose window. The **AI Reply** button should appear in the toolbar.

## How It Works

1. The content script watches Gmail for compose window changes.
2. When a compose toolbar appears, it injects an **AI Reply** button.
3. Clicking the button gathers the current email content and sends it to the local API.
4. The generated reply is inserted into the Gmail compose editor.

## API Contract

The extension sends a `POST` request to:

`http://localhost:8080/api/email/generate`

Request body:

```json
{
  "emailContent": "string",
  "tone": "professional"
}
```

The API is expected to return the generated reply as plain text.

## Troubleshooting

- If the button does not appear, refresh Gmail after loading the extension.
- If generation fails, confirm the backend is running on port `8080`.
- If Gmail layout changes, some DOM selectors in `content.js` may need updating.
- If the reply is not inserted, make sure the compose window is active and editable.

## Notes

- This extension is designed for local development and testing.
- Gmail DOM structure can change over time, so selector maintenance may be required.
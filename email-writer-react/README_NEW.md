# Email Writer React

A modern, responsive web application for generating professional email replies using AI. Built with React and Vite, this application provides an intuitive interface for crafting tailored email responses based on received emails and preferred tone.

## Features

- **Email Content Input**: Paste and analyze incoming email content
- **Tone Selection**: Choose from multiple tone options (Professional, Casual, Friendly, or None)
- **AI-Powered Generation**: Generate contextual email replies with the selected tone
- **Copy to Clipboard**: Easily copy generated replies for use elsewhere
- **Responsive Design**: Clean, professional UI built with Material-UI
- **Real-time Loading**: Visual feedback during reply generation
- **Error Handling**: Graceful error messages for failed requests

## Tech Stack

- **Frontend Framework**: React 19.2
- **Build Tool**: Vite 8.1
- **UI Library**: Material-UI (MUI) 9.2
- **HTTP Client**: Axios 1.18
- **Styling**: Emotion (CSS-in-JS)
- **Code Quality**: ESLint

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (v7 or higher) - Usually included with Node.js
- **Git** - [Download here](https://git-scm.com/)

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/email-writer-react.git
cd email-writer-react
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies listed in `package.json`.

## Running Locally

### Development Server

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (Vite's default port).

The dev server will:
- Automatically reload when you save files
- Show lint errors in the terminal
- Provide fast refresh for React components

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Code Quality

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

The project includes ESLint rules for:
- React best practices
- React Hooks compliance
- React Refresh compatibility

## Project Structure

```
email-writer-react/
├── src/
│   ├── App.jsx              # Main application component
│   ├── App.css              # Application styles
│   ├── main.jsx             # React entry point
│   ├── index.css            # Global styles
│   └── assets/              # Static assets
├── public/                  # Public static files
├── index.html               # HTML template
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
├── package.json            # Project dependencies and scripts
└── README.md               # This file
```

## API Integration

The application communicates with a backend API for email reply generation:

### Endpoint

- **Method**: POST
- **URL**: `http://localhost:8080/api/email/generate`
- **Request Body**:
  ```json
  {
    "emailContent": "string",
    "tone": "string (optional: '', 'professional', 'casual', 'friendly')"
  }
  ```
- **Response**: Generated email reply string

### Backend Setup

Before using the application, ensure your backend API is running on `http://localhost:8080`. Refer to the backend repository for setup instructions.

## Environment Configuration

To change the API endpoint, modify the URL in [src/App.jsx](src/App.jsx#L20):

```javascript
const response = await axios.post("http://localhost:YOUR_PORT/api/email/generate", {
  emailContent,
  tone,
});
```

## Usage

1. **Start the development server**: `npm run dev`
2. **Open the application** in your browser (typically `http://localhost:5173`)
3. **Paste email content** in the "Original Email Content" text area
4. **(Optional) Select a tone** from the dropdown menu
5. **Click "Generate Reply"** to generate an AI-powered response
6. **Copy the reply** using the "Copy to Clipboard" button

## Troubleshooting

### Application Won't Start
- Ensure Node.js v16+ is installed: `node --version`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check if port 5173 is already in use

### API Connection Error
- Verify the backend API is running on `http://localhost:8080`
- Check the API endpoint URL in [src/App.jsx](src/App.jsx)
- Ensure CORS is properly configured on your backend

### Port Already in Use
- For Vite dev server: `npm run dev -- --port 3000`
- Kill the process using the port:
  - **Windows**: `netstat -ano | findstr :5173` then `taskkill /PID <PID> /F`
  - **Mac/Linux**: `lsof -i :5173` then `kill -9 <PID>`

## Performance Optimization

The project uses:
- **Vite**: Lightning-fast build tool with native ES modules support
- **React 19**: Latest React version with performance improvements
- **Code Splitting**: Automatic by Vite
- **Minification**: Automatic in production builds

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit your changes: `git commit -m 'Add your feature'`
3. Push to the branch: `git push origin feature/your-feature`
4. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues, questions, or suggestions:
- Check [existing issues](https://github.com/yourusername/email-writer-react/issues)
- Create a new issue with detailed information
- Contact: your-email@example.com

## Related Projects

- **Backend API**: [email-writer-backend](https://github.com/yourusername/email-writer-backend)
- **Chrome Extension**: [email-writer-extension](https://github.com/yourusername/email-writer-extension)

---

**Last Updated**: 05/07/2026 
**Maintainer**: Gayathri Vadapalli

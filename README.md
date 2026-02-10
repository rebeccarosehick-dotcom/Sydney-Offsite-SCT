# Sydney Offsite SST Web App

A modern, responsive web application for presenting the FY26 Sydney SST Offsite content.

## Overview

This web application provides an interactive presentation interface for the Sydney Offsite Spark Input session. It features a clean, professional design with PDF viewing capabilities and responsive layout.

## Features

- 🎨 Modern, gradient-based design
- 📱 Fully responsive layout (mobile, tablet, desktop)
- 📄 Embedded PDF viewer with fallback download option
- ✨ Smooth animations and transitions
- 🎯 Information cards highlighting key event details
- 🔄 Cross-browser compatibility

## Files

- `index.html` - Main HTML structure
- `styles.css` - CSS styling and responsive design
- `script.js` - JavaScript for interactive features
- `FY26 Sydney_February_SST Offsite v1.0_Spark Input .pdf` - Presentation document

## Usage

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/rebeccarosehick-dotcom/Sydney-Offsite-SCT.git
   cd Sydney-Offsite-SCT
   ```

2. Open `index.html` in a web browser:
   ```bash
   # On Linux/Mac
   open index.html
   
   # On Windows
   start index.html
   
   # Or simply double-click the index.html file
   ```

### Using a Local Web Server

For better PDF viewing experience, serve the files with a local web server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## Browser Compatibility

The web app works on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## PDF Viewing

The application attempts to display the PDF inline. If your browser doesn't support inline PDF viewing, it will automatically show a download button instead.

### Note on PDF Protection

The included PDF document uses Microsoft Information Protection. To view the full content:
1. You may need proper permissions from the document owner
2. Use a PDF viewer that supports Azure Rights Management
3. Contact the document administrator for access

## Customization

### Changing Colors

Edit `styles.css` and modify the gradient colors:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Updating Content

Edit `index.html` to update:
- Event details in the info cards
- Header title and subtitle
- Welcome message

## Deployment

### GitHub Pages

1. Go to repository Settings > Pages
2. Select the branch (main/master)
3. Save and wait for deployment
4. Access at: `https://[username].github.io/Sydney-Offsite-SCT/`

### Other Hosting Options

- Netlify: Drag and drop the folder
- Vercel: Connect your GitHub repository
- Any static hosting service

## License

All rights reserved © 2026 Sydney SST Offsite

## Support

For issues or questions, please contact the repository owner.

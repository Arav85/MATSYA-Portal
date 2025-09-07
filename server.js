const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 8080;

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Serve static files (like index.html) from the project's root directory
app.use(express.static(__dirname));

// Route to serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log('✅ Servers are running!');
  console.log(`🚀 Main application available at: http://localhost:${PORT}`);
  console.log(`📝 API (database) available at: http://localhost:3000`);
});
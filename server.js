const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve HTML, CSS, and JS files from the 'app' folder
app.use('/app', express.static(path.join(__dirname, 'app')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

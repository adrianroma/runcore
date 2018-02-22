// Dependencies
const express = require('express');
const path = require('path');

// App Instance
const app = express();

// Enviroment Variables
const PORT = process.env.PORT || 5000;
const isDevelopment = process.env.NODE_ENV !== 'production';

// Static Folder
app.use(express.static(path.join(__dirname, 'dist')));

// Send All Trafic to React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.hmtl'));
});

// Listen Port
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

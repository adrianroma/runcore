// Dependencies
const express = require('express');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddlewar = require('webpack-hot-middleware');

// Webpack development configuration file
const webpackConfig = require('./src/webpack/webpack.config.dev');

// Compile Webpack
const webpackCompile = webpack(webpackConfig);

// App Instance
const app = express();

// Enviroment Variables
const PORT = process.env.PORT || 5000;
const isDevelopment = process.env.NODE_ENV !== 'production';

if (isDevelopment) {
  app.use(webpackDevMiddleware(webpackCompile));
  app.use(webpackHotMiddleware(webpackCompile));  
}

// Static Folder
app.use(express.static(path.join(__dirname, 'dist')));

// Send All Trafic to React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.hmtl'));
});

// Listen Port
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

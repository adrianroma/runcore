/* eslint no-console: 0 */

// Dependencies
const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// Webpack development configuration file
const webpackConfig = require('../webpack/webpack.config.dev');

// Compile Webpack
const webpackCompile = webpack(webpackConfig);

// App Instance
const app = express();

// Enviroment Variables
const PORT = process.env.PORT || 5000;
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

if (isDevelopment) {
  app.use(webpackDevMiddleware(webpackCompile));
  app.use(webpackHotMiddleware(webpackCompile));
} else if (isProduction) {
// Static Folder
  app.use(express.static(path.join(__dirname, 'dist')));

  // Send All Trafic to React
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.hmtl'));
  });
} else {
  try {
    throw new Error('Please verify your NODE_ENV variable');
  } catch (error) {
    console.log(error);
  }
}

// Listen Port
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

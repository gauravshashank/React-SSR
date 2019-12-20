const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const config = {

  //tell webpack root of client
  "entry": "./src/client/client.js",

  //the output directory
  "output": {
    "filename": "bundle.js",
    "path": path.resolve(__dirname, "public")
  }
}

module.exports = merge(baseConfig, config);
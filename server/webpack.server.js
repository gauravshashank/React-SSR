const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const wepackNodeExternals = require('webpack-node-externals');
const config = {
  // Inform webpack building for nodejs, and not for browser
  target: 'node',
  
  //tell webpack root of server
  entry: './src/index.js',

  //Output DIrectory
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  externals: [wepackNodeExternals()]

}

module.exports = merge(baseConfig, config);
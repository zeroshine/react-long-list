var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/js/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin('assets/css/app.css'),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: path.join(__dirname, 'src'),
      exclude: path.join(__dirname, 'node_modules'),
    },{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        notExtractLoader: "style-loader",
        loader:"css?modules&importLoaders=1&localIdentName=[hash:base64:3]"
      })
    }]
  },
  resolve: {
    alias:{
      css: path.join(__dirname, 'src/css/'),
      imgs: path.join(__dirname, 'src/imgs'),
      src: path.join(__dirname, 'src'),
    },
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.jsx', '.json','.css','.scss']
  }
};

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './src/js/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: 'http://localhost:8000/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel?cacheDirectory',
      include: path.join(__dirname, 'src'),
      explude: path.join(__dirname, 'node_modules')
    },{
      test: /\.css$/,
      loader: "style!css?modules&importLoaders=1&localIdentName=[hash:base64:3]"
    }]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    alias:{
      css: path.join(__dirname, 'src/css'),
      imgs: path.join(__dirname, 'src/imgs'),
      src: path.join(__dirname, 'src'),
    },
    extensions: ['', '.js', '.jsx', '.json','.scss','.css']
  }
};
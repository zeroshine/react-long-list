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
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'BABEL_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        //toplevel: true,
        screw_ie8: true
      },

      compress: {
        pure_getters: true,
        unsafe: true,
        // unsafe_comps: true,
        screw_ie8: true,
        sequences: true,
        dead_code: true,
        booleans: true,
        drop_console: true,
        properties: true,
        loops: true,
        if_return: true,
        comparisons: true,
        warnings: false,
        conditionals: true,
        join_vars: true,
        cascade: true,
        unused: true,
        hoist_funs: true,
        evaluate: true,
      }
    })
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

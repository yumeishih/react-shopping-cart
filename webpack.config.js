const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const debug = process.env.NODE_ENV !== "production";

module.exports = {
    // context: path.join(__dirname, "/"), // makes the configuration independent from CWD (current working directory).
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + "/dist/",
    },
    module:{
        rules: [
          {
            test:  /\.jsx?$/,
            enforce: 'pre',
            use:[
            { loader: 'eslint-loader',
               options: {
                emitError: true,
                emitWarning: true,
                failOnError: false
              }
            }
            ],
            exclude: /(node_modules)/,

          },
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use:[
              {
                loader: 'babel-loader',
                options:{
                  presets: ['react', 'es2015', 'stage-1'],
                  plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],

                }
              }
            ],

          },
          {
            test: /\.scss$/,
            exclude: /(node_modules)/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
        ]
  },
  devtool: debug ? "inline-sourcemap" : false,
  plugins: debug ? [
    new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        inject: 'body'
      })
    ] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ],
}
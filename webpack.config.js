const path = require('path');
const webpack = require("webpack");
const debug = process.env.NODE_ENV !== "production";

module.exports = {
    context: path.join(__dirname, "src"), // makes the configuration independent from CWD (current working directory).
    entry: './js/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + "/src/",
    },
    module:{
        rules: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader',
              query: {
                presets: ['react', 'es2015', 'stage-1'],
                plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
              }
            }
          ]
    },
    devtool: debug ? "inline-sourcemap" : false,
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
      ],

}
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var nodeExternals = require("webpack-node-externals");
// require("babel-register");
// Webpack Configuration
const config = {
  // Entry
  entry: "./src/index.js",
  mode: "development",

  // Output
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    stats: {
      children: false,
      maxModules: 0
    },
    port: 3000
  },

  // Loaders
  module: {
    rules: [
      // JavaScript/JSX Files
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      // CSS Files
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: "dist/index.html",
      filename: "index.html",
      hash: true
    })
  ]
  // node: {
  //   fs: "empty",
  //   net: "empty",
  //   tls: "empty"
  // }
};
// Exports
module.exports = {
  target: "node", // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()] // in order to ignore all modules in node_modules folder
};

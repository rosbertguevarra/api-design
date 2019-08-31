const path = require("path");
const webpack = require("webpack");
require("@babel/register");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var nodeExternals = require("webpack-node-externals");

module.exports = {
  // Entry
  entry: [
    "./src/index.js",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server"
  ],

  // Output
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    hot: true,
    open: true,
    historyApiFallback: true,
    stats: {
      children: false,
      maxModules: 0
    },
    contentBase: "./dist"
  },

  // Loaders
  module: {
    rules: [
      // JavaScript/JSX Files
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      // CSS Files
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: "dist/index.html",
      filename: "index.html",
      hash: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

// Exports
module.exports = {
  target: "node", // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()] // in order to ignore all modules in node_modules folder
};

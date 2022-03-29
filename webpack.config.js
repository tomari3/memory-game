/* eslint-disable no-undef */
const path = require("path");
module.exports = {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
  entry: "./src/app.js",
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public"),
  },
};

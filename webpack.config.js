const path = require('path');
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    TicTacToe: './src/TicTacToe.js',
    ListName: './src/ListName.js',
    Clock: './src/Clock.js',
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
    compress: true,
    port: 3000,
    hot: true,
    static: [
      {directory: path.join(__dirname, "public"),},
      {directory: path.join(__dirname, "dist"),},
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

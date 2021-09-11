const path = require("path")
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: 'development',
  entry: {
    main: './src/javascripts/app.js'
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 3000,
    hot: true,
    static: [
      {directory: path.join(__dirname, "public"),},
      {directory: path.join(__dirname, "dist"),},
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: "./public/index.html",
      excludeChunks: [ 'server' ]
    })
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    clean: true,
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins 
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            //options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
}

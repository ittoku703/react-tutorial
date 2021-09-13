const path = require("path")

module.exports = {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 8080,
    host: 'localhost',
  },
  entry: {
    app: ['./src_client/javascripts/index.js'],
    contents: ['./src_client/javascripts/contents.js'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/js/',
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    'modules': false,   // commonjs,amd,umd,systemjs,auto
                    'useBuiltIns': 'usage',
                    'targets': '> 0.25%, not dead',
                    'corejs': 3,
                  }
                ]
              ]
            }
          },
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  resolve: {
    alias: {}
  },
  plugins: [],
};

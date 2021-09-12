import express from 'express'
import webpack from 'webpack'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import WebpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack.config.js'

const app = express()
const port = 8080
const devServerEnables = true

if (devServerEnables) {
  config.entry.app.unshift('webpack-hot-middleware/client?reload=true&timeout=1000');
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  const compiler = webpack(config);
  app.use(WebpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));
  app.use(WebpackHotMiddleware(compiler));
}

app.use(express.static('./public'));


app.listen(port, () => {
  console.log(`App listening to ${port}`)
})

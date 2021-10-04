import express from 'express'
import webpack from 'webpack'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import WebpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack.config.js'
import path from 'path'

const app = express()
const port = 8080
const devServerEnables = true

if (devServerEnables) {
  for (let i = 0; i < config.entry.length; i++) {
    config.entry[i].unshift('webpack-hot-middleware/client?reload=true&timeout=1000');
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  const compiler = webpack(config);
  app.use(WebpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));
  app.use(WebpackHotMiddleware(compiler));
}

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile(pathToHtml('index.html'))
})

app.get('/contents', (req, res) => {
  res.sendFile(pathToHtml('contents.html'))
})

app.listen(port, () => {
  console.log(`App listening to ${port}`)
})

function pathToHtml(filename = "") {
  return path.join(__dirname, '../', 'public', filename)
}

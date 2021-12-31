const path = require('path');
const Html = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = { 
  mode: "development",
  entry: './src/index.js',
  output: { 
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: { 
    static: {
      directory: "./dist"
    },
    port: 3000,
    devMiddleware: {
      writeToDisk: true,
    },
    historyApiFallback: {
      index: 'index.html'
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Html({
      filename: 'index.html',
      title: "Modes"
    })
  ]
}
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Webpack = require('webpack');

module.exports = { 
  mode: "development",
  entry: './src/index.js',
  output: { 
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: { 
    rules: [
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
      }
    ]
  },
  //esse plugin vai extrair o css para um arquivo separado
  //sem ele o css fica no header do html
  plugins: [ 
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    //definindo varias globais
    //preciso transformar em string para o webpack reconhecer
    new Webpack.DefinePlugin({
      port: JSON.stringify("3000"),
      version: JSON.stringify("1.0.0")
    }) 
  ]
}
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const Html = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = { 
  mode: "development",
  entry: './src/index.js',
  output: { 
    path: path.resolve(__dirname, 'dist'),
    //por padrão o webpack vai gerar um arquivo index.js,
    //navegador pode salvar o arquivo no cache para melhorar a performance,
    //problema e que quando gerar um novo arquivo ele não atualiza o cache,
    //com  [name].[contenthash] eu gero um novo arquivo e atualizo o cache
    filename: '[name].[contenthash].js',
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
    //vai limpar os arquivos que foram gerados apos a build e nao sao mais necessários
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      //todos filename serao mudados para [name].[contenthash].extensao do arquivo
      filename: '[name].[contenthash].css',
    }),
    //definindo varias globais
    //preciso transformar em string para o webpack reconhecer
    new Webpack.DefinePlugin({
      port: JSON.stringify("3000"),
      version: JSON.stringify("1.0.0")
    }),
    new Dotenv(),
    //vai gerar um novo html baseado no output do webpack
    new Html(),
  ]
}
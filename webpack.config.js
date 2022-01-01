const path = require("path");
const { ProvidePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = { 
  mode: "development",
  //code splitting
  //técnica de possuir vários arquivos de entrada. 
  //Normalmente util quando quereremos recursos específicos separados 
  entry: {
       index: {
         import: "./src/index.js",
         //quando as entradas dependente de mesma lib
         dependOn: "shared"
       },
       next: {
          import: "./src/next.js",
          dependOn: "shared"
       },
       //nome da lib que será utilizada
       shared: "lodash",
  },
  output: { 
    path: path.resolve(__dirname, "public/bundle"),
    //deixando dinamico para melhorar o build
    //este casso estou utilizando optimization
    filename: "[name].js"
  },
  //devServer melhorar o build
  devServer: { 
    historyApiFallback: true,
    hot: true,
    port: 8000,
    static: {
      directory: "./public/bundle"
    },
  },
  module: { 
    //babel loader vai melhorar o build
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
        include: path.resolve(__dirname, "src")
      }
    ],
  },
  plugins: [ 
    //ProvidePlugin vai lidar com importações globais
    //Shimming
    new ProvidePlugin({
      _: "lodash"
    }),
    new HtmlWebpackPlugin({
      title: "Resources webpack"
    })
  ],
  //isso vai melhorar o tempo de build  
  //preciso deixar agora o filename seja dinamico e instalar
  //html plugin para nao se preocupar com a referencia do html 
  //no bundle
  optimization: {
     runtimeChunk: true,
  }
}
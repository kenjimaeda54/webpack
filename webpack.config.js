const path = require('path');


module.exports = { 
  mode: "development",
  entry: './src/index.js',
  output: { 
    path: path.resolve(__dirname, 'public/bundle'),
    filename: 'index.js'
  },
  module: { 
    rules: [ 
      {
        test: /\.css$/,
        //a ordem importa e também precisa instalar o css-loader e o style-loader
        use: [ 
          'style-loader',
          'css-loader'
        ]
      },
      {
        //flag i e case sensitive ou seja nao importa maiúsculo ou minusculo
        //neste caso extensao do arquivo e  minusculo, mesmo assim copilou motivo 
        //sigla i
        test: /\.(JPG|JPEG|PNG)$/i,
        use: [ 
          'file-loader'
        ]
      },
      {
        test: /\.(scss|sass)$/i,
        //aqui estamos lindando com o node então precisa instalar 
        //também o node-sass,mas nao precisa especificar o plugin
        use: [ 
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}
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
        test: /\.(JPG|JPEG|PNG)$/,
        use: [ 
          'file-loader'
        ]
      }
    ]
  }
}
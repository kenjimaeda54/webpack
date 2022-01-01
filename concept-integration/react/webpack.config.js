const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: { 
    filename: 'index.js',
    path: path.resolve(__dirname, 'public/bundle'),
    publicPath: '/public'
  },
  resolve: { 
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  module: { 
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: "ts-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ]
  },
  devServer: {
     static: {
        directory: "./public"
     },
     port: 3000,
     historyApiFallback: true,
     devMiddleware: {
       writeToDisk: true,
     },
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
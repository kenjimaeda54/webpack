const path = require("path");


module.exports = { 
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: { 
    extensions: [".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src")
    },
  },
  //target e para o webpack saber que o que está sendo compilado é um browser,electron ou   node   
  //no browser nao precisa colocar target
  target: 'node',
  module: { 
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: "ts-loader"
      }
    ]
  }
}
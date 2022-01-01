# webpack
Webpack e uma excelente trasnformador de arquivos Js.

## Motivacao
- Aprender o uso do webpack e seus principais recursos

## Feature

### I/O
- Wepback tem uma arquitetura parecido com   projetos React, ou seja, tem apenas uma entrada e saída.
- Em algumas situações podemos utilizar  duas entradas, são comuns em projetos micro front end ou projetos que desejamos recursos separados.
- Quando desejamos duas entradas separadas, se elas  possuem libs  compartilhadas boa prática usar uma chave para identificar essa dependência, assim evita arquivos duplicados
- Exemplo baixo estou usando o loadsh como dependência, essa técnica e conhecida code splitting
- Técnica interessante é deixar dinâmico as saídas assim consigo algumas coisas interessantes como reduzir tempo de build, performance. 

```js

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

```

##

## Loaders
- Loaders são importantes recursos do webpack com eles conseguimos transformar arquivos que não  são js
- Exemplo imagens, json, css.
- Normalmente os loardes seguem uma linha de raciocínio, primeiro faço  regex para dar match com as extensões, depois escrevo os loaders que farão essas transformações
- Todos loardes precisam ser instaladas como desenvolvimento


```js

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
      },
      {
        test: /\.m?js$/,
        //precisa excluir node_modules se nao vai dar match
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: { 
            //babel serve para converter o js novo para o browser
            //olhar a docs os plugins 
            //precisa instalar o @babel/core
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.txt$/,
        use: "raw-loader"
      }
    ]
  }



```

##

## Plugins
- Sao funcionalidades para resolver problemas de desempenho, código repetido e outras funcionalidades
- Normalmente os plugins precisam ser instaladas  é apos isto instanciadas
- Alguns plugins lidam com arquivos duplicados  , html para referenciar os scripts que estão dinâmicos, variável de ambiente



```js
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


```


##

## Integrações, Recursos Avançados
- Pratiquei alguns recursos avançadas como  lazy loader, com ele consegue renderizar componentes apenas quando tem necessidade, assim melhora performance de carregamento do sai-te, porque não precisa carregar tudo quando usuário entra na aplicação
- Integrei com React, Express.
- React usei um cnd da lib para facilitar integração
- Express precisa usar o target para webpack entender que estamos lidando com node e não navegador
- Integrei com typescript , utilizei loader ts-loader
- Utilizei o devServer para fazer fast refresh

```html

  <main id="main"> </main>
  <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"> </script>
  <script src="bundle/index.js" > </script>

```

```js
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
  
  /devServer melhorar o build
  devServer: { 
    historyApiFallback: true,
    hot: true,
    port: 8000,
    static: {
      directory: "./public/bundle"
    },

```
















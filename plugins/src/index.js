import Title from "./components/title"


const title = new Title();
title.build("Hello World");


//pegando variáveis globais definidas no webpack.config.js
console.log("porta",port)
console.log(version)
console.log("api key",process.env.API_KEY)
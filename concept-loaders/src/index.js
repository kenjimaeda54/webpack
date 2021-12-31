import Title from './components/title';
import ImgBob from './components/load-img';
import Button from "./components/button";
//por ser html preciso usar a extensao .html
//normalmente nao vai aparecer a opção de html
import warning from "./templates/warnings/index.html";
//preciso importar em um arquivo js porque html nao aceita import
import "./templates/warnings/styles.scss";
//arquivos que js nao entende exemplo imagem,text,html,precisa descrever o nome real do arquivo
//aqui no caso phrases.txt
import text from "./file/phrases.txt";
import user from "./file/user.json";

const components = new Title();
components.create('Hello World');

const img = new ImgBob();
img.load();

const button = new Button();
button.build();

//rest objet
const obj = {
  name: 'Bob',
  age: '30',
  city: 'São Paulo',
  height: '1.80',
  weight: '70'
}

const { name,age, ...rest } = obj;
console.log("name",name);
console.log("idade",age);
console.log("aqui e o rest",rest);

const body = document.querySelector('body');
body.innerHTML += warning;

const textFile = text;
console.log(text.toUpperCase());
console.log("o tamanho do texto",text.length);

const userFile  = user;
console.log(userFile);


import Title from './components/title';
import ImgBob from './components/load-img';
import Button from "./components/button";

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
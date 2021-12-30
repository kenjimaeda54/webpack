import Title from './components/title';
import ImgBob from './components/load-img';
import Button from "./components/button";

const components = new Title();
components.create('Hello World');

const img = new ImgBob();
img.load();

const button = new Button();
button.build();
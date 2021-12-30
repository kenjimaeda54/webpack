import "./styles.css";

class Title  {
 
  build(title) {
     const h1 = document.createElement('h1');
     h1.innerHTML = title;
     h1.classList.add('title');
     document.body.appendChild(h1);
  }

}

export default Title;
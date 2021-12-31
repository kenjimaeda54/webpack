import "./styles.css";

class Components {
  create(title) {
    const h1 = document.createElement('h1');
    h1.innerText = title;
    h1.classList.add('titleH1');
    document.body.appendChild(h1);
  }
}

export default Components;
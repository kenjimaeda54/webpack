import "./styles.scss";

class Button {
  build() {
    const button = document.createElement('button');
    button.innerText = "Click me!";
    button.classList.add('btn');
    document.querySelector('body').appendChild(button);
  }
}

export default Button ;
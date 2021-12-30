import Bob from "../../assets/bob.jpeg";

class ImgBob {
  load() {
    const img = document.createElement("img");
    img.src = Bob;
    img.width = 200;
    img.height = 200;
    document.querySelector("body").appendChild(img);
  }
}

export default ImgBob;
import "./styles.css";

class About {
   
   title() {
    const h1 = document.createElement( 'h1' );
    h1.innerText = 'Fonte personalizada';
    h1.classList.add( 'title' );
    document.body.appendChild( h1 );
  }
   
   paragraph( ) {
    const p = document.createElement( 'p' );
    p.innerText = 'Isso e o poder do webpack usando fontes personalizadas';
    p.classList.add( 'about' );
    document.body.appendChild( p );
  }
}

export default About;

import imagenPrincipal from './imagenes/Header-Final.jpg';
import sello from './imagenes/sello.png';
import './App.css';
import logo from './imagenes/logo.svg';

//importar componentes
import Header from './componentes/Header'
import Blog from './componentes/Blog'
function App() {


  return (
    
    <div className="App">

      <div className="container-fluid header ">
             <Header/> 
      </div>
        
      <div className="container-fluid body"> 
          <div className="imagenPrincipal">
          <img src={imagenPrincipal} className="imagenPrincipal" alt="principal" />
            <div className="row cabecera"> 
              <div className="col-6"> 
                <h1 className="textoPrincipal" >Acabas de dar el paso más difícil.</h1>
                <hr className="separador"/>
                <p className="parrafoPrincipal">¡Felicidades! En Borobil ofrecemos atención psicosexológica para la resolución de dificultades sexuales, eróticas o de pareja.</p>
              </div>
              <div className="col-6"> 
              <img src={sello} className="sello" alt="logo" />
              </div>
            </div>
          </div>
          
          <Blog/>
      
        </div> 
        
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header>
      
    
    </div>
    
  );
}

export default App;

import './App.css';
import Boton from './components/Button';
import Contador from './components/Counter';
import freeCodeCampLogo from './imgs/fcc_primary.svg';
import { useState } from 'react';


function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClick = () => {
    setNumClics (numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics (0);
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='logo de FreeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
      <Contador numClics={numClics} />
      <Boton 
      texto='Clic'
      esBotonDeClic={true}
      manejarClic={manejarClick}/>
      <Boton 
      texto='Reiniciar'
      esBotonDeClic={false}
      manejarClic={reiniciarContador}/>

      </div>

    </div>
  );
}

export default App;

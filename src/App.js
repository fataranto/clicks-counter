import './App.css';
import Boton from './components/Button';
import Contador from './components/Counter';
import freeCodeCampLogo from './imgs/fcc_primary.svg';

function App() {

  const manejarClick = () => {
    console.log('Clic');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
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
      <div className='contenedor-texto'>
        <Contador numClics='5' />
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

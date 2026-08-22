import './App.css';
import Pasatiempos from './Componentes/Pasatiempos';
import Inicio from './Componentes/Inicio';
import AppsDestacadas from './Componentes/AppsDestacadas';

const App = () => {
  return (
    <div className="contenedor-app">

      <header className="contenedor-cabecera">
        <h1>Hoal</h1>
      </header>


      <main className="contenedor-main">
        <Inicio />
        <AppsDestacadas />
        <Pasatiempos />
      </main>

      <footer className="contenedor-footer">
        <p>Sígueme en mis redes sociales</p>
      </footer>

    </div>
  );
}

export default App;

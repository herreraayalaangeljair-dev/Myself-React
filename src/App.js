import './App.css';
import Inicio from './Componentes/Inicio';
import AppsDestacadas from './Componentes/AppsDestacadas';
import Pasatiempos from './Componentes/Pasatiempos';

const App = () => {
  return (
    <div>
      {/* Hero con nav integrada y video de fondo */}
      <Inicio />

      {/* Resto de secciones */}
      <main style={{ background: 'var(--background)' }}>
        <AppsDestacadas />
        <Pasatiempos />
      </main>

      <footer className="contenedor-footer">
        <p>Sígueme en mis redes sociales</p>
      </footer>
    </div>
  );
};

export default App;

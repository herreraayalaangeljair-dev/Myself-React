import './App.css';
import Inicio from './Componentes/Inicio';
import AppsDestacadas from './Componentes/AppsDestacadas';
import Pasatiempos from './Componentes/Pasatiempos';

const App = () => {
  return (
    <div>
      <section id="inicio">
        <Inicio />
      </section>

      <main style={{ background: 'var(--background)' }}>
        <section id="apps-destacadas">
          <AppsDestacadas />
        </section>

        <section id="pasatiempos">
          <Pasatiempos />
        </section>
      </main>

      <footer className="contenedor-footer">
        <p>Sígueme en mis redes sociales</p>
      </footer>
    </div>
  );
};

export default App;

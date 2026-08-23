import './App.css';
import Inicio from './Componentes/Inicio';
import AppsDestacadas from './Componentes/AppsDestacadas';
import Pasatiempos from './Componentes/Pasatiempos';
import Navigacion from './Componentes/Navegacion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const App = () => {
  return (
    <div>

      <Navigacion />

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
        <div className="contenedor-redes">
          <a href="https://www.instagram.com/angeljairha?igsi=ZGM5czFrem85cndl"
            target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/angel-herrera-2479303a8/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/herreraayalaangeljair-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;


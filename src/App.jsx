import React, { useContext } from 'react';
import { ThemeContext } from './Contexts/ThemeContext'; // Solo importa el contexto

import './assets/App.css';
import AboutMe from './Componentes/AboutMe';
import Perfil from './Componentes/Perfil';
import Proyectos from './Componentes/Proyectos';
import Habilidades from './Componentes/Habilidades';
import Contacto from './Componentes/Contacto';
import Footer from './Componentes/Footer';
import Pdf from './Componentes/Pdf';



function App() {
  const { dark } = useContext(ThemeContext); // Extrae "dark" del contexto existente

  return (
    <>

<section className={dark ? 'dark' : 'light'}> {/* Aplica el tema global */}
    
      
      <div id='inicio'>
       <Perfil></Perfil>
      </div>

      <div id='sobreMi'>
        <AboutMe></AboutMe>
      </div>

      <div id="habilidad">
       <Habilidades></Habilidades>
      </div>

      <div id='proyectos'>
       <Proyectos></Proyectos>
      </div>

      <div id='contacto'>
       <Contacto></Contacto>
      </div>

      <Footer></Footer>
     
    
    </section>
    
    
    </>
    
    
  );
}

export default App;
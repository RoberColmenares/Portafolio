// src/Componentes/Navbar.jsx
import InputToggle from '../InputToggle/InputToggle'; // Importa correctamente InputToggle
import "../assets/App.css"; // Importa los estilos CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBrain, faHouse, faUser, faBriefcase, faContactBook, faContactCard, faPhoneAlt, faPhone} from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {

 

    
  return (
    <>
    <div className='Navbar'>

        <div className="contenedor-total">
          <div>
            <ul className='List-barra'>
              <li> <a href="#sobreMi"><FontAwesomeIcon icon={faUser} /><p>Sobre mi</p></a></li>
              <li> <a href="#habilidad" ><FontAwesomeIcon icon={faBrain} /><p>Habilidades</p></a></li>
              <li> <a href="#proyectos" ><FontAwesomeIcon icon={faBriefcase} /><p>Proyectos</p></a></li>
              <li> <a href="#contacto"><FontAwesomeIcon icon={faPhone} /><p>Contacto</p></a></li>
              
              <li><span className=' mt-2'><InputToggle /> </span></li>
            </ul>
          </div>
        </div>
      
    </div>

    
    </>
    
        
        

   
    
  );
};

export default Navbar;
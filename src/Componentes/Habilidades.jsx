import React from 'react'
import '../assets/App.css'
import 'devicon/devicon.min.css';

const Habilidades = () => {
  return (


    <>

    <div id='habilida' className='Habilidades'>
            <h2 className='t2'>Habilidades</h2>

        <div className='contenedor-total'>
            

                <div className='img-habilidades'>            

                        <h3>Tecnología</h3>

                        <div className='img-h'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />   
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />      
                    
                        </div>
                   
                 </div> 

                <div className='texto-habilidades'>

                    <h3>Habilidades y Conocimeintos tecnicos</h3>

                    <div className="lista">
                    <ul > 
                        <li><p>Desarrollo de páginas web responsivas: Uso de HTML5, CSS3, Bootstrap, Grid y Flexbox para crear diseños adaptables a distintos dispositivos.</p></li>
                        <li><p>Creación de interfaces de usuario atractivas y funcionales.</p></li>
                        <li><p>Diseño e implementación de componentes reutilizables: Desarrollo eficiente de componentes modulares y escalables en React.</p></li>
                        <li><p>Consumo de APIs REST: Integración de datos externos en aplicaciones web mediante llamadas a APIs REST.</p></li>
                        <li><p>Gestión de versiones: Control y colaboración en proyectos utilizando Git y GitHub.</p></li>
                        <li><p>Personalización de temas: Implementación de temas personalizados, incluyendo dark mode.</p></li>
                        <li><p>React Hooks básicos: Uso de hooks como useState, useEffect y useContext para manejar el estado y los efectos en componentes.</p></li>
                        <li><p>JavaScript: Conocimientos en la manipulación del DOM, programación orientada a eventos y desarrollo de funcionalidades dinámicas en aplicaciones web.</p></li>
                        <li><p>Librerías de diseño CSS: Implementación de estilos con herramientas como React-Bootstrap y Tailwind CSS..</p></li>
                        
                    </ul>
                    </div>

                </div>
        </div>
    </div>
    
    </>
  )
};

export default Habilidades

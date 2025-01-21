import React from 'react'
import 'devicon/devicon.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Contacto = () => {
  return (


    <div className='Contacto'>
      <h2 className='t2'>Contactame</h2>
      <div className='contenedor-total'>

      

    
        <div className="Card-contact">
          <i class="bi bi-envelope"></i>
            <p>Email</p>
            <p>Roberjosecolmenares@gmail.com</p>
            <p>Enviar mensaje</p>
        </div>

        <div className="Card-contact C-iconos">
        
        <a className="icono" href="https://github.com/RoberColmenares"> 
          <i class="bi bi-github"></i>
        </a>

            <p>Github</p>
            <p>RoberColmenares</p>
            <p>Enviar mensaje</p>
        </div>
            
      </div>       
    </div>
  )
}

export default Contacto

import React from 'react';
import ecommerceImage from '../assets/img/ecommerce.png';
import ecommerceImage2 from '../assets/img/list.png';
import ecommerceImage3 from '../assets/img/Villalobos.png';
import ecommerceImage4 from '../assets/img/galeria.png';

const Proyectos = () => {
  const carpetaProyecto = [
    {
      id: 1,
      nombre: "Bassic E-commerce",
      descripcion: "Este es la descripcion 2",
      url: "https://robercolmenares.github.io/Bassi-Ecommecer",
      backgroundImage: ecommerceImage,
    },
    {
      id: 2,
      nombre: "To Do list",
      descripcion: "Este es la descripcion 2",
      url: "https://robercolmenares.github.io/nuevo/Todo-List/index.html",
      backgroundImage: ecommerceImage2,
    },

    {
      id: 2,
      nombre: "Villalobos",
      descripcion: "Este es la descripcion 2",
      url: "https://robercolmenares.github.io/nuevo/pagina/index.html",
      backgroundImage: ecommerceImage3,
    },
    {
      id: 3,
      nombre: "Galeria",
      descripcion: "Este es la descripcion 2",
      url: "https://robercolmenares.github.io/nuevo/galeria/index.html",
      backgroundImage: ecommerceImage4,
    },

  
   
  ];

  return (
   <>
     <div className="Proyectos">
      <h2 className="t2">Proyectos</h2>
      <div className="contenedor-total">
        <div className="proyectos-flex">
          {carpetaProyecto.map((proyecto) => (
            <div className="card-2" key={proyecto.id}>
              {/* Imagen de fondo del proyecto */}
              <img src={proyecto.backgroundImage} alt={proyecto.nombre} />
              
              <div className="texto">
                <h2>{proyecto.nombre}</h2>
                <a href={proyecto.url} target="_blank" rel="noopener noreferrer">
                  <button className="btn">Ver Proyecto</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    
   
   </>
  );
};

export default Proyectos;
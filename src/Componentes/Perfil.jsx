import myImagen from '../assets/img/RC.jpg'
import Navbar from './Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importar los íconos de Bootstrap



const Perfil = () => {

  const openPDF = () => {
    window.open("PDFF.pdf", "_blank");
    };

  return (
  <>
  <Navbar></Navbar>
    <div className='Perfil' id='inicio'>
      <div className="contenedor-total">
       
       

          <h1 className='t1'>Hola, Bienvenido</h1>

          <img src={myImagen} alt="" />
          <h1 >Soy Rober Colmenares</h1>
          <h2 className='t3'>Desarrollador Front end Jr.</h2>
          
      
         <div className="C-iconos">
         
         <a className="icono" href="https://www.instagram.com/rober_jcg/">
                  <i className="bi bi-instagram m-3"></i>
              </a>
              <a className="icono" href="https://www.facebook.com/rober.colmenares.14">
                  <i className="bi bi-facebook m-3"></i>
              </a>
              <a className="icono" href="https://www.linkedin.com/in/rober-jose-52a472284/">
                  <i className="bi bi-linkedin m-3"></i>
              </a>
        </div>

        <button className='btn' onClick={openPDF}><p>Ver CV</p></button>



      </div>
    </div>
    </>
  )
}

export default Perfil

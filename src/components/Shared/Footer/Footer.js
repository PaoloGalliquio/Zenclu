import './Footer.css';
import GrayFacebook from '../../../assets/Iconos/Gray-Facebook.png'
import GrayLinkedin from '../../../assets/Iconos/Gray-Linkedin.png'
import GrayInstagram from '../../../assets/Iconos/Gray-Instagram.png'
import GrayZenclu from '../../../assets/Iconos/Gray.Zenclu-Logo.png'

const Footer = () => {
  return(
    <>
    <div className="row footer">
      <div className="col-md-6 ">
        <div className="row footer-part1">
          <div className="col">
            <h5 className='zencluBold'>¿Quieres ser un socio Zenclu?</h5>
            <p>Deja tu correo y nos contactaremos contigo</p>
            <div className="row">
              <div className="col-md-10">
                <input type="text" className="w-100 zencluInput"/>
              </div>
              <div className="col-md-2 my-auto ps-0">
                <button className='zencluButton'>Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="row">
          <div className="col">
            <h5 className='zencluBold'>Más información</h5>
            <p className='mb-2 zencluPointer'>Preguntas frecuentes</p>
            <p className='mb-2 zencluPointer'>Centro de ayuda</p>
            <p className='mb-2 zencluPointer'>Términos y condiciones</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="row">
          <div className="col">
            <img src={GrayFacebook} alt="Facebook" className='footer-social'/>
            <img src={GrayFacebook} alt="Twitter" className='footer-social'/>
            <img src={GrayInstagram} alt="Instagram" className='footer-social'/>
            <img src={GrayLinkedin} alt="Linkedin" className='footer-social'/>
          </div>
        </div>
        <div className="row footer-logo-section">
          <div className="col">
            <img src={GrayZenclu} alt="Zenclu" className='footer-logo'/>
          </div>
        </div>
        <div className="row footer-derechos">
          <div className="col">
            &copy;2022 Todos los derechos reservados
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
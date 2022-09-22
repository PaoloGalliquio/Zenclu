import './Footer.css';
import Box from '@mui/material/Box';
import GrayZenclu from '../../../assets/Iconos/Gray.Zenclu-Logo.png';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const iconHeight = 40;

  const buscador = (
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
  );

  const masInformacion = (
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
  );

  const social = (
    <div className="col-md-3">
      <div className="row footer-socialMedia">
        <div className="col">
          <Box
            sx={{
              '& > :not(style)': {
                mr: 4,
              },
            }}
          >
            <FacebookRoundedIcon sx={{ fontSize: 40 }}/>
            <TwitterIcon sx={{ fontSize: 40 }}/>
            <InstagramIcon sx={{ fontSize: 40 }}/>
            <LinkedInIcon sx={{ fontSize: 40 }}/>
          </Box>
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
  );

  return(
    <>
    <div className="row footer">
      {buscador}
      {masInformacion}
      {social}
    </div>
    </>
  );
}

export default Footer;

// {socialMedias.map(socialMedia => {
//   return <img src={socialMedia.icon} alt={socialMedia.name} id={socialMedia.id} className='footer-social'/>;
// })}
import "./NavbarZ.css"
import image0 from "../../../assets/Iconos/Recurso 7.png";
import image1 from "../../../assets/Iconos/Recurso 36.png";
import image2 from "../../../assets/Iconos/Recurso 37.png";
import image3 from "../../../assets/Iconos/Recurso 38.png";
import image4 from "../../../assets/Iconos/Recurso 33.png";

const Add = () => {
  const optionImgWidth = "50px";

  const options = [
    {
      name: 'Suscripciones',
      image: image1,
      link: '/Suscripciones'
    },
    {
      name: 'Mi contenido',
      image: image2
    },
    {
      name: 'Guardados',
      image: image3
    },
    {
      name: 'Z Wallet',
      image: image1,
      link: '/Zwallet'
    },
    {
      name: 'Tienda',
      image: image2
    },
    {
      name: 'Historial',
      image: image3
    }
  ];

  const configurations = [
    {
      name: 'Ayuda',
      image: image1
    },
    {
      name: 'Configuración',
      image: image1
    }
  ];

  return(
    <div className="navbar-profile-background zencluCursor">
      <div className="navbar-profile-triangle"></div>
      <div className="text-center">
        <img src={image0} alt="Ernesto Rodrigo" width={"70px"}/>
        <img src={image4} alt="Ernesto Rodrigo" width={"25px"} className="navbar-profile-close"/>
      </div>
      <h6 className="text-center zencluBold mt-2">Ernesto Rodrigo</h6>
      <p className="text-center zencluLink">Ver todo</p>
      <div className="navbar-division"></div>
      {options.map(option => {
        return(
          <div className="row mb-2" key={option.name}>
            {option.link ? 
              <>
                <div className="col-md-3">
                  <a href={option.link}>
                    <img src={option.image} alt={option.name} width={optionImgWidth}/>
                  </a> 
                </div>
                <div className="col-md-9 my-auto ps-3">
                  <a href={option.link}>
                    <div className="p-0">{option.name}</div>
                  </a>
                </div>
              </>
              :
              <>
                <div className="col-md-3">
                  <img src={option.image} alt={option.name} width={optionImgWidth}/>
                </div>
                <div className="col-md-9 my-auto ps-3">
                  <div className="p-0">{option.name}</div>
                </div>
              </>
            }
          </div>
        )
      })}
      <div className="navbar-division"></div>
      {configurations.map(configuration => {
        return(
          <div className="row mb-2" key={configuration.name}>
            <div className="col-md-3">
              <img src={configuration.image} alt={configuration.name} width={optionImgWidth}/>
            </div>
            <div className="col-md-9 my-auto ps-4">
              <div className="p-0">{configuration.name}</div>
            </div>
          </div>
        )
      })}
      <div className="navbar-division"></div>
      <div className="text-center">
        <p className="zencluLink">
          <a href="/">
            Cerrar sesión
          </a>
        </p>
      </div>
    </div>
  );
}

export default Add;
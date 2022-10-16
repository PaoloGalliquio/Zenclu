import "./NavbarZ.css";
import profileIcon from "../../../assets/Iconos/NavBar/ProfileIcons/Recurso 20.png";
import editIcon from "../../../assets/Iconos/NavBar/ProfileIcons/Recurso 21.png";
import suscriptionIcon from "../../../assets/Iconos/NavBar/ProfileIcons/Recurso 10.png";
import contenidoIcon from "../../../assets/Iconos/NavBar/ProfileIcons/Recurso 11.png";
import guardadoIcon from "../../../assets/Iconos/NavBar/ProfileIcons/Recurso 12.png";
import walletIcon from "../../../assets/Iconos/NavBar/ProfileIcons/Recurso 13.png";
import tiendaIcon from "../../../assets/Iconos/NavBar/ProfileIcons/Recurso 14.png";
import historialIcon from "../../../assets/Iconos/NavBar/ProfileIcons/Recurso 15.png";
import ayudaIcon from "../../../assets/Iconos/NavBar/ProfileIcons/Recurso 16.png";
import contiguracionIcon from "../../../assets/Iconos/NavBar/ProfileIcons/Recurso 17.png";

const Add = () => {
  const optionImgWidth = "50px";

  const options = [
    {
      name: "Suscripciones",
      image: suscriptionIcon,
      link: "/Suscripciones",
    },
    {
      name: "Mi contenido",
      image: contenidoIcon,
    },
    {
      name: "Guardados",
      image: guardadoIcon,
    },
    {
      name: "Z Wallet",
      image: walletIcon,
      link: "/Zwallet",
    },
    {
      name: "Tienda",
      image: tiendaIcon,
      link: "/Tienda",
    },
    {
      name: "Historial",
      image: historialIcon,
      link: "/History",
    },
  ];

  const configurations = [
    {
      name: "Ayuda",
      image: ayudaIcon,
      link: "/HelpCenter",
    },
    {
      name: "Configuración",
      image: contiguracionIcon,
      link: "/Configuration",
    },
  ];

  return (
    <div className="navbar-profile-background zencluCursor fadeIn fast">
      <div className="navbar-profile-triangle"></div>
      <div className="text-center">
        <img src={profileIcon} alt="Icono de perfil" width={"70px"} />
        <img
          src={editIcon}
          alt="Editar perfil"
          width={"25px"}
          className="navbar-profile-close"
        />
      </div>
      <h6 className="text-center zencluBold mt-2">Ernesto Rodrigo</h6>
      <p className="text-center zencluLink">Ver todo</p>
      <div className="navbar-division"></div>
      {options.map((option) => {
        return (
          <div className="row mb-2" key={option.name}>
            {option.link ? (
              <>
                <div className="col-md-3">
                  <a href={option.link}>
                    <img
                      src={option.image}
                      alt={option.name}
                      width={optionImgWidth}
                      className="navbar-profile-image"
                    />
                  </a>
                </div>
                <div className="col-md-9 my-auto ps-3">
                  <a href={option.link}>
                    <div className="p-0">{option.name}</div>
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-3">
                  <img
                    src={option.image}
                    alt={option.name}
                    width={optionImgWidth}
                    className="navbar-profile-image"
                  />
                </div>
                <div className="col-md-9 my-auto ps-3">
                  <div className="p-0">{option.name}</div>
                </div>
              </>
            )}
          </div>
        );
      })}
      <div className="navbar-division"></div>
      {configurations.map((configuration) => {
        return (
          <div className="row mb-2" key={configuration.name}>
            {configuration.link ? (
              <>
                <div className="col-md-3">
                  <a href={configuration.link}>
                    <img
                      src={configuration.image}
                      alt={configuration.name}
                      width={optionImgWidth}
                      className="navbar-profile-image"
                    />
                  </a>
                </div>
                <div className="col-md-9 my-auto ps-4">
                  <a href={configuration.link}>
                    <div className="p-0">{configuration.name}</div>
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-3">
                  <img
                    src={configuration.image}
                    alt={configuration.name}
                    width={optionImgWidth}
                    className="navbar-profile-image"
                  />
                </div>
                <div className="col-md-9 my-auto ps-4">
                  <div className="p-0">{configuration.name}</div>
                </div>
              </>
            )}
          </div>
        );
      })}
      <div className="navbar-division"></div>
      <div className="text-center">
        <p className="zencluLink">
          <a href="/">Cerrar sesión</a>
        </p>
      </div>
    </div>
  );
};

export default Add;

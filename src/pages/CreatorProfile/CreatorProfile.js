import "./CreatorProfile.css"
import { useState } from "react";
import Footer from "../../components/Shared/Footer/Footer";
import NavbarZ from "../../components/Shared/NavBar/NavbarZ";
import TabSelector from "../../components/Shared/TabSelector/TabSelector";

import backIcon from "../../assets/Iconos/NavBar/MessageIcons/Recurso 25.png";
import ProfilePhoto from "../../assets/Iconos/Profile/Recurso 2.svg";
import Twitter from "../../assets/Iconos/SociaMedia/Twitter.svg";
import Intagram from "../../assets/Iconos/SociaMedia/Intagram.svg";
import LinkedIn from "../../assets/Iconos/SociaMedia/LinkedIn.svg";
import InformationIcon from "../../assets/Iconos/Profile/Recurso 6.svg";

const CreatorProfile = () => {
  const socialMediaIcon = "30px";
  const [selected, setSelected] = useState(1);
  const tabs = [
    {
      id: 1,
      name: "Cuenta"
    },
    {
      id: 2,
      name: "Contenido"
    }
  ];

  const personalInformation = [
    {
      id: 1,
      campo: "Nombre",
      dato: "Sergio Peñaranda"
    }
  ];

  const personalInterests = ["Moda", "Tecnología", "Ciencia", "Conocimiento", "Música"];

  const titulo = (
    <div className='row w-100 ms-0 me-0 pt-5 pb-5'>
      <div className="col ps-0 creatorProfile-back">
        <a href={document.referrer}>
          <img
            src={backIcon}
            alt="Retroceder"
            height={"20px"}
            className="my-auto"
          />
          <span className="ps-3 my-auto">Inicio</span>
        </a>
      </div>
    </div>
  );

  const principalInformation = (
    <>
    <div className="row creatorProfile-profilePhoto mx-auto">
      <div className="col text-center container-icon">
        <img
          src={ProfilePhoto}
          alt="Foto de perfil"
          className="m-0 p-0"
          height={"95px"}
        />
      </div>
    </div>
    <div className="row">
      <div className="col text-center profile-profileLevel mx-auto">
        Nivel 1
      </div>
    </div>
    <div className="row">
      <div className="col text-center profile-profileName mx-auto">
        Sergio Peñaranda
      </div>
    </div>
    </>
  );

  const accountInformation = (
    <div className="creatorProfile-innerPage pb-5">
      <div className="row mt-5 mb-5">
        <div className="col profile-subtitle">Información personal</div>
      </div>
      {personalInformation.map((info) => {
        return (
          <div className="row profile-text mt-4" key={info.id}>
            <div className="col-md-3">{info.campo}</div>
            <div className="col-md-9">{info.dato}</div>
            <div className="navbar-division mt-4"></div>
          </div>
        );
      })}
      <div className="row mt-5 mb-5">
        <div className="col profile-subtitle">Experiencia</div>
      </div>
      <div className="row profile-text mt-4">
        <div className="col-md-3">Acerca de</div>
        <div className="col-md-9">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea com
        </div>
        <div className="navbar-division mt-4"></div>
      </div>
      <div className="row profile-text mt-4">
        <div className="col-md-3">Estudios superiores</div>
        <div className="col-md-9 zencluLink">
          <div className="row"><div className="col"><u>Estudio superior 1</u></div></div>
          <div className="row"><div className="col"><u>Estudio superior 2</u></div></div>
          <div className="row"><div className="col"><u>Estudio superior 3</u></div></div>
        </div>
        <div className="navbar-division mt-4"></div>
      </div>
      <div className="row profile-text mt-4">
        <div className="col-md-3">Redes sociales</div>
        <div className="col-md-9">
          <img
            src={Twitter}
            alt="Twitter"
            className="m-0 p-0 me-3 zencluLink"
            height={socialMediaIcon}
          />
          <img
            src={Intagram}
            alt="Intagram"
            className="m-0 p-0 me-3 zencluLink"
            height={socialMediaIcon}
          />
          <img
            src={LinkedIn}
            alt="LinkedIn"
            className="m-0 p-0 me-3 zencluLink"
            height={socialMediaIcon}
          />
        </div>
        <div className="navbar-division mt-4"></div>
      </div>
      <div className="row mt-5 mb-3">
        <div className="col profile-subtitle">
          <img
            src={InformationIcon}
            alt="Information Icon"
            className="m-0 p-0 me-2"
            height={"15px"}
          />
          Intereses
        </div>
      </div>
      <div className="row profile-text profile-interests mt-4 pt-3">
        <div className="col">
          {personalInterests.map((item) => {
            return (
              <span key={item} className="profile-interest">{item}</span>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <>
    <NavbarZ />
    <div className="creatorProfile-pageContainer mb-0">
      {titulo}
      <div className="creatorProfile-innerPage mb-0">
        {principalInformation}
        <div className="row">
          <div className="col">
            <div className="pt-3">
              <TabSelector tabs={tabs} haveImage={false} padding={"30%"} selected={selected} setSelected={setSelected}/>
            </div>
          </div>
        </div>
        {accountInformation}
      </div>
    </div>
    <Footer />
    </>
  );
}

export default CreatorProfile;
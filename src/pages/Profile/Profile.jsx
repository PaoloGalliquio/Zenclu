import "./Profile.css"
import { useState } from "react";
import Footer from "../../components/Shared/Footer/Footer";
import HeaderTitle from "../../components/Shared/HeaderTitle/HeaderTitle";
import NavbarZ from "../../components/Shared/NavBar/NavbarZ";
import TabSelector from "../../components/Shared/TabSelector/TabSelector";
import SubscriptionSubscribe from "../../components/Shared/Cards/SubscriptionSubscribe";
import CarouselZ from "../../components/Shared/Carousel/Carousel";
import Product from "../../components/Shared/Cards/Product";
import Live from "../../components/Shared/Cards/Live";

import ProfileIcon from "../../assets/Iconos/Profile/Recurso 1.svg";
import ProfilePhoto from "../../assets/Iconos/Profile/Recurso 2.svg";
import ZencluPoints from "../../assets/Iconos/Profile/Recurso 3.svg";
import ZencluIngots from "../../assets/Iconos/Profile/Recurso 4.svg";
import InformationIcon from "../../assets/Iconos/Profile/Recurso 6.svg";
import Twitter from "../../assets/Iconos/SociaMedia/Twitter.svg";
import Intagram from "../../assets/Iconos/SociaMedia/Intagram.svg";
import LinkedIn from "../../assets/Iconos/SociaMedia/LinkedIn.svg";

import image5 from "../../assets/fotos/Recurso 50.png";
import image6 from "../../assets/fotos/Recurso 49.png";
import image7 from "../../assets/fotos/Recurso 48.png";
import image8 from "../../assets/fotos/Recurso 47.png";

import tendencyProduct1 from "../../assets/fotos/Store/Recurso 48.png";
import tendencyProduct2 from "../../assets/fotos/Store/Recurso 47.png";
import tendencyProduct3 from "../../assets/fotos/Store/Recurso 45.png";
import tendencyProduct4 from "../../assets/fotos/Store/Recurso 46.png";

import live1 from "../../assets/fotos/Live1.png";
import live2 from "../../assets/fotos/Live2.png";
import live3 from "../../assets/fotos/Live3.png";
import live4 from "../../assets/fotos/Live4.png";

const Profile = () => {
  const [selected, setSelected] = useState(1);
  const socialMediaIcon = "30px";

  const tabs = [
    {
      id: 1,
      name: "Cuenta"
    },
    {
      id: 2,
      name: "Mi contenido"
    },
    {
      id: 3,
      name: "Mis compras"
    },
    {
      id: 4,
      name: "Estadísticas"
    },
  ];

  const personalInformation = [
    {
      id: 1,
      campo: "Nombre",
      dato: "Sergio"
    },
    {
      id: 2,
      campo: "Apellido",
      dato: "Peñaranda"
    },
    {
      id: 3,
      campo: "Fecha de nacimiento",
      dato: "16/04/1995"
    },
    {
      id: 4,
      campo: "Teléfono",
      dato: "+51 967 894 376"
    },
  ];

  const personalInterests = ["Moda", "Tecnología", "Ciencia", "Conocimiento", "Música"];

  const videosData = [
    {
      id: 1,
      image: image5,
      title: "Playboard build",
      date: "12/07/22",
      views: "2,2 k",
      type: "Video",
      isLive: true,
    },
    {
      id: 2,
      image: image6,
      title: "Classic guitar",
      date: "12/07/22",
      views: "2,2 k",
      type: "Video",
      isLive: false,
    },
    {
      id: 3,
      image: image7,
      title: "The Science Project",
      date: "12/07/22",
      views: "2,2 k",
      type: "Curso",
      isLive: true,
    },
    {
      id: 4,
      image: image8,
      title: "Pop culture today",
      date: "12/07/22",
      views: "2,2 k",
      type: "Curso",
      isLive: false,
    },
  ];

  const productosData = [
    {
      id: 0,
      photo: tendencyProduct1,
      title: "Zapatillas Adidas con ilustración a mano",
      date: "12/07/22",
      priceDiscount: "S/299,90",
      price: "S/399,90",
    },
    {
      id: 1,
      photo: tendencyProduct2,
      title: "Hoodie Mondrea por Zendex",
      date: "12/07/22",
      priceDiscount: "S/199,90",
      price: "S/249,90",
    },
    {
      id: 2,
      photo: tendencyProduct3,
      title: "Lampara de concreto por inConcrete",
      date: "12/07/22",
      priceDiscount: "S/79,90",
      price: "S/129,90",
    },
    {
      id: 3,
      photo: tendencyProduct4,
      title: "Hoodie signature por Zendex",
      date: "12/07/22",
      priceDiscount: "S/199,90",
      price: "S/249,90",
    },
  ];

  const livesData = [
    {
      id: 0,
      image: live1,
      title: "Nombre del live",
      date: "12/07/22",
      price: "S/399,90",
    },
    {
      id: 1,
      image: live2,
      title: "Nombre del live",
      date: "12/07/22",
      price: "S/249,90",
    },
    {
      id: 2,
      image: live3,
      title: "Nombre del live",
      date: "12/07/22",
      price: "S/129,90",
    },
    {
      id: 3,
      image: live4,
      title: "Nombre del live",
      date: "12/07/22",
      price: "S/249,90",
    },
  ];

  const principalInformation = (
    <>
    <div className="row profile-profilePhoto">
      <div className="col text-center">
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
    <div className="row profile-profilePoints mx-auto ps-3 pe-3">
      <div className="col-md-2 text-center p-0 mt-1">
        <img
          src={ZencluPoints}
          alt="Zenclu Points"
          className="m-0 p-0"
          height={"36px"}
        />
      </div>
      <div className="col-md-4 my-auto ps-1 my-auto">2,763</div>
      <div className="col-md-2 text-center p-0 mt-1">
        <img
          src={ZencluIngots}
          alt="Zenclu Ingots"
          className="m-0 p-0"
          height={"25px"}
        />
      </div>
      <div className="col-md-4 my-auto ps-1 my-auto">678</div>
    </div>
    <div className="row mx-auto profile-profileStats">
      <div className="col text-center">75 suscripciones</div>
      <div className="col text-center">2764 seguidores</div>
    </div>
    </>
  );

  const accountInformation = (
    <div className="pageContainer">
      <div className="row mt-5 mb-5">
        <div className="col profile-subtitle">Información personal</div>
        <div className="col text-end zencluLink profile-text">Editar</div>
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
        <div className="col text-end zencluLink profile-text">Editar</div>
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
        <div className="col text-end zencluLink profile-text">Editar</div>
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

  const misVideos = (
    <div className="row w-100 m-0">
      <div className="col-md-1 my-auto text-end"></div>
      <div className="col-md-10">
        <div className="row text-black trending mx-auto">
          <div className="mb-5">
            <div className="row">
              {videosData.map((video) => {
                return (
                  <SubscriptionSubscribe
                    key={video.id}
                    isSuscribed={true}
                    image={video.image}
                    title={video.title}
                    date={video.date}
                    views={video.views}
                    type={video.type}
                    isLive={video.isLive}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-1 my-auto"></div>
    </div>
  );

  const misProductos = (
    <div className="row w-100 m-0">
      <div className="col-md-1 my-auto text-end"></div>
      <div className="col-md-10">
        <div className="row text-black trending mx-auto">
          <div className="mb-5">
            <div className="row">
              {productosData.map((producto) => {
                return (
                  <Product
                    key={producto.id}
                    id={producto.id}
                    isBought={true}
                    photo={producto.photo}
                    title={producto.title}
                    date={producto.date}
                    priceDiscount={producto.priceDiscount}
                    price={producto.price}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-1 my-auto"></div>
    </div>
  );

  const misLives = (
    <div className="row w-100 m-0">
      <div className="col-md-1 my-auto text-end"></div>
      <div className="col-md-10">
        <div className="row text-black trending mx-auto">
          <div className="mb-5">
            <div className="row">
              {livesData.map((live) => {
                return (
                  <Live
                    key={live.id}
                    id={live.id}
                    image={live.image}
                    title={live.title}
                    date={live.date}
                    price={live.price}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-1 my-auto"></div>
    </div>
  );

  const myContent = (
    <div className="profile-myContent">
      <div className="pageContainer mb-0">
        <div className="row pb-5 pt-5">
          <div className="col profile-subtitle">Mis videos</div>
          <div className="col text-end zencluLink profile-text"><u>Ver todo</u></div>
        </div>
      </div>
      <CarouselZ
        items={[
          { id: 1, content: misVideos },
          { id: 2, content: misVideos },
          { id: 3, content: misVideos },
        ]}
      />
      <div className="pageContainer mb-0">
        <div className="navbar-division mt-4"></div>
      </div>
      <div className="pageContainer mb-0">
        <div className="row pb-5 pt-5">
          <div className="col profile-subtitle">Mis productos</div>
          <div className="col text-end zencluLink profile-text"><u>Ver todo</u></div>
        </div>
      </div>
      <CarouselZ
        items={[
          { id: 1, content: misProductos },
          { id: 2, content: misProductos },
          { id: 3, content: misProductos },
        ]}
      />
      <div className="pageContainer mb-0">
        <div className="navbar-division mt-4"></div>
      </div>
      <div className="pageContainer mb-0">
        <div className="row pb-5 pt-5">
          <div className="col profile-subtitle">
            <img
              src={InformationIcon}
              alt="Information Icon"
              className="m-0 p-0 me-2"
              height={"15px"}
            />
            Mis lives agendados
          </div>
          <div className="col text-end zencluLink profile-text"><u>Ver todo</u></div>
        </div>
      </div>
      <CarouselZ
        items={[
          { id: 1, content: misLives },
          { id: 2, content: misLives },
          { id: 3, content: misLives },
        ]}
      />
    </div>
  );

  const myPurchases = (
    <div className="profile-myContent">
      <div className="pageContainer mb-0">
        <div className="row pb-5 pt-5">
          <div className="col profile-subtitle">Mis suscripciones</div>
          <div className="col text-end zencluLink profile-text"><u>Ver todo</u></div>
        </div>
      </div>
      <CarouselZ
        items={[
          { id: 1, content: misVideos },
          { id: 2, content: misVideos },
          { id: 3, content: misVideos },
        ]}
      />
      <div className="pageContainer mb-0">
        <div className="navbar-division mt-4"></div>
      </div>
      <div className="pageContainer mb-0">
        <div className="row pb-5 pt-5">
          <div className="col profile-subtitle">Productos comprados</div>
          <div className="col text-end zencluLink profile-text"><u>Ver todo</u></div>
        </div>
      </div>
      <CarouselZ
        items={[
          { id: 1, content: misProductos },
          { id: 2, content: misProductos },
          { id: 3, content: misProductos },
        ]}
      />
      <div className="pageContainer mb-0">
        <div className="navbar-division mt-4"></div>
      </div>
      <div className="pageContainer mb-0">
        <div className="row pb-5 pt-5">
          <div className="col profile-subtitle">
            <img
              src={InformationIcon}
              alt="Information Icon"
              className="m-0 p-0 me-2"
              height={"15px"}
            />
            Lives próximos
          </div>
          <div className="col text-end zencluLink profile-text"><u>Ver todo</u></div>
        </div>
      </div>
      <CarouselZ
        items={[
          { id: 1, content: misLives },
          { id: 2, content: misLives },
          { id: 3, content: misLives },
        ]}
      />
    </div>
  );

  const pantalla = () => {
    if(selected === 1)
      return accountInformation;
    if(selected === 2)
      return myContent;
    if(selected === 3)
      return myPurchases;
  }

  return (
    <>
      <NavbarZ />
      <HeaderTitle image={ProfileIcon} title="Mi perfil" isDark={true}/>
      <div className="pageContainer mb-0">
        {principalInformation}
        <div className="row">
          <div className="col">
            <div className="pt-3">
              <TabSelector tabs={tabs} haveImage={false} padding={"10%"} selected={selected} setSelected={setSelected}/>
            </div>
          </div>
        </div>
      </div>
      {pantalla()}
      <Footer />
    </>
  );
}

export default Profile;
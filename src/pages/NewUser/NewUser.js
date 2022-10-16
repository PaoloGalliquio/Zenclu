import "./NewUser.css";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import Registrarse from "../../components/Register/Registrarse";
import Ingresar from "../../components/Login/Ingresar";
import Informacion1 from "../../components/Register/Informacion1";
import Informacion2 from "../../components/Register/Informacion2";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";
import image1 from "../../assets/Iconos/Recurso 10.png";
import image2 from "../../assets/Iconos/Recurso 9.png";
import image3 from "../../assets/Iconos/Recurso 8.png";
import image4 from "../../assets/Iconos/Recurso 7.png";
import image5 from "../../assets/fotos/Recurso 42.png";
import image6 from "../../assets/fotos/Recurso 3.png";
import image7 from "../../assets/fotos/Recurso 12.png";
import image8 from "../../assets/fotos/Recurso 11.png";
import image9 from "../../assets/Iconos/Recurso 21.png";
import image10 from "../../assets/Iconos/Recurso 22.png";
import image11 from "../../assets/Iconos/Recurso 23.png";
import SubscriptionView from "../../components/Shared/Cards/SubscriptionView";
import CarouselZ from "../../components/Shared/Carousel/Carousel";

const getCards = () => {
  const cardInfo = [
    {
      id: 1,
      image: image5,
      title: "The science behind microchips",
      author: "Wired Creator",
      views: "2,2k",
      type: "Video",
    },
    {
      id: 2,
      image: image6,
      title: "Inspiring skateboarding",
      author: "The Skate of Kate",
      views: "1,3M",
      type: "Video",
    },
    {
      id: 3,
      image: image7,
      title: "Secret recipes",
      author: "Kitchen hacks",
      views: "75k",
      type: "Curso",
    },
    {
      id: 4,
      image: image8,
      title: "Glamourus Makeup tutorial",
      author: "Colour tutorials",
      views: "3,7k",
      type: "Curso",
    },
  ];

  return (
    <div className="row mx-auto">
      {cardInfo.map((info) => {
        return (
          <SubscriptionView
            key={info.id}
            image={info.image}
            title={info.title}
            author={info.author}
            views={info.views}
            type={info.type}
          />
        );
      })}
    </div>
  );
};

const NewUser = () => {
  const beneficiosHeightImage = "100px";
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showInformation1, setShowInformation1] = useState(false);
  const [showInformation2, setShowInformation2] = useState(false);

  const beneficiosData = [
    {
      title: "Aprender nunca fue tan fácil.",
      body: "¡Únete de forma gratuita a esta comunidad que está cambiando el mundo!",
      image: image1,
    },
    {
      title: "Aprende a través de videos",
      body: "¡Únete de forma gratuita a esta comunidad que está cambiando el mundo!",
      image: image2,
    },
    {
      title: "Sé parte de salas online para el aprendizaje",
      body: "¡Únete de forma gratuita a esta comunidad que está cambiando el mundo!",
      image: image3,
    },
    {
      title: "Compra recursos exclusivos",
      body: "¡Únete de forma gratuita a esta comunidad que está cambiando el mundo!",
      image: image4,
    },
  ];

  const esperarData = [
    {
      title: "Educación de calidad accesible",
      body: "Cuenta con contenido valioso a impulsar tus conocimientos.",
      image: image9,
    },
    {
      title: "Aprende donde quieras y cuando quieras",
      body: "Cuenta con contenido valioso a impulsar tus conocimientos.",
      image: image10,
    },
    {
      title: "Aprende de mentores con experiencia",
      body: "Cuenta con contenido valioso a impulsar tus conocimientos.",
      image: image11,
    },
  ];

  const portada = (
    <div className="row newuser-background w-100 ms-0 me-0">
      <div className="col-md-1 newuser-greenbg"></div>
      <div className="col-md-3 newuser-greenbg">
        <h1 className="zencluBold newuser-title">
          Aprender nunca fue tan fácil.
        </h1>
        <h4 className="zencluSemiBold mt-4">
          ¡Únete de forma gratuita a esta comunidad que está cambiando el mundo!
        </h4>
        <Button
          className="text-center w-75 buttonPrincipal mt-2"
          onClick={() => setShowRegister(true)}>
          Crea tu cuenta gratis
        </Button>
        <Button
          className="text-center w-75 buttonSecondary mt-3 newuse-mb"
          onClick={() => setShowLogin(true)}>
          Suscribete
        </Button>
      </div>
      <div className="col-md-1 newuser-greenbg"></div>
    </div>
  );

  const beneficios = (
    <div className="row newuser-beneficios w-100 me-0 ms-0">
      {beneficiosData.map((beneficio) => {
        return (
          <div className="col-md-3" key={beneficio.image}>
            <div className="row">
              <div className="col-md-4 text-center">
                <img
                  src={beneficio.image}
                  alt="Videos"
                  height={beneficiosHeightImage}
                />
              </div>
              <div className="col-md-8 my-auto">
                <h4 className="zencluBold">{beneficio.title}</h4>
              </div>
            </div>
            <div className="row mt-4">
              <h5>{beneficio.body}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );

  const videosHeader = (
    <>
      <div className="row newuser-videos w-100 me-0 ms-0 pb-0">
        <div className="text-center">
          <h1 className="zencluBold newuser-title-videos mb-5">
            Tenemos estos videos para ti
          </h1>
          <Form.Select
            size="lg"
            className="mx-auto zencluBold zencluSelect newuser-select">
            <option>Todas las categorías</option>
          </Form.Select>
        </div>
      </div>
    </>
  );

  const videos = (
    <div className="row newuser-videos w-100 me-0 ms-0 pt-5">
      <div className="row mt-0">
        <div className="col-md-1 my-auto text-end "></div>
        <div className="col-md-10">
          <div className="row">{getCards()}</div>
        </div>
        <div className="col-md-1 my-auto text-start"></div>
      </div>
    </div>
  );

  const esperar = (
    <div className="row newuser-esperar w-100 me-0 ms-0">
      <h1 className="text-center zencluBold newuser-title-esperar">
        ¿Qué esperar de Zenclu?
      </h1>
      {esperarData.map((esp) => {
        return (
          <div className="col-md-4" key={esp.image}>
            <div className="row">
              <div className="col-md-4 text-center">
                <img
                  src={esp.image}
                  alt="Esperar"
                  height={beneficiosHeightImage}
                />
              </div>
              <div className="col-md-8 my-auto">
                <h4 className="zencluBold">{esp.title}</h4>
              </div>
            </div>
            <div className="row mt-4">
              <h5>{esp.body}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );

  const modals = (
    <div id="modal-root">
      {showRegister && (
        <Registrarse
          register={setShowRegister}
          login={setShowLogin}
          info1={setShowInformation1}
          info2={setShowInformation1}
        />
      )}
      {showLogin && (
        <Ingresar register={setShowRegister} login={setShowLogin} />
      )}
      {showInformation1 && (
        <Informacion1 info1={setShowInformation1} info2={setShowInformation2} />
      )}
      {showInformation2 && <Informacion2 info={setShowInformation2} />}
    </div>
  );

  return (
    <>
      <div id="app-root">
        <Header />
        {portada}
        {beneficios}
        {videosHeader}
        <CarouselZ
          items={[
            { id: 1, content: videos },
            { id: 2, content: videos },
            { id: 3, content: videos },
          ]}
        />
        {esperar}
        <Footer />
      </div>
      {modals}
    </>
  );
};

export default NewUser;

import "./Home.css";
import { useState } from "react";
import Footer from "../../components/Shared/Footer/Footer";
import NavbarZ from "../../components/Shared/NavBar/NavbarZ";
import SubscriptionView from "../../components/Shared/Cards/SubscriptionView";
import SubscriptionSubscribe from "../../components/Shared/Cards/SubscriptionSubscribe";
import Creator from "../../components/Shared/Cards/Creator";
import CarouselZ from "../../components/Shared/Carousel/Carousel";

import image1 from "../../assets/fotos/Recurso 42.png";
import image2 from "../../assets/fotos/Recurso 11.png";
import image3 from "../../assets/fotos/Recurso 12.png";
import image4 from "../../assets/fotos/Recurso 11.png";

import image5 from "../../assets/fotos/Recurso 50.png";
import image6 from "../../assets/fotos/Recurso 49.png";
import image7 from "../../assets/fotos/Recurso 48.png";
import image8 from "../../assets/fotos/Recurso 47.png";

import image9 from "../../assets/fotos/Recurso 46.png";
import image10 from "../../assets/fotos/Recurso 45.png";
import image11 from "../../assets/fotos/Recurso 44.png";
import image12 from "../../assets/fotos/Recurso 43.png";
import Subscription from "../../Modals/Subscription/Subscription";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const subscriptionsData = [
    {
      id: 1,
      image: image1,
      title: "The Science Behind Microchips",
      author: "Wired Creator",
      views: "2,2k",
      type: "Video",
    },
    {
      id: 2,
      image: image2,
      title: "Birds of Latin America",
      author: "Blue Planet",
      views: "1,3M",
      type: "Video",
    },
    {
      id: 3,
      image: image3,
      title: "Secret recipes",
      author: "Kitchen hacks",
      views: "75k",
      type: "Curso",
    },
    {
      id: 4,
      image: image4,
      title: "Glamourus Makeup tutorial",
      author: "Colour tutorials",
      views: "3,7k",
      type: "Curso",
    },
  ];

  const trendsData = [
    {
      id: 1,
      image: image5,
      title: "Playboard build",
      author: "Wood creations",
      value: "S/ 39,90",
      type: "Video",
      isLive: true,
    },
    {
      id: 2,
      image: image6,
      title: "Classic guitar",
      author: "Lonely music",
      value: "S/ 49,90",
      type: "Video",
      isLive: false,
    },
    {
      id: 3,
      image: image7,
      title: "The Science Project",
      author: "Science Kid",
      value: "S/ 19,90",
      type: "Curso",
      isLive: true,
    },
    {
      id: 4,
      image: image8,
      title: "Pop culture today",
      author: "Culture",
      value: "S/ 49,90",
      type: "Curso",
      isLive: false,
    },
  ];

  const creatorsData = [
    {
      id: 1,
      image: image9,
      name: "Ricardo Mosquera",
      themes: ["Ciencias", "Mecánica", "Ingeniería"],
    },
    {
      id: 2,
      image: image10,
      name: "Manuel Villegas",
      themes: ["Ciencias", "Mecánica", "Ingeniería"],
    },
    {
      id: 3,
      image: image11,
      name: "Anna Hassinger",
      themes: ["Ciencias", "Mecánica", "Ingeniería"],
    },
    {
      id: 4,
      image: image12,
      name: "Patricio Reina",
      themes: ["Ciencias", "Mecánica", "Ingeniería"],
    },
  ];

  const title = (
    <div className="row background-image w-100 ms-0 me-0">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <div className="text-white home-title">
          <div className="home-title-principal">
            <h1 className="zencluBold">¡Hola!</h1>
            <h1 className="zencluBold">
              Bienvenido Marcus ¿listo para aprender?
            </h1>
            <h3>Echa una mirada a los cursos y videos que tenemos para ti.</h3>
          </div>
          <h3 className="mb-4">
            <div className="me-5 d-inline">Suscripciones</div>
            <div className="d-inline">| Ver todo</div>
          </h3>
        </div>
        <div className="row mx-auto pb-5">
          {subscriptionsData.map((suscripcion) => {
            return (
              <SubscriptionView
                key={suscripcion.id}
                image={suscripcion.image}
                title={suscripcion.title}
                author={suscripcion.author}
                views={suscripcion.views}
                type={suscripcion.type}
                openModal={setShowModal}
              />
            );
          })}
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
  );

  const tendenciasHeader = (
    <div className="row mt-5 w-100 m-0">
      <div className="col-md-1 my-auto text-end"></div>
      <div className="col-md-10">
        <div className="row text-black trending mx-auto">
          <h3 className="mb-4">Tendencias de la semana</h3>
        </div>
      </div>
      <div className="col-md-1 my-auto"></div>
    </div>
  );

  const tendencias = (
    <div className="row w-100 m-0">
      <div className="col-md-1 my-auto text-end"></div>
      <div className="col-md-10">
        <div className="row text-black trending mx-auto">
          <div className="mb-5">
            <div className="row">
              {trendsData.map((trend) => {
                return (
                  <SubscriptionSubscribe
                    key={trend.id}
                    image={trend.image}
                    title={trend.title}
                    author={trend.author}
                    value={trend.value}
                    type={trend.type}
                    isLive={trend.isLive}
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

  const creatorsHeader = (
    <>
      <div className="row top-creators w-100 m-0 mt-4 pt-4">
        <div className="col-md-1 my-auto text-end"></div>
        <div className="col-md-10">
          <div className="row mt-3">
            <div className="tabtabO"></div>
            <button className="tabtab text-center tabActive">
              <h3 className="mb-4">Top creadores</h3>
            </button>
            <button className="tabtab text-center tab">
              <h3 className="mb-4 disabled">Recomendados</h3>
            </button>
            <button className="tabtab text-center tab">
              <h3 className="mb-4 disabled">Descubrir</h3>
            </button>
            <div className="tabtabO"></div>
            <span className="lineaGradiente"></span>
          </div>
        </div>
        <div className="col-md-1 my-auto"></div>
      </div>
    </>
  );

  const creators = (
    <>
      <div className="row top-creators w-100 m-0 mt-0 pt-1">
        <div className="col-md-1 my-auto text-end"></div>
        <div className="col-md-10">
          <div className="row text-black trending mx-auto">
            <div className="row mt-4">
              <div className="text-black mb-5">
                <div className="row">
                  {creatorsData.map((creator) => {
                    return (
                      <Creator
                        key={creator.id}
                        image={creator.image}
                        name={creator.name}
                        themes={creator.themes}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1 my-auto"></div>
      </div>
    </>
  );

  return (
    <>
      {showModal ? <Subscription showModal={setShowModal}/> : <></>}
      <NavbarZ />
      {title}
      {tendenciasHeader}
      <CarouselZ
        items={[
          { id: 1, content: tendencias },
          { id: 2, content: tendencias },
          { id: 3, content: tendencias },
        ]}
      />
      {creatorsHeader}
      <CarouselZ
        items={[
          { id: 1, content: creators },
          { id: 2, content: creators },
          { id: 3, content: creators },
        ]}
      />
      <Footer />
    </>
  );
};

export default Home;

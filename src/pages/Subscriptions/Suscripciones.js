import "./Suscripciones.css";
import NavbarZ from "../../components/Shared/NavBar/NavbarZ";
import Footer from "../../components/Shared/Footer/Footer";
import headerImage from "../../assets/Iconos/Subscriptions/Recurso 10.png";
import rowImageL from "../../assets/Iconos/Recurso 54.png";
import rowImageR from "../../assets/Iconos/Recurso 53.png";
import HeaderTitle from "../../components/Shared/HeaderTitle/HeaderTitle";
import TabSelector from "../../components/Shared/TabSelector/TabSelector";
import image1 from "../../assets/fotos/Recurso 43.png";
import image2 from "../../assets/fotos/Recurso 45.png";
import image3 from "../../assets/fotos/Recurso 44.png";
import image4 from "../../assets/fotos/Recurso 43.png";
import image5 from "../../assets/fotos/Recurso 46.png";
import image6 from "../../assets/fotos/Recurso 42.png";
import image7 from "../../assets/fotos/Recurso 11.png";
import image8 from "../../assets/fotos/Recurso 12.png";
import image9 from "../../assets/fotos/Recurso 11.png";
import SubscriptionRanked from "../../components/Shared/Cards/SubscriptionRanked";

const Suscripciones = () => {
  const creatorPhotoWidth = "200px";

  const creatorsData = [
    {
      id: 0,
      name: "InConcrete",
      photo: image1,
    },
    {
      id: 1,
      name: "Manuel Villegas",
      photo: image2,
    },
    {
      id: 2,
      name: "Anna Hassinger",
      photo: image3,
    },
    {
      id: 3,
      name: "Zendex Arts",
      photo: image4,
    },
    {
      id: 4,
      name: "Ricardo Mosquera",
      photo: image5,
    },
  ];

  const tabs = [
    {
      id: 1,
      name: "Videos suscritos"
    },
    {
      id: 2,
      name: "Mis videos"
    },
  ];

  const videos = [
    {
      id: 0,
      image: image6,
      title: "Become an amazing playboard builder",
      price: "39,90",
      raking: 4,
      creator: "Wood creations",
      creatorPhoto: image1,
      isLive: false,
    },
    {
      id: 1,
      image: image7,
      title: "Become an amazing playboard builder",
      price: "39,90",
      raking: 4,
      creator: "Wood creations",
      creatorPhoto: image1,
      isLive: false,
    },
    {
      id: 2,
      image: image8,
      title: "Become an amazing playboard builder",
      price: "39,90",
      raking: 4,
      creator: "Wood creations",
      creatorPhoto: image1,
      isLive: false,
    },
    {
      id: 3,
      image: image9,
      title: "Become an amazing playboard builder",
      price: "39,90",
      raking: 4,
      creator: "Wood creations",
      creatorPhoto: image1,
      isLive: true,
    },
  ];

  const creadoresQueSigo = (
    <div className="suscripciones-creadores">
      <div className="row ms-0 me-0 creadoresQueSigo-title">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <h4 className="zencluBold ps-3">Creadores que sigo</h4>
        </div>
      </div>
      <div className="row ms-0 me-0">
        <div className="col-md-1 my-auto text-center zencluPointer">
          <img src={rowImageL} className="newuser-rowImage" alt="left" />
        </div>
        <div className="col-md-10">
          <div className="row">
            {creatorsData.map((creator) => {
              return (
                <div
                  className="col subscripciones-creator-card"
                  key={creator.id}>
                  <div className="row text-center">
                    <div className="col">
                      <img
                        src={creator.photo}
                        alt={creator.name}
                        width={creatorPhotoWidth}
                      />
                    </div>
                  </div>
                  <div className="row text-center mt-3">
                    <h5 className="col zencluBold">{creator.name}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-md-1 my-auto text-center zencluPointer">
          <img src={rowImageR} className="newuser-rowImage" alt="right" />
        </div>
      </div>
      <div className="row ms-0 me-0 mt-4 text-center">
        <div className="col">
          <h5 className="zencluLink">Ver todo</h5>
        </div>
      </div>
    </div>
  );

  const videosSuscritos = (
    <div className="suscripciones-videos">
      <div className="pb-5">
        <TabSelector tabs={tabs} haveImage={false} padding={"30%"} selected={1}/>
      </div>
      <div className="row ms-0 me-0 sus-videos-cards">
        {videos.map((video) => {
          return (
            <SubscriptionRanked
              id={video.id}
              image={video.image}
              creator={video.creator}
              creatorPhoto={video.creatorPhoto}
              title={video.title}
              raking={video.raking}
              price={video.price}
            />
          );
        })}
      </div>
      <div className="row ms-0 me-0 mt-5 text-center">
        <div className="col">
          <h5 className="zencluLink">Ver todo</h5>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <NavbarZ />
      <HeaderTitle image={headerImage} title="Suscripciones" />
      {creadoresQueSigo}
      {videosSuscritos}
      <Footer />
    </>
  );
};

export default Suscripciones;

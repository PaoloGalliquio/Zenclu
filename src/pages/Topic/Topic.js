import "./Topic.css";
import NavbarZ from "../../components/Shared/NavBar/NavbarZ";
import Footer from "../../components/Shared/Footer/Footer";
import backIcon from "../../assets/Iconos/NavBar/MessageIcons/Recurso 25.png";

import tendencyProduct1 from "../../assets/fotos/Store/Recurso 48.png";
import tendencyProduct2 from "../../assets/fotos/Store/Recurso 47.png";
import tendencyProduct3 from "../../assets/fotos/Store/Recurso 45.png";
import tendencyProduct4 from "../../assets/fotos/Store/Recurso 46.png";

import creatorPhoto1 from "../../assets/fotos/Store/Recurso 52.png";
import creatorPhoto2 from "../../assets/fotos/Store/Recurso 50.png";
import creatorPhoto3 from "../../assets/fotos/Store/Recurso 49.png";
import creatorPhoto4 from "../../assets/fotos/Store/Recurso 50.png";
import TabSelector from "../../components/Shared/TabSelector/TabSelector";

import image1 from "../../assets/fotos/Recurso 43.png";
import image6 from "../../assets/fotos/Topic/Recurso 39.png";
import image7 from "../../assets/fotos/Topic/Recurso 38.png";
import image8 from "../../assets/fotos/Topic/Recurso 37.png";
import image9 from "../../assets/fotos/Topic/Recurso 36.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Product from "../../components/Shared/Cards/Product";
import SubscriptionRanked from "../../components/Shared/Cards/SubscriptionRanked";

const Topic = () => {
  const tabs = [
    {
      name: "Productos",
      active: true,
    },
    {
      name: "Lives",
      active: false,
    },
    {
      name: "Videos",
      active: false,
    },
  ];

  const productosTendencia = [
    {
      id: 0,
      photo: tendencyProduct1,
      title: "Zapatillas Adidas con ilustración a mano",
      sellerName: "PopHopTop",
      sellerPhoto: creatorPhoto1,
      priceDiscount: "S/299,90",
      price: "S/399,90",
    },
    {
      id: 1,
      photo: tendencyProduct2,
      title: "Hoodie Mondrea hecha por Zendex",
      sellerName: "Zendex Arts",
      sellerPhoto: creatorPhoto2,
      priceDiscount: "S/199,90",
      price: "S/249,90",
    },
    {
      id: 2,
      photo: tendencyProduct3,
      title: "Lampara de concreto por inConcrete",
      sellerName: "inConcrete",
      sellerPhoto: creatorPhoto3,
      priceDiscount: "S/79,90",
      price: "S/129,90",
    },
    {
      id: 3,
      photo: tendencyProduct4,
      title: "Hoodie signature hecha por Zendex",
      sellerName: "Zendex Arts",
      sellerPhoto: creatorPhoto4,
      priceDiscount: "S/199,90",
      price: "S/249,90",
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

  const titulo = (
    <>
      <div className="text-center mt-5 topic-title-container">
        <div className="topic-Retroceder">
          <a href="/Home">
            <img
              src={backIcon}
              alt="Retroceder"
              height={"20px"}
              className="my-auto"
            />
            <span className="ps-3 my-auto">Inicio</span>
          </a>
        </div>
        <div className="zencluBold mb-5 topic-title">
          Ciencias / Ciencias Sociales
        </div>
        <button
          className="btn pt-3 pb-3 ps-5 topic-categorias-dropdown"
          type="button">
          <b>Todas las categorías</b>
          <ArrowBackIosNewIcon className="topic-drowdown-icon" />
        </button>
      </div>
    </>
  );

  const tendenciaPantalla = (
    <>
      <div className="row ms-0 me-0 topic-videos-cards mt-5 mb-5">
        <div className="mb-4">
          <h4 className="zencluBold ps-3">Es tendencia</h4>
        </div>
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
    </>
  );

  const productosPantalla = (
    <>
      <div className="row ms-0 me-0 topic-products-cards mt-5 mb-5">
        {productosTendencia.map((productoTendencia) => {
          return (
            <Product
              id={productoTendencia.id}
              photo={productoTendencia.photo}
              title={productoTendencia.title}
              sellerName={productoTendencia.sellerName}
              sellerPhoto={productoTendencia.sellerPhoto}
              priceDiscount={productoTendencia.priceDiscount}
              price={productoTendencia.price}
            />
          );
        })}
      </div>
    </>
  );

  return (
    <>
      <NavbarZ />
      {titulo}
      {tendenciaPantalla}
      <TabSelector tabs={tabs} haveImage={false} />
      {productosPantalla}
      <Footer />
    </>
  );
};

export default Topic;

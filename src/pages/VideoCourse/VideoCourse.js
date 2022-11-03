import "./VideoCourse.css"
import Footer from "../../components/Shared/Footer/Footer";
import NavbarZ from "../../components/Shared/NavBar/NavbarZ";
import { useState } from "react";

import backIcon from "../../assets/Iconos/NavBar/MessageIcons/Recurso 25.png";
import principalImage from '../../assets/fotos/BirdPhoto.png';
import viewsIcons from '../../assets/Iconos/Recurso 52.png';
import saveIcon from "../../assets/Iconos/Modals/Recurso1.svg";
import likeIcon from "../../assets/Iconos/Modals/Recurso2.svg";
import dislikeIcon from "../../assets/Iconos/Modals/Recurso3.svg";
import shareIcon from "../../assets/Iconos/Modals/Recurso4.svg";
import TabSelector from "../../components/Shared/TabSelector/TabSelector";
import SubscriptionRanked from "../../components/Shared/Cards/SubscriptionRanked";
import Product from "../../components/Shared/Cards/Product";

import image1 from "../../assets/fotos/Recurso 43.png";
import image6 from "../../assets/fotos/Topic/Recurso 39.png";
import image7 from "../../assets/fotos/Topic/Recurso 38.png";
import image8 from "../../assets/fotos/Topic/Recurso 37.png";

import product1 from "../../assets/fotos/Store/Recurso 72.png";
import product2 from "../../assets/fotos/Store/Recurso 71.png";
import product3 from "../../assets/fotos/Store/Recurso 69.png";

import creatorPhoto1 from "../../assets/fotos/Store/Recurso 52.png";
import creatorPhoto2 from "../../assets/fotos/Store/Recurso 50.png";
import creatorPhoto3 from "../../assets/fotos/Store/Recurso 49.png";

import tendencyPhoto1 from "../../assets/fotos/Recurso 50.png";
import tendencyPhoto2 from "../../assets/fotos/Recurso 49.png";
import tendencyPhoto3 from "../../assets/fotos/Recurso 48.png";
import tendencyPhoto4 from "../../assets/fotos/Recurso 47.png";
import HorizontalCourse from "../../components/Shared/Cards/HorizontalCourse";

const VideoCourse = () => {
  const [selected, setSelected] = useState(1);
  
  const tabs = [
    {
      id: 1,
      name: "Descripción"
    },
    {
      id: 2,
      name: "Foro"
    }
  ];

  const videosMismoCreador = [
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
    }
  ];

  const productos = [
    {
      id: 0,
      photo: product1,
      title: "Cool Besar mug",
      sellerName: "PopHopTop",
      sellerPhoto: creatorPhoto1,
      priceDiscount: "S/ 299,90",
      price: "S/ 399,00",
    },
    {
      id: 1,
      photo: product2,
      title: "Yoga Pants",
      sellerName: "Zendex Arts",
      sellerPhoto: creatorPhoto2,
      priceDiscount: "S/ 199,90",
      price: "S/ 249,00",
    },
    {
      id: 2,
      photo: product3,
      title: "Pop Sugar Headphones",
      sellerName: "inConcrete",
      sellerPhoto: creatorPhoto3,
      priceDiscount: "S/ 79,90",
      price: "S/ 129,00",
    }
  ];

  const recomendCategoria = [
    {
      id: 0,
      image: tendencyPhoto1,
      title: "Become an amazing plyboard builder",
      creator: "Wood creations",
      price: "S/ 39,90",
    },
    {
      id: 1,
      image: tendencyPhoto2,
      title: "Become an amazing plyboard builder",
      creator: "Wood creations",
      price: "S/ 39,90",
      isLive: true
    },
    {
      id: 2,
      image: tendencyPhoto3,
      title: "Become an amazing plyboard builder",
      creator: "Wood creations",
      price: "S/ 39,90",
    },
    {
      id: 3,
      image: tendencyPhoto4,
      title: "Become an amazing plyboard builder",
      creator: "Wood creations",
      price: "S/ 39,90",
    },
  ];

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

  const leftView = (
    <div className="col-md-7">
      <div className="row text-center">
        <div className="col position-relative">
          <img src={principalImage} alt="Portada de video" width={"100%"} />
          <div className="videoCourse-timer">10:58</div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-10 videoCourse-title zencluMedium">
          Become an amazing plyboard builder
        </div>
        <div className="col-md-2 videoCourse-views zencluMedium text-end my-auto">
          <img src={viewsIcons} alt="Número de vistas" width={"27px"} />{" "}
          1,3 M
        </div>
        <div className="col videoCourse-creator">Wood creations</div>
      </div>
      <div className="row">
        <div className="col text-end">
          <div className="videosCourse-icon ms-3 my-auto text-center">
            <img src={likeIcon} alt="Like" width={"21px"}/>
          </div>
          <div className="videosCourse-icon ms-3 my-auto text-center">
            <img src={dislikeIcon} alt="Like" width={"21px"} />
          </div>
          <div className="videosCourse-icon ms-3 my-auto text-center">
            <img src={shareIcon} alt="Like" width={"16px"} />
          </div>
          <div className="videosCourse-icon ms-3 my-auto text-center">
            <img src={saveIcon} alt="Like" width={"14px"} />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <div className="pt-3">
            <TabSelector tabs={tabs} haveImage={false} padding={"30%"} selected={selected} small={true} setSelected={setSelected}/>
          </div>
        </div>
        <div className="col-md-12 mt-4 zencluMedium videoCourse-paragraph">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 videoCourse-subtitle zencluMedium">Videos del mismo creador</div>
        <div className="col-md-6 videoCourse-subtitle zencluLink text-end">Ver todos</div>
      </div>
      <div className="row mt-2">
        {videosMismoCreador.map((video) => {
          return (
            <SubscriptionRanked
              id={video.id}
              image={video.image}
              creator={video.creator}
              creatorPhoto={video.creatorPhoto}
              title={video.title}
              raking={video.raking}
              price={video.price}
              small={true}
            />
          );
        })}
      </div>
      <div className="row mt-5">
        <div className="col-md-6 videoCourse-subtitle zencluMedium">Productos</div>
        <div className="col-md-6 videoCourse-subtitle zencluLink text-end">Ver todos</div>
      </div>
      <div className="row mt-2">
        {productos.map((producto) => {
          return (
            <Product
              id={producto.id}
              photo={producto.photo}
              title={producto.title}
              sellerName={producto.sellerName}
              sellerPhoto={producto.sellerPhoto}
              priceDiscount={producto.priceDiscount}
              price={producto.price}
              small={true}
            />
          );
        })}
      </div>
      <div className="row mt-5">
        <div className="videoCourse-subtitle zencluMedium">Links de referencia:</div>
        <div className="videoCourse-subtitle mt-3">¿Te gustó el video? Estos recursos te podrían interesar.</div>
        <div className="videoCourse-subtitle zencluLink mt-3"><u>www.recursoacademico.com</u></div>
        <div className="videoCourse-subtitle zencluLink"><u>www.recursoacademico.com</u></div>
        <div className="videoCourse-subtitle zencluLink"><u>www.recursoacademico.com</u></div>
      </div>
    </div>
  );

  const rightView = (
    <div className="col-md-5 ps-5">
      <div className="row videoCourse-subtitle zencluMedium mb-3">
        <div className="col">Recomendaciones relacionadas por categoría</div>
      </div>
      {recomendCategoria.map((categoria) => {
        return (
          <HorizontalCourse 
            id={categoria.id}
            image={categoria.image}
            title={categoria.title}
            creator={categoria.creator}
            price={categoria.price}
            isLive={categoria.isLive}
          />
        );
      })}
      <div className="row mt-3">
        <div className="col text-center">
          <button className="videoCourse-button">Ver más</button>
        </div>
      </div>
      <div className="navbar-division mt-4 mb-4"></div>
      <div className="row videoCourse-subtitle zencluMedium mb-3">
        <div className="col">Recomendaciones relacionadas por creadores</div>
      </div>
      {recomendCategoria.map((categoria) => {
        return (
          <HorizontalCourse 
            id={categoria.id}
            image={categoria.image}
            title={categoria.title}
            creator={categoria.creator}
            price={categoria.price}
            isLive={categoria.isLive}
          />
        );
      })}
      <div className="row mt-3">
        <div className="col text-center">
          <button className="videoCourse-button">Ver más</button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <NavbarZ />
      <div className="videoCourse-pageContainer">
        {titulo}
        <div className="row">
          {leftView}
          {rightView}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VideoCourse;
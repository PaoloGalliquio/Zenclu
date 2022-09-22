import "./Topic.css"
import { Form, Card } from "react-bootstrap";
import NavbarZ from "../../components/Shared/NavBar/NavbarZ";
import Footer from "../../components/Shared/Footer/Footer";
import backIcon from "../../assets/Iconos/NavBar/MessageIcons/Recurso 25.png";
import rowImageL from '../../assets/Iconos/Recurso 54.png';
import rowImageR from '../../assets/Iconos/Recurso 53.png';

import tendencyProduct1 from '../../assets/fotos/Store/Recurso 48.png';
import tendencyProduct2 from '../../assets/fotos/Store/Recurso 47.png';
import tendencyProduct3 from '../../assets/fotos/Store/Recurso 45.png';
import tendencyProduct4 from '../../assets/fotos/Store/Recurso 46.png';

import creatorPhoto1 from '../../assets/fotos/Store/Recurso 52.png';
import creatorPhoto2 from '../../assets/fotos/Store/Recurso 50.png';
import creatorPhoto3 from '../../assets/fotos/Store/Recurso 49.png';
import creatorPhoto4 from '../../assets/fotos/Store/Recurso 50.png'; 
import TabSelector from "../../components/Shared/TabSelector/TabSelector";

import image1 from "../../assets/fotos/Recurso 43.png";
import image6 from "../../assets/fotos/Topic/Recurso 39.png"
import image7 from "../../assets/fotos/Topic/Recurso 38.png"
import image8 from "../../assets/fotos/Topic/Recurso 37.png"
import image9 from "../../assets/fotos/Topic/Recurso 36.png"
import { Rating } from "@mui/material";

const Topic = () => {
  const videoCreatorPhotoWidth = "70px";

  const tabs = [
    {
      name: 'Productos',
      active: true
    },
    {
      name: 'Lives',
      active: false
    },
    {
      name: 'Videos',
      active: false
    }
  ];

  const productosTendencia = [
    {
      id: 0,
      photo: tendencyProduct1,
      title: 'Zapatillas Adidas con ilustración a mano',
      sellerName: 'PopHopTop',
      sellerPhoto: creatorPhoto1,
      priceDiscount: 'S/299,90',
      price: 'S/399,90'
    },
    {
      id: 1,
      photo: tendencyProduct2,
      title: 'Hoodie Mondrea por Zendex',
      sellerName: 'Zendex Arts',
      sellerPhoto: creatorPhoto2,
      priceDiscount: 'S/199,90',
      price: 'S/249,90'
    },
    {
      id: 2,
      photo: tendencyProduct3,
      title: 'Lampara de concreto por inConcrete',
      sellerName: 'inConcrete',
      sellerPhoto: creatorPhoto3,
      priceDiscount: 'S/79,90',
      price: 'S/129,90'
    },
    {
      id: 3,
      photo: tendencyProduct4,
      title: 'Hoodie signature por Zendex',
      sellerName: 'Zendex Arts',
      sellerPhoto: creatorPhoto4,
      priceDiscount: 'S/199,90',
      price: 'S/249,90'
    }
  ];

  const videos = [
    {
      id: 0,
      image: image6,
      title: 'Become an amazing playboard builder',
      price: '39,90',
      raking: 4,
      creator: 'Wood creations',
      creatorPhoto: image1,
      isLive: false
    },
    {
      id: 1,
      image: image7,
      title: 'Become an amazing playboard builder',
      price: '39,90',
      raking: 4,
      creator: 'Wood creations',
      creatorPhoto: image1,
      isLive: false
    },
    {
      id: 2,
      image: image8,
      title: 'Become an amazing playboard builder',
      price: '39,90',
      raking: 4,
      creator: 'Wood creations',
      creatorPhoto: image1,
      isLive: false
    },
    {
      id: 3,
      image: image9,
      title: 'Become an amazing playboard builder',
      price: '39,90',
      raking: 4,
      creator: 'Wood creations',
      creatorPhoto: image1,
      isLive: true
    }
  ]
  
  const titulo = (
    <>
    <div className="text-center mt-5 topic-title-container">
      <div className="topic-Retroceder">
        <a href="/Home">
          <img src={backIcon} alt="Retroceder" height={"20px"} className="my-auto"/>
          <span className="ps-3 my-auto">Inicio</span>
        </a>
      </div>
      <div className="zencluBold mb-5 topic-title">Ciencias / Ciencias Sociales</div>
      <Form.Select size="lg" className="mx-auto zencluBold zencluSelect topic-title-select">
        <option>Todas las categorías</option>
      </Form.Select>
    </div>
    </>
  );

  const productosPantalla = (
    <>
      <div className="row ms-0 me-0 mt-5 mb-5">
        <div className="col-md-1 my-auto text-center zencluPointer">
          <img src={rowImageL} className="newuser-rowImage" alt="Left"/>
        </div>
        <div className="col-md-10">
          <div className="row">
            {productosTendencia.map((productoTendencia) => {
              return (
                <div className="col d-flex mb-3 align-items-stretch" key={productoTendencia.id}>
                  <div className="card flex-fill">
                    <img
                      src={productoTendencia.photo}
                      className="card-img-top p-1 rounded-3"
                      alt={productoTendencia.name}
                    />
                    <div className="card-body p-1  d-flex flex-column ">
                      <div className="row">
                        <div className="col-3 text-center">
                          <img
                            src={productoTendencia.sellerPhoto}
                            className=" img rounded-circle "
                            style={{ width: "35px", height: "35px" }}
                            alt={productoTendencia.sellerName}
                          />
                        </div>
                        <div className="col-9 ">
                          <h6 className="card-title m-0 ">
                            {productoTendencia.title}
                          </h6>
                          <p
                            className="card-text m-0"
                            style={{
                              fontSize: "13px",
                              color: "rgb(157, 157, 157)",
                              fontWeight: "500",
                            }}
                          >
                            {productoTendencia.sellerName}
                          </p>
                          <p>
                            <b> {productoTendencia.priceDiscount} &nbsp;</b>
                            <span className="text-decoration-line-through">
                              {productoTendencia.price}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <div className="d-grid gap-1 mb-2">
                          <button
                            className="btn "
                            style={{ backgroundColor: "rgb(133, 221, 149)" }}
                          >
                            {" "}
                            <b> Agregar al carrito </b>{" "}
                          </button>
                        </div>
                        <div className="d-grid gap-1">
                          <button
                            className="btn text-white"
                            style={{ backgroundColor: "rgb(54, 178, 114)" }}
                          >
                            {" "}
                            COMPRAR AHORA
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-md-1 my-auto text-center zencluPointer">
          <img src={rowImageR} className="newuser-rowImage" alt="right"/>
        </div>
      </div>
    </>
  );

  const tendenciaPantalla = (
    <>
    <div className="row ms-0 me-0 topic-videos-cards mt-5 mb-5">
      <div className="mb-4">
        <h4 className="zencluBold ps-3">Es tendencia</h4>
      </div>
      {videos.map(video => {
        return (
          <div className="col ps-2 pe-2" key={video.id}>
            <Card className="ps-2 pe-2 pt-0 border-0 mx-auto">
              <Card.Img className="mt-2" variant="top" src={video.image} alt={video.creator}/>
              <Card.Body className="pt-3 pe-0 ps-0 pb-1">
                <div className="row">
                  <div className="col-md-3 text-center">
                    <img src={video.creatorPhoto} alt={video.creator} width={videoCreatorPhotoWidth}/>
                  </div>
                  <div className="col-md-9 ps-0">
                    <h5><b>{video.title}</b></h5>
                    <h6>{video.creator}</h6>
                    <Rating name="read-only" value={video.raking} readOnly />
                    <h5 className="zencluBold">S/ {video.price}</h5>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </div>
    </>
  );

  return(
    <>
    <NavbarZ />
    {titulo}
    {tendenciaPantalla}
    <TabSelector tabs = {tabs} haveImage = {false}/>
    {productosPantalla}
    <Footer />
    </>
  );
}

export default Topic;
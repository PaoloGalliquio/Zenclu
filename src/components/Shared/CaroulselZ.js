import { useState } from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import TrendCard from "./Trends/TrendCard";
import image1 from "../../assets/fotos/Recurso 50.png";
import image2 from "../../assets/fotos/Recurso 49.png";
import image3 from "../../assets/fotos/Recurso 48.png";
import image4 from "../../assets/fotos/Recurso 47.png";

const getCards = () => {
  const cardInfo = [
    {
      id: 1,
      image: image1,
      title: "Playboard build",
      author: "Wood creations",
      value: "S/ 39,90",
      type: "Video",
      isLive: true,
    },
    {
      id: 2,
      image: image2,
      title: "Classic guitar",
      author: "Lonely music",
      value: "S/ 49,90",
      type: "Video",
      isLive: false,
    },
    {
      id: 3,
      image: image3,
      title: "The Science Project",
      author: "Science Kid",
      value: "S/ 19,90",
      type: "Curso",
      isLive: true,
    },
    {
      id: 4,
      image: image4,
      title: "Pop culture today",
      author: "Culture",
      value: "S/ 49,90",
      type: "Curso",
      isLive: false,
    },
  ];
  return (
    <div className="row">
      {cardInfo.map((info) => {
        return (
          <TrendCard
            key={info.id}
            image={info.image}
            title={info.title}
            author={info.author}
            value={info.value}
            type={info.type}
            isLive={info.isLive}
          />
        );
      })}
    </div>
  );
};

const cardPrueba = () => {
  return (
    <Card className="m-2 mx-auto" style={{ width: "20rem" }}>
      <Card.Img className="mt-2" variant="top" src={image1} />
      <Card.Body className="pt-3 pe-0 ps-0 pb-3">
        <h5>
          <b>Playboard build</b>
        </h5>
        <h6>Wood creations</h6>
        <div className="row mt-2">
          <div className="col-md-6 text-start">Curso</div>
          <div className="col-md-6 text-end">
            <h5 className="text-end">
              <b>S/ 39,90</b>
            </h5>
          </div>
        </div>
        <Button variant="primary w-100 mt-2 bluebigcolor">
          <b>SUSCRIBIRME</b>
        </Button>
      </Card.Body>
    </Card>
  );
};

const carouselItem = () => {
  return (
    <Carousel.Item>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
      <div className="mb-5 row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-3">{cardPrueba()}</div>
            <div className="col-md-3">{cardPrueba()}</div>
            <div className="col-md-3">{cardPrueba()}</div>
            <div className="col-md-3">{cardPrueba()}</div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </Carousel.Item>
  );
};

const CarouselZ = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
          <div className="mb-5 row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3">{cardPrueba()}</div>
                <div className="col-md-3">{cardPrueba()}</div>
                <div className="col-md-3">{cardPrueba()}</div>
                <div className="col-md-3">{cardPrueba()}</div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
          <div className="mb-5 row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3">{cardPrueba()}</div>
                <div className="col-md-3">{cardPrueba()}</div>
                <div className="col-md-3">{cardPrueba()}</div>
                <div className="col-md-3">{cardPrueba()}</div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselZ;

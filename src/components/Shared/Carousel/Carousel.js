import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

const CarouselZ = (props) => {
  return (
    <Carousel indicators={false}>
      {props.items.map((item) => {
        return <Carousel.Item key={item.id}>{item.content}</Carousel.Item>;
      })}
    </Carousel>
  );
};

export default CarouselZ;

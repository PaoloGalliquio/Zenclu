import "./Cards.css";
import { Card } from "react-bootstrap";

const Product = (props) => {
  const videoCreatorPhotoWidth = "55px";

  return (
    <div className="col ps-2 pe-2" key={props.id}>
      <Card className="ps-2 pe-2 pt-0 border-0 mx-auto">
        <Card.Img
          className="mt-2"
          variant="top"
          src={props.photo}
          alt={props.title}
        />
        <Card.Body className="pt-3 pe-0 ps-0 pb-2">
          <div className="row">
            <div className="col-md-3 text-center">
              <img
                src={props.sellerPhoto}
                alt={props.sellerName}
                width={videoCreatorPhotoWidth}
              />
            </div>
            <div className="col-md-9 ps-0">
              <h5 className="mb-0">
                <b>{props.title}</b>
              </h5>
              <h6 className="mb-1">{props.sellerName}</h6>
              <h5>
                <b>{props.priceDiscount} &nbsp;</b>
                <span className="text-decoration-line-through">
                  {props.price}
                </span>
              </h5>
            </div>
          </div>
          <div className="mt-2">
            <div className="d-grid gap-1 mb-2">
              <button
                className="btn "
                style={{ backgroundColor: "rgb(133, 221, 149)" }}>
                {" "}
                <b> Agregar al carrito </b>{" "}
              </button>
            </div>
            <div className="d-grid gap-1">
              <button
                className="btn text-white"
                style={{ backgroundColor: "rgb(54, 178, 114)" }}>
                {" "}
                COMPRAR AHORA
              </button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;

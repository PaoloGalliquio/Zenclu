import "./Cards.css";
import { Card } from "react-bootstrap";

const Product = (props) => {
  const videoCreatorPhotoWidth = props.small ? "45px" : "55px";

  if(props.small){
    return(
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
                <img src={props.sellerPhoto} alt={props.sellerName} width={videoCreatorPhotoWidth}/>
              </div>
              <div className="col-md-9 ps-0">
                <div className="cardTitleSmall zencluMedium">{props.title}</div>
                <div className="cardSubtitleSmall mb-1">{props.sellerName}</div>
                <div className="cardTitleSmall zencluMedium">
                  {props.priceDiscount} &nbsp;
                  <span className="text-decoration-line-through">
                    {props.price}
                  </span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
  if(props.isBought){
    return(
      <div className="col ps-2 pe-2" key={props.id}>
        <Card className="ps-2 pe-2 pt-0 border-0 mx-auto">
          <Card.Img
            className="mt-2"
            variant="top"
            src={props.photo}
            alt={props.title}
          />
          <Card.Body className="pt-3 pe-0 ps-0 pb-2">
            <div className="row zencluMedium">
              <div className="col ps-3">
                <div className="cardTitle">{props.title}</div>
                <div className="cardSubtitle">{props.date}</div>
                <h5>
                  {props.priceDiscount} &nbsp;
                  <span className="text-decoration-line-through">
                    {props.price}
                  </span>
                </h5>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
  else{
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
                <h5 className="mb-0">{props.title}</h5>
                <h6 className="mb-1">{props.sellerName}</h6>
                <h5>
                  {props.priceDiscount} &nbsp;
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
                  Agregar al carrito{" "}
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
  }
};

export default Product;

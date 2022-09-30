import { Card, Button } from "react-bootstrap";
import viewsIcon from "../../../assets/Iconos/Recurso 52.png";

const typeInfo = (type) => {
  if (type === "Video") {
    return <Button variant="primary bluecolor pe-4 ps-4">{type}</Button>;
  } else {
    return <Button variant="success greencolor pe-4 ps-4">{type}</Button>;
  }
};

const SubscriptionView = (props) => {
  return (
    <div className="col ps-2 pe-2" key={props.id}>
      <Card className="ps-2 pe-2 pt-0 border-0">
        <Card.Img
          className="mt-2"
          variant="top"
          src={props.image}
          alt={props.title}
        />
        <Card.Body className="pt-3 pe-0 ps-0 pb-3">
          <div className="ps-2">
            <h5>{props.title}</h5>
            <h6>{props.author}</h6>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="icon-notification mt-2">
                <img
                  src={viewsIcon}
                  height="17px"
                  className="mt-1"
                  alt={props.title}
                />
                <p className="views-icon">{props.views}</p>
              </div>
            </div>
            <div className="col-md-6 text-end tagCursoVideo">
              {typeInfo(props.type)}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SubscriptionView;

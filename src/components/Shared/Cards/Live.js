import "./Cards.css";
import { Card } from "react-bootstrap";

const Live = (props) => {

  return (
    <div className="col ps-2 pe-2" key={props.id}>
      <Card className="ps-2 pe-2 pt-0 border-0">
        <Card.Img className="mt-2" variant="top" src={props.image} />
        <Card.Body className="pt-3 pe-0 ps-0 pb-3">
          <div className="ps-2 zencluMedium">
            <div className="cardTitle">{props.title}</div>
            <div className="cardSubtitle">{props.date}</div>
            <span className="ps-2 cardTitle">{props.views}</span>
          </div>
          <div className="mt-2 ps-2">
            <h5>{props.price}</h5>
          </div>
          <div className="row mt-2 live-Start ms-2 me-2 zencluMedium">
            <div className="col live-StartsAt my-auto">Inicia en:</div>
            <div className="col live-Timer my-auto">00:00:00</div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Live;

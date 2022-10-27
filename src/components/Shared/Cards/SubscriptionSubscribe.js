import { Card, Button } from "react-bootstrap";
import liveIcon from "../../../assets/Iconos/Recurso 51.png";
import viewsIcon from "../../../assets/Iconos/Views.svg";

const typeInfo = (type) => {
  if (type === "Video") {
    return (
      <Button variant="info text-white bluecolor pe-4 ps-4">{type}</Button>
    );
  } else {
    return <Button variant="success greencolor pe-4 ps-4">{type}</Button>;
  }
};

const isLiveIcon = (isLive) => {
  if (isLive) {
    return (
      <img
        className="live-tag"
        height="31"
        width="86"
        src={liveIcon}
        alt="En vivo"
      />
    );
  }
};

const SubscriptionSubscribe = (props) => {
  if (props.isSuscribed) {
    return (
      <div className="col ps-2 pe-2" key={props.id}>
        <Card className="ps-2 pe-2 pt-0 border-0">
          <Card.Img className="mt-2" variant="top" src={props.image} />
          {isLiveIcon(props.isLive)}
          <Card.Body className="pt-3 pe-0 ps-0 pb-3">
            <div className="ps-2 zencluMedium">
              <div className="cardTitle">{props.title}</div>
              <div className="cardSubtitle">{props.date}</div>
              <img src={viewsIcon} alt="views icon" height={"13px"}/> 
              <span className="ps-2 cardTitle">{props.views}</span>
            </div>
            <div className="row mt-2">
              <div className="col-md-6 text-start">{typeInfo(props.type)}</div>
              <div className="col-md-6 text-end">
                <h5 className="text-end">{props.value}</h5>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
  else {
    return (
      <div className="col ps-2 pe-2" key={props.id}>
        <Card className="ps-2 pe-2 pt-0 border-0">
          <Card.Img className="mt-2" variant="top" src={props.image} />
          {isLiveIcon(props.isLive)}
          <Card.Body className="pt-3 pe-0 ps-0 pb-3">
            <div className="ps-2">
              <h5>{props.title}</h5>
              <h6>{props.author}</h6>
            </div>
            <div className="row mt-2">
              <div className="col-md-6 text-start">{typeInfo(props.type)}</div>
              <div className="col-md-6 text-end">
                <h5 className="text-end">{props.value}</h5>
              </div>
            </div>
            <a href="/PaymentMethods">
              <Button variant="primary w-100 mt-2 bluebigcolorletter Spacing">
                SUSCRIBIRME
              </Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    );
  }
};

export default SubscriptionSubscribe;

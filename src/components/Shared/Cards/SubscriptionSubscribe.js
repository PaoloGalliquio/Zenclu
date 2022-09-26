import { Card, Button } from "react-bootstrap";
import liveIcon from "../../../assets/Iconos/Recurso 51.png";

const typeInfo = (type) => {
  if (type == "Video") {
    return (
      <Button variant="info text-white bluecolor pe-4 ps-4">{type}</Button>
    );
  } else {
    return <Button variant="success greencolor pe-4 ps-4">{type}</Button>;
  }
};

const isLiveIcon = (isLive) => {
  if (isLive) {
    return <img className="live-tag" height="31" width="86" src={liveIcon} />;
  }
};

const SubscriptionSubscribe = (props) => {
  return (
    <div className="col ps-2 pe-2" key={props.id}>
      <Card className="ps-2 pe-2 pt-0 border-0 zencluShadow">
        <Card.Img className="mt-2" variant="top" src={props.image} />
        {isLiveIcon(props.isLive)}
        <Card.Body className="pt-3 pe-0 ps-0 pb-3">
          <h5>
            <b>{props.title}</b>
          </h5>
          <h6>{props.author}</h6>
          <div className="row mt-2">
            <div className="col-md-6 text-start">{typeInfo(props.type)}</div>
            <div className="col-md-6 text-end">
              <h5 className="text-end">
                <b>{props.value}</b>
              </h5>
            </div>
          </div>
          <Button variant="primary w-100 mt-2 bluebigcolor">
            <b>SUSCRIBIRME</b>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SubscriptionSubscribe;

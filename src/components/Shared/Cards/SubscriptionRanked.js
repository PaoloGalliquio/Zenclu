import "./Cards.css";
import { Card } from "react-bootstrap";
import { Rating } from "@mui/material";

const SubscriptionRanked = (props) => {
  const videoCreatorPhotoWidth = "60px";

  return (
    <div className="col ps-2 pe-2" key={props.id}>
      <Card className="ps-2 pe-2 pt-0 border-0 mx-auto">
        <Card.Img
          className="mt-2"
          variant="top"
          src={props.image}
          alt={props.creator}
        />
        <Card.Body className="pt-3 pe-0 ps-0 pb-1">
          <div className="row">
            <div className="col-md-3 text-end">
              <img
                src={props.creatorPhoto}
                alt={props.creator}
                width={videoCreatorPhotoWidth}
              />
            </div>
            <div className="col-md-9 ps-0">
              <h5>{props.title}</h5>
              <h6>{props.creator}</h6>
              <Rating name="read-only" value={props.raking} readOnly />
              <h5 className="zencluBold">S/ {props.price}</h5>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SubscriptionRanked;

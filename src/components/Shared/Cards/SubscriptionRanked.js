import "./Cards.css";
import { Card } from "react-bootstrap";
import { Rating } from "@mui/material";

const SubscriptionRanked = (props) => {
  const videoCreatorPhotoWidth = props.small ? "45px" : "60px";

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
            {props.small ? 
              <div className="col-md-9 ps-0">
                <div className="cardTitleSmall zencluMedium">{props.title}</div>
                <div className="cardSubtitleSmall zencluRegular">{props.creator}</div>
                <Rating name="read-only" value={props.raking} readOnly />
                <div className="cardTitleSmall zencluBold">S/ {props.price}</div>
              </div>
              :
              <div className="col-md-9 ps-0">
                <div className="h5">{props.title}</div>
                <div className="h6 zencluRegular">{props.creator}</div>
                <Rating name="read-only" value={props.raking} readOnly />
                <div className="h5 zencluBold">S/ {props.price}</div>
              </div>
            }
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SubscriptionRanked;

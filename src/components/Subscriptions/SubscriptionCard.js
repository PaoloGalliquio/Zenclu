import { Card, Button } from "react-bootstrap";
import viewsIcon from "../../assets/Iconos/Recurso 52.png"

const typeInfo = (type) => {
  if( type == "Video"){
    return (
      <Button variant="primary bluecolor pe-4 ps-4">{ type }</Button>
    );
  }else{
    return (
      <Button variant="success greencolor pe-4 ps-4">{ type }</Button>
    );
  }
}

export default function SubscriptionCard ( props ) {
  return (
    <Card className="m-2 col-md-3 mx-auto" style={{ width: "20rem"}}>
      <Card.Img className="mt-2" variant="top" src={props.image}/>
      <Card.Body className="pt-3 pe-0 ps-0 pb-3">
        <h5><b>{props.title}</b></h5>
        <h6>{props.author}</h6>
        <div className="row">
          <div className="col-md-6">
            <div className="icon-notification mt-2">
              <img src={viewsIcon} height="17px" className="mt-1"/>
              <p className="views-icon">{props.views}</p>
            </div>
          </div>
          <div className="col-md-6 text-end tagCursoVideo">
            {typeInfo(props.type)}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
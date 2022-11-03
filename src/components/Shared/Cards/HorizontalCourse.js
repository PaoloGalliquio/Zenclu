import "./Cards.css";
import liveIcon from "../../../assets/Iconos/Recurso 51.png";

const HorizontalCourse = (props) => {
  return (
    <div className="row p-2" key={props.id}>
      <div className="col-md-7 cardImage ps-0 pe-0">
        {props.isLive ? <img className="cardLive" height="31" width="86" src={liveIcon} alt="En vivo" /> : <></>}
        <img src={props.image} alt={props.title} width={"100%"} />
      </div>
      <div className="col-md-5">
        <div className="zencluMedium cardTitle">{props.title}</div>
        <div className="cardSubtitle">{props.creator}</div>
        <div className="zencluMedium cardTitle mt-4">{props.price}</div>
      </div>
    </div>
  );
}

export default HorizontalCourse;
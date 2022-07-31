import TrendCard from "./TrendCard";
import image1 from "../assets/fotos/Recurso 50.png";
import image2 from "../assets/fotos/Recurso 49.png";
import image3 from "../assets/fotos/Recurso 48.png";
import image4 from "../assets/fotos/Recurso 47.png";

const getCards = () => {
  const cardInfo = [
    {id: 1, image : image1, title : "Playboard build", author : "Wood creations", value : "S/ 39,90", type : "Video", isLive : true},
    {id: 2, image : image2, title : "Classic guitar", author : "Lonely music", value : "S/ 49,90", type : "Video", isLive : false},
    {id: 3, image : image3, title : "The Science Project", author : "Science Kid", value : "S/ 19,90", type : "Curso", isLive : true},
    {id: 4, image : image4, title : "Pop culture today", author : "Culture", value : "S/ 49,90", type : "Curso", isLive : false},
  ];
  return(
    <div className="row">
      {cardInfo.map((info) => {
        return <TrendCard
          key = {info.id}
          image = {info.image}
          title = {info.title}
          author = {info.author}
          value = {info.value}
          type = {info.type}
          isLive = {info.isLive}
        />;
      })}
    </div>
  );
}

const TrendList = () => {
  return (
    <div className="row mt-3">
      <div className="col-md-1 my-auto text-end">
        <img src={require("../assets/Iconos/Recurso 54.png")} />
      </div>
      <div className="col-md-10">
        <div className="row text-black trending mx-auto">
          <h3 className="mb-4">
            <b>Tendencias de la semana</b>
          </h3>
          <div className="mb-5">{getCards()}</div>
        </div>
      </div>
      <div className="col-md-1 my-auto">
        <img src={require("../assets/Iconos/Recurso 53.png")} />
      </div>
    </div>
  );
};

export default TrendList
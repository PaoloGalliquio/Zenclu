import TopCreatorCard from "./TopCreatorCard";
import image1 from "../assets/fotos/Recurso 46.png"
import image2 from "../assets/fotos/Recurso 45.png"
import image3 from "../assets/fotos/Recurso 44.png"
import image4 from "../assets/fotos/Recurso 43.png"

const getCards = () => {
  const cardInfo = [
    {id: 1, image : image1, name : "Ricardo Mosquera", themes : ["Ciencias", "Mecánica", "Ingeniería"]},
    {id: 2, image : image2, name : "Manuel Villegas", themes : ["Ciencias", "Mecánica", "Ingeniería"]},
    {id: 3, image : image3, name : "Anna Hassinger", themes : ["Ciencias", "Mecánica", "Ingeniería"]},
    {id: 4, image : image4, name : "Patricio Reina", themes : ["Ciencias", "Mecánica", "Ingeniería"]},
  ];
  return(
    <div className="row">
      {cardInfo.map((info) => {
        return <TopCreatorCard
          key = {info.id}
          image = {info.image}
          name = {info.name}
          themes = {info.themes}
        />;
      })}
    </div>
  );
};

const TopCreatorList = () => {
  return (
    <div className="row top-creators">
      <div className="col-md-1 my-auto text-end">
        <img src={require("../assets/Iconos/Recurso 54.png")} />
      </div>
      <div className="col-md-10">
        <div className="row text-black trending mx-auto">
          <div className="row mt-3 tabsTopCreators">
            <div className="tabtabO"></div>
            <button className="tabtab text-center tabActive">
              <h3 className="mb-4">
                <b>Top creadores</b>
              </h3>
            </button>
            <button className="tabtab text-center tab">
              <h3 className="mb-4 disabled">
                <b>Recomendados</b>
              </h3>
            </button>
            <button className="tabtab text-center tab">
              <h3 className="mb-4 disabled">
                <b>Descubrir</b>
              </h3>
            </button>
            <div className="tabtabO"></div>
          </div>
          <span className="lineaGradiente"></span>
          <div className="row">
            <div className="text-black mb-5">{getCards()}</div>
          </div>
        </div>
      </div>
      <div className="col-md-1 my-auto">
        <img src={require("../assets/Iconos/Recurso 53.png")} />
      </div>
    </div>
  );
};

export default TopCreatorList;

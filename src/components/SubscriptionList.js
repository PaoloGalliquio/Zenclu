import SubscriptionCard from "./SubscriptionCard";
import image1 from "../assets/fotos/Recurso 42.png"
import image2 from "../assets/fotos/Recurso 11.png"
import image3 from "../assets/fotos/Recurso 12.png"
import image4 from "../assets/fotos/Recurso 11.png"

const getCards = () => {
  const cardInfo = [
    {id: 1, image : image1, title : "The science behind microchips", author : "Wired Creator", views : "2,2k", type : "Video"},
    {id: 2, image : image2, title : "Birds of Latin America", author : "Blue Planet", views : "1,3M", type : "Video"},
    {id: 3, image : image3, title : "Secret recipes", author : "Kitchen hacks", views : "75k", type : "Curso"},
    {id: 4, image : image4, title : "Glamourus Makeup tutorial", author : "Colour tutorials", views : "3,7k", type : "Curso"}
  ];

  return(
    <div className="row mx-auto">
      {cardInfo.map((info) => {
        return <SubscriptionCard
          key = {info.id}
          image = {info.image}
          title = {info.title}
          author = {info.author}
          views = {info.views}
          type = {info.type}
        />;
      })}
    </div>
  );
}

const SubscriptionsList = (props) => {
  return (
    <div className="row background-image">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        {/* Portada */}
        <div className="text-white front">
          <div className="title-principal">
            <h1
              onClick={() => {
                props.register(true);
              }}
            >
              <b>¡Hola!</b>
            </h1>
            <h1>
              <b>Bienvenido Marcus ¿listo para aprender?</b>
            </h1>
            <h4>
              Echa una mirada a los cursos y videos que tenemos para ti.
            </h4>
          </div>
          <div className="mx-auto">
            <h3 className="mb-4">
              <b>Suscripciones</b> | Ver todo
            </h3>
            <div className="text-black mb-5">{getCards()}</div>
          </div>
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
  );
};

export default SubscriptionsList;
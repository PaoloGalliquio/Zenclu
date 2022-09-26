import "./NavbarZ.css";
import image1 from "../../../assets/fotos/Recurso 43.png";
import image2 from "../../../assets/fotos/Recurso 44.png";
import image3 from "../../../assets/fotos/Recurso 45.png";
import messageIcon from "../../../assets/Iconos/NavBar/BellIcons/Recurso 30.png";
import reactionIcon from "../../../assets/Iconos/NavBar/BellIcons/Recurso 29.png";
import followIcon from "../../../assets/Iconos/NavBar/BellIcons/Recurso 31.png";

const Bell = () => {
  const creatorImgWidth = "50px";
  const notificationImgWidth = "20px";

  const creators = [
    {
      name: "Tamara Dueñas",
      message: "Tienes un nuevo mensaje...",
      image: image1,
      notification: messageIcon,
    },
    {
      name: "Ricardo Mosquera",
      message: "Ha reaccionado un video...",
      image: image2,
      notification: reactionIcon,
    },
    {
      name: "Anna Hassinger",
      message: "Ha solicitado seguirte en...",
      image: image3,
      notification: followIcon,
    },
  ];

  return (
    <div className="navbar-background zencluCursor fadeIn fast">
      <div className="navbar-triangle"></div>
      {creators.map((creator) => {
        return (
          <div key={creator.name}>
            <div className="row" key={creator.name}>
              <div className="col-md-3">
                <img
                  src={creator.image}
                  alt={creator.name}
                  width={creatorImgWidth}
                />
                <img
                  src={creator.notification}
                  alt="Notification"
                  width={notificationImgWidth}
                  className="navbar-notification"
                />
              </div>
              <div className="col-md-9 my-auto ps-4">
                <div className="row zencluBold">
                  <div className="col p-0">{creator.name}</div>
                </div>
                <div className="row">
                  <div className="col p-0">{creator.message}</div>
                </div>
              </div>
            </div>
            <div className="navbar-division"></div>
          </div>
        );
      })}
      <div className="text-center">
        <p className="zencluLink">Ver todo</p>
      </div>
    </div>
  );
};

export default Bell;

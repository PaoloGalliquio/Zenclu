import "./History.css";
import NavbarZ from "../../components/Shared/NavBar/NavbarZ";
import HeaderTitle from "../../components/Shared/HeaderTitle/HeaderTitle";
import Footer from "../../components/Shared/Footer/Footer";
import historialIcon from "../../assets/Iconos/NavBar/ProfileIcons/Recurso 15.png";
import likeIcon from "../../assets/Iconos/History/Recurso 2.svg";
import commentIcon from "../../assets/Iconos/History/Recurso 3.svg";
import certificateIcon from "../../assets/Iconos/History/Recurso 4.svg";
import searchIcon from "../../assets/Iconos/History/Recurso 6.svg";
import List from "../../components/Shared/List/List";

const History = () => {
  const todayHistory = [
    {
      id: 1,
      icon: likeIcon,
      name: "Le diste like a Become an amazing plyboard builder de Wood creations.",
      time: "12:43",
    },
    {
      id: 2,
      icon: searchIcon,
      name: "Buscaste en Zenclu Desarrollo de sistema.",
      time: "14:18",
    },
    {
      id: 3,
      icon: commentIcon,
      name: "Comentaste en el foro de Become an amazing plyboard builder de Wood creations.",
      time: "14:37",
    },
    {
      id: 4,
      icon: commentIcon,
      name: "Subiste un documento a tus certificaciones con nombre Certification y está en proceso de revisión.",
      time: "14:37",
    },
    {
      id: 5,
      icon: certificateIcon,
      name: "Le diste like a Become an amazing plyboard builder de Wood creations.",
      time: "12:43",
    },
  ];

  const yestardayHistory = [
    {
      id: 6,
      icon: certificateIcon,
      name: "Buscaste en Zenclu Desarrollo de sistema.",
      time: "14:18",
    },
    {
      id: 7,
      icon: likeIcon,
      name: "Comentaste en el foro de Become an amazing plyboard builder de Wood creations.",
      time: "14:37",
    },
    {
      id: 8,
      icon: likeIcon,
      name: "Le diste like a Become an amazing plyboard builder de Wood creations.",
      time: "14:37",
    }
  ];

  return (
    <>
      <NavbarZ />
      <HeaderTitle image={historialIcon} title="Historial" />
      <div className="pageContainer">
        <div className="row">
          <div className="col ps-0 pe-0">
            <input
              type="search"
              placeholder="Buscar en el historial"
              className="history-search"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <List title="Hoy" items={todayHistory} />
            <List title="Ayer" items={yestardayHistory} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default History;

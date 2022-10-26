import "./HelpCenter.css";
import NavbarZ from "../../components/Shared/NavBar/NavbarZ";
import HeaderTitle from "../../components/Shared/HeaderTitle/HeaderTitle";
import Footer from "../../components/Shared/Footer/Footer";
import TabSelector from "../../components/Shared/TabSelector/TabSelector";
import helpCenterIcon from "../../assets/Iconos/HelpCenter/Recurso 7.svg";
import Accordion from "../../components/Shared/Accordion/Accordion";
import { Button } from "react-bootstrap";

const HelpCenter = () => {
  const tabs = [
    {
      id: 1,
      name: "Preguntas frecuentes"
    },
    {
      id: 2,
      name: "Mensajes"
    },
  ];

  const questionsData = [
    {
      id: 1,
      question: "¿Puedo descargar los videos que tenga en mi lista de suscripciones?",
      answer: "En nungún caso será posible la descarga del video. Lo que sí es posible es que actives la opción de ver tus videos offline, lo que quiere decir, que podrás reproducir tus videos cuando desées y en el lugar que te encuentres."
    },
    {
      id: 2,
      question: "¿Lorem ipsum dolor sit amet, consectetuer adipiscing elit?",
      answer: "En nungún caso será posible la descarga del video. Lo que sí es posible es que actives la opción de ver tus videos offline, lo que quiere decir, que podrás reproducir tus videos cuando desées y en el lugar que te encuentres."
    },
    {
      id: 3,
      question: "¿Hendrerit in vulputate velit esse molestie consequat?",
      answer: "En nungún caso será posible la descarga del video. Lo que sí es posible es que actives la opción de ver tus videos offline, lo que quiere decir, que podrás reproducir tus videos cuando desées y en el lugar que te encuentres."
    },
    {
      id: 4,
      question: "¿Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna?",
      answer: "En nungún caso será posible la descarga del video. Lo que sí es posible es que actives la opción de ver tus videos offline, lo que quiere decir, que podrás reproducir tus videos cuando desées y en el lugar que te encuentres."
    },
    {
      id: 5,
      question: "¿Suscipit lobortis nisl ut aliquip ex ea commodo consequat?",
      answer: "En nungún caso será posible la descarga del video. Lo que sí es posible es que actives la opción de ver tus videos offline, lo que quiere decir, que podrás reproducir tus videos cuando desées y en el lugar que te encuentres."
    },
    {
      id: 6,
      question: "¿Vero eros et accumsan et iusto odio dignissim qui blandit praesent?",
      answer: "En nungún caso será posible la descarga del video. Lo que sí es posible es que actives la opción de ver tus videos offline, lo que quiere decir, que podrás reproducir tus videos cuando desées y en el lugar que te encuentres."
    }
  ];

  return (
    <>
      <NavbarZ />
      <HeaderTitle image={helpCenterIcon} title="Centro de ayuda" />
      <div className="pageContainer">
        <div className="row">
          <div className="col ps-0 pe-0">
            <input
              type="search"
              placeholder="Buscar en el Centro de Ayuda"
              className="history-search"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="pb-5 pt-3">
              <TabSelector tabs={tabs} haveImage={false} padding={"25%"} selected={1}/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col helpCenter-text">
            Resolvamos esas principales dudas que surgen frecuentemente.
          </div>
        </div>
        <div className="row pt-4">
          <div className="col helpCenter-questions">
            <Accordion items={questionsData} />
          </div>
        </div>
        <div className="row pt-4">
          <div className="col helpCenter-text">
            ¿Aún sin resolver tu duda? ¡Escríbenos!
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Button className="text-center helpCenter-button mt-3">
              Escribir mensaje
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpCenter;

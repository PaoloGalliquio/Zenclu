import { Button, Form } from "react-bootstrap";
import CloseIcon from "../../assets/Iconos/close.png";
import DropdownIcon from "../../assets/Iconos/Recurso 53.png";
import Logo from "../../assets/Iconos/Recurso 32.png";

const Informacion2 = (props) => {
  document.getElementById("app-root").style.filter = "blur(10px)";
  return (
    <>
      <div className="modalBar">
        <img src={Logo} className="imageBanner" />
      </div>
      <div className="text-center modalBackground fadeIn fast">
        <div className="row modalContainerInfo">
          <div className="container-icon mb-2">
            <img
              src={CloseIcon}
              height="25"
              className="close-icon-info"
              onClick={() => {
                document.getElementById("app-root").style.filter = "blur(0px)";
                props.info(false);
              }}
            />
            <h5 className="mb-2">Información</h5>
          </div>
          <div className="row mb-4">
            <div className="col-md-4 greenCircle firstCircle"></div>
            <div className="col-md-4 greenCircle"></div>
            <div className="col-md-4 greenCircle"></div>
          </div>
          <div className="row text-start">
            <h5>Queremos mostrarte justo lo que buscas</h5>
            <p>
              Selecciona o busca distintas categorías que te gustaría poder
              encontrar en la plataforma
            </p>
          </div>
          <div className="row">
            <div className="col-md-2 my-auto">Busca aquí:</div>
            <div className="col-md-8 pt-2 container-icon">
              <img src={DropdownIcon} className="dropdown-icon" />
              <Form.Control
                type="text"
                placeholder=""
                className="mb-3 modalWidth w-100 bg-white"
                readOnly
              />
            </div>
            <div className="col-md-2 my-auto">
              <Button
                variant="primary"
                className="text-center w-100 modalButton">
                Agregar
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 my-auto">Tu elección:</div>
            <div className="col-md-10 pt-2 container-icon">
              <div className="tag-icon1">
                Moda <b>x</b>
              </div>
              <div className="tag-icon2">
                Tecnología <b>x</b>
              </div>
              <div className="tag-icon3">
                Ciencia <b>x</b>
              </div>
              <Form.Control
                type="text"
                placeholder=""
                className="mb-3 modalWidth w-100 bg-white"
                readOnly
              />
            </div>
          </div>
          <div className="row text-center mt-3">
            <div className="col-md-12">
              <Button
                variant="success"
                className="text-center w-50 modalButton modalNextButton"
                onClick={() => {
                  document.getElementById("app-root").style.filter =
                    "blur(0px)";
                  props.info(false);
                }}>
                Confirmar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Informacion2;

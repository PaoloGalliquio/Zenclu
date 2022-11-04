import { Button, Form } from "react-bootstrap";
import calendarIcon from "../../assets/Iconos/Recurso 33.png";
import CloseIcon from "../../assets/Iconos/close.png";
import Logo from "../../assets/Iconos/Recurso 32.png";

const Informacion1 = (props) => {
  document.getElementById("app-root").style.filter = "blur(10px)";
  return (
    <>
      <div className="modalBar">
        <img src={Logo} className="imageBanner" alt="Logo" />
      </div>
      <div className="text-center modalBackground fadeIn fast">
        <div className="row modalContainerInfo">
          <div className="container-icon mb-2">
            <img src={CloseIcon} height="25" className="close-icon-info" alt="Cerrar"
              onClick={() => {
                document.getElementById("app-root").style.filter = "blur(0px)";
                props.info1(false);
              }}
            />
            <h5 className="mb-2">Información</h5>
          </div>
          <div className="row mb-4">
            <div className="col-md-4 greenCircle firstCircle"></div>
            <div className="col-md-4 greenCircle"></div>
            <div className="col-md-4 grayCircle"></div>
          </div>
          <div className="row text-start">
            <h5>Datos del usuario</h5>
            <p>Queremos que seas parte de esta comunidad. Llena tus datos en las siguientes casillas.</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Control type="text" placeholder="Nombre" className="mb-3 modalWidth w-100" /> 
            </div>
            <div className="col-md-6">
              <Form.Control type="text" placeholder="Apellido" className="mb-3 modalWidth w-100" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="container-icon">
                <img
                  src={calendarIcon}
                  height="25"
                  className="calendar-icon"
                  alt="Calendario"
                />
                <Form.Control type="text" placeholder="Fecha de nacimiento" className="mb-3 modalWidth w-100" />
              </div>
            </div>
            <div className="col-md-6">
              <Form.Control type="text" placeholder="Número de celular" className="mb-3 modalWidth w-100" />
            </div>
          </div>
          <div className="row text-center mt-3">
            <div className="col-md-12">
              <Button variant="success" className="text-center w-50 modalButton modalNextButton"
                onClick={() => {
                  props.info1(false);
                  props.info2(true);
                }}>
                Siguiente
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Informacion1;

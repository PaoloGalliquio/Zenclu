import { Button, Form } from "react-bootstrap";
import FacebookIcon from "../../assets/Iconos/Recurso 30.png";
import GoogleIcon from "../../assets/Iconos/Recurso 31.png";
import CloseIcon from "../../assets/Iconos/close.png";
import Logo from "../../assets/Iconos/Recurso 32.png";

const Ingresar = (props) => {
  document.getElementById("app-root").style.filter = "blur(10px)";
  return (
    <div>
      <div className="modalBar">
        <img src={Logo} className="imageBanner" />
      </div>
      <div className="text-center modalBackground fadeIn fast">
        <div className="row modalContainer">
          <div className="container-icon">
            <img
              src={CloseIcon}
              height="25"
              className="close-icon"
              onClick={() => {
                document.getElementById("app-root").style.filter = "blur(0px)";
                props.login(false);
              }}
            />
            <h5 className="mb-5">Ingresa a Zenclu</h5>
          </div>
          <div className="container-icon">
            <img src={FacebookIcon} height="25" className="login-icon" />
            <Button
              variant="light"
              className="text-center mb-3 modalWidth bg-white">
              Continúa con Facebook
            </Button>
          </div>
          <div className="container-icon">
            <img src={GoogleIcon} height="25" className="login-icon" />
            <Button
              variant="light"
              className="text-center mb-3 modalWidth bg-white">
              Continúa con Google
            </Button>
          </div>
          <p>o continúa con</p>
          <Form.Control
            type="email"
            placeholder="Correo electrónico"
            className="mb-3 modalWidth"
          />
          <Form.Control
            type="password"
            placeholder="Contraseña"
            className="mb-3 modalWidth"
          />
          <a href="#" class="mb-3 modalForgot">
            ¿Olvidaste tu contraseña?
          </a>
          <div className="text-center mb-3">
            <Button
              variant="primary"
              className="text-center w-50 modalButton"
              onClick={() => (window.location.href = "/Home")}>
              Iniciar sesión
            </Button>
          </div>
          <p>
            ¿No tienes cuenta?
            <b
              className="modalLink"
              onClick={() => {
                props.register(true);
                props.login(false);
              }}>
              {" "}
              Regístrate
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ingresar;

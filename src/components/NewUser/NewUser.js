import "./NewUser.css"
import Logo from "../../assets/Iconos/Recurso 32.png";
import Footer from '../Footer/Footer';
import Header from "../Header/Header";
import { Button, Form } from "react-bootstrap";

const NewUser = () => {
  return(
    <>
    <Header/>
    <div className="row newuser-background w-100 ms-0 me-0">
      <div className="col-md-1 newuser-greenbg"></div>
      <div className="col-md-2 newuser-greenbg">
        <h2 className="zencluBold newuser-title">Aprender nunca fue tan fácil.</h2>
        <p className="zencluSemiBold">¡Únete de forma gratuita a esta comunidad que está cambiando el mundo!</p>
        <Button className="text-center w-75 buttonPrincipal mt-2">Crea tu cuenta gratis</Button>
        <Button className="text-center w-75 buttonSecondary mt-3 newuse-mb">Suscribete</Button>
      </div>
      <div className="col-md-2 newuser-greenbg"></div>
    </div>
    <div className="row">
      
    </div>
    <Footer/>
    </>
  );
}

export default NewUser;
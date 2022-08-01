import { useState } from 'react';
import NavbarZ from "./NavBar/NavbarZ";
import SubscriptionList from "./Subscriptions/SubscriptionList";
import TrendList from "./Trends/TrendList";
import TopCreatorList from "./TopCreators/TopCreatorList";
import Registrarse from './Register/Registrarse';
import Ingresar from './Login/Ingresar';
import Informacion1 from './Register/Informacion1';
import Informacion2 from './Register/Informacion2';
import CarouselZ from './CaroulselZ';
import Footer from './Footer/Footer';

const Principal = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showInformation1, setShowInformation1] = useState(false);
  const [showInformation2, setShowInformation2] = useState(false);
  return (
    <div>
      <div id='app-root'>
        <NavbarZ/>
        <SubscriptionList
          register={setShowRegister}
          login={setShowLogin}
          info1={setShowInformation1}
          info2={setShowInformation1}/>
        {/* <CarouselZ/> */}
        <TrendList/>
        <TopCreatorList/>
        <Footer/>
      </div>
      {/* Modals */}
      <div id="modal-root">
        {showRegister &&
          <Registrarse
            register={setShowRegister}
            login={setShowLogin}
            info1={setShowInformation1}
            info2={setShowInformation1}/>}
        {showLogin &&
          <Ingresar
            register={setShowRegister}
            login={setShowLogin}/>}
        {showInformation1 &&
          <Informacion1
            info1={setShowInformation1}
            info2={setShowInformation2}/>}
        {showInformation2 &&
          <Informacion2
            info={setShowInformation2}/>}
      </div>
    </div>
  );
}

export default Principal
import './App.css';
import { useState } from 'react';
import NavbarZ from "./components/NavbarZ";
import SubscriptionList from "./components/Subscriptions/SubscriptionList";
import TrendList from "./components/Trends/TrendList";
import TopCreatorList from "./components/TopCreators/TopCreatorList";
import Registrarse from './components/Register/Registrarse';
import Ingresar from './components/Ingresar';
import Informacion1 from './components/Register/Informacion1';
import Informacion2 from './components/Register/Informacion2';
import CarouselZ from './components/CaroulselZ';
import Footer from './components/Footer/Footer';

function App() {
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

export default App;

import "./Subscription.css";
import { useState } from "react";
import TabSelector from "../../components/Shared/TabSelector/TabSelector";
import MakePurchase from "../MakePurchase/MakePurchase";

import principalImage from '../../assets/fotos/BirdPhoto.png';
import viewsIcon from "../../assets/Iconos/Recurso 52.png";
import creatorPhoto from "../../assets/fotos/Recurso 44.png";
import Twitter from "../../assets/Iconos/SociaMedia/Twitter.svg";
import Instagram from "../../assets/Iconos/SociaMedia/Intagram.svg";
import LinkedIn from "../../assets/Iconos/SociaMedia/LinkedIn.svg";
import closeIcon from "../../assets/Iconos/Modals/Recurso17.svg";
import saveIcon from "../../assets/Iconos/Modals/Recurso1.svg";
import playButton from "../../assets/Iconos/Modals/Recurso16.svg";

const Subscription = (props) => {
  const [modalPurchase, setModalPurchase] = useState(false);
  const tabs = [
    {
      id: 1,
      name: "Sobre el creador"
    },
    {
      id: 2,
      name: "Comentarios"
    }
  ];
  
  return(
    <>
    {modalPurchase ? <MakePurchase close={setModalPurchase}/> : 
    <div className="modal-background" onClick={() => {props.showModal(false)}}>
      <div className="subscriptionModal-container fadeIn fast" onClick={(e) => {e.stopPropagation()}}>
        <div className="row">
          <div className="col-md-12 mb-3 position-relative">
            <img src={principalImage} alt="Portada de video" width={"100%"}/>
            <div className="videoCourse-save text-center zencluPointer" >
              <img src={saveIcon} alt="Cerrar" width={"16px"} />
            </div>
            <img src={playButton} alt="Reproducir" width={"100px"} className="videoCourse-play"/>
            <img src={closeIcon} alt="Cerrar" width={"16px"} className="videoCourse-close zencluPointer" onClick={() => {props.showModal(false)}}/>
            <div className="videoCourse-timer">10:58</div>
          </div>
          <div className="col-md-9">
            <a href="/VideoCourse">
              <div className="subscriptionModal-title zencluMedium">Become an amazing plyboard builder</div>
            </a>
            <div className="subscriptionModal-subtitle">Wood creations</div>
          </div>
          <div className="col-md-3 text-end subscriptionModal-subtitle">
            <img src={viewsIcon} alt="Numero de vistas" width={"27px"} />{" "}
            1,3M
          </div>
          <div className="col-md-12 mt-3 subscriptionModal-price zencluMedium">
            S/ 39,90
          </div>
          <div className="col-md-12 mt-1">
            <TabSelector tabs={tabs} haveImage={false} padding={"20%"} small={true} selected={1}/>
          </div>
          <div className="col-md-2 mt-3 text-center">
            <img src={creatorPhoto} alt="Foto de creador" width={"60px"}/>
          </div>
          <div className="col-md-10 mt-3 zencluMedium">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
          </div>
          <div className="col-md-12 text-center mt-3">
            <img src={Twitter} alt="Twitter" width={"26px"} className="me-3"/>
            <img src={Instagram} alt="Instagram" width={"23px"} className="me-3"/>
            <img src={LinkedIn} alt="LinkedIn" width={"23px"} />
          </div>
          <div className="col-md-12 text-center mt-3">
            <button className="videoCourse-button" onClick={() => {setModalPurchase(true)}}>Inscribete</button>
          </div>
        </div>
      </div>
    </div>}
    </>
  );
}

export default Subscription;
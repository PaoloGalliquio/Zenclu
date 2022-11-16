import "./MakePurchase.css";
import { useState } from "react";
import SubscriptionRanked from "../../components/Shared/Cards/SubscriptionRanked";

import zcoins from "../../assets/Iconos/ZWallet/Recurso 33.png";
import closeIcon from "../../assets/Iconos/Modals/Recurso15.svg";
import handCoins from "../../assets/Iconos/Modals/Recurso6.svg";
import bagCoins from "../../assets/Iconos/Modals/Recurso7.svg";
import sadFace from "../../assets/Iconos/Modals/Recurso9.svg";
import card from "../../assets/Iconos/Modals/Recurso8.svg";
import checkIcon from "../../assets/Iconos/PaymentMethods/Recurso 5.svg";
import purchaseImage from "../../assets/fotos/Recurso 4.png";
import creatorImage from "../../assets/fotos/Recurso 43.png";

const MakePurchase = (props) => {
  const [selected, setSelected] = useState(0);

  const includes = [
    {
      id: 1,
      name: "Ingreso ilimitado"
    },
    {
      id: 2,
      name: "Descarga de recursos exclusivos"
    },
    {
      id: 3,
      name: "Ingreso al foro"
    },
  ];
  
  const pantalla = () => {
    if(selected === 0)
      return purchase;
    if(selected === 1)
      return authorize;
    if(selected === 2)
      return notEnough;
    if(selected === 3)
      return finished;
  }

  const purchase = (
    <>
    <div className="row position-relative">
      <div className="col-md-1">
        <img src={zcoins} alt="Icono de subir" width={"43px"}/>
      </div>
      <div className="col-md-11 makePurchase-title my-auto">
        <span className="zencluMedium">Realizar movimiento</span>
        <img src={closeIcon} alt="Cerrar" width={"14px"} className="makePurchase-close zencluPointer" 
          onClick={() => {props.close(0)}}/>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-md-1"></div>
      <div className="col-md-11">
        <div>Compra o vuelve a efectivo tus ZCoins.</div>
        <div>Recuerda que esta es la moneda digital exclusiva de Zenclu y te garantizamos 100% de garantía en cada compra que hagas dentro de la plataforma.</div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-md-1"></div>
      <div className="col-md-10 text-center">
        <div className="makePurchase-button zencluMedium" onClick={() => {setSelected(1)}}>
          <img src={handCoins} alt="" width={"34.5px"} className="me-2"/> Comprar ZCoins
        </div>
        <div className="mt-3 makePurchase-subtext ps-5 pe-5">
          Compra ZCoins. Hagamos todos los procesos mucho más fácil. Las ZCoins te permitirán comprar y vender en Zenclu de la manera rápida y segura.
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-md-1"></div>
      <div className="col-md-10 text-center">
        <div className="makePurchase-button zencluMedium" onClick={() => {setSelected(2)}}>
          <img src={bagCoins} alt="" width={"21.5px"} className="me-2"/> Retirar ZCoins
        </div>
        <div className="mt-3 makePurchase-subtext ps-5 pe-5">
          Vuelve tus ZCoins en efectivo. Regresa tus ganancias a tu cuenta bancaria personal o el método que más te acomode.
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-md-1"></div>
      <div className="col-md-10 text-center zencluLink">
        <a href="/ZWallet">
          ¿Qué son las ZCoins?
        </a>
      </div>
    </div>
    </>
  );

  const notEnough = (
    <>
    <div className="row position-relative">
      <div className="col-md-12 makePurchase-title my-auto text-center mt-4">
        <img src={sadFace} alt="" width={"51px"}/>
        <img src={closeIcon} alt="Cerrar" width={"14px"} className="makePurchase-close zencluPointer" 
          onClick={() => {props.close(0)}}/>
      </div>
    </div>
    <div className="row mt-3 text-center">
      <div className="col-md-12">
        <div className="makePurchase-title zencluMedium">Oh oh, no tienes saldo suficiente…</div>
        <div className="mt-3">
          Actualmente no cuentas con ZCoins suficientes para poder efectuar la compra.
        </div>
        <div className="mt-3">
          Escoge una de estas opciones para continuar con la compra:
        </div>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-md-1"></div>
      <div className="col-md-10 text-center">
        <div className="makePurchase-button makePurchase-buttonLarge zencluMedium">
          <img src={handCoins} alt="" width={"34.5px"} className="me-2"/> Comprar ZCoins
        </div>
        <div className="mt-3 makePurchase-subtext ps-5 pe-5">
          Compra ZCoins. Hagamos todos los procesos mucho más fácil. Las ZCoins te permitirán comprar y vender en Zenclu de la manera rápida y segura.
        </div>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-md-1"></div>
      <div className="col-md-10 text-center">
        <div className="makePurchase-button makePurchase-buttonLarge zencluMedium" onClick={() => {setSelected(1)}}>
          <img src={card} alt="" width={"33.6px"} className="me-2"/> Continuar en pasarela de pago
        </div>
        <div className="mt-3 makePurchase-subtext ps-5 pe-5">
          Contamos con opciones 100% seguras a través de transferencias en cuentas de débito y crédito de distintos bancos.
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-md-1"></div>
      <div className="col-md-10 text-center zencluLink">
        <a href="/ZWallet">
          ¿Qué son las ZCoins?
        </a>
      </div>
    </div>
    </>
  );

  const authorize = (
    <>
    <div className="row position-relative">
      <div className="col-md-12 my-auto text-center">
        <img src={zcoins} alt="" width={"43px"}/>
        <div>Saldo actual: 356</div>
        <div style={{fontSize: "18px"}} className="zencluMedium">Autorizo la compra con mis ZCoins del siguiente video:</div>
        <img src={closeIcon} alt="Cerrar" width={"14px"} className="makePurchase-close zencluPointer" 
          onClick={() => {props.close(0)}}/>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-md-6">
        <SubscriptionRanked
          id={"1"}
          image={purchaseImage}
          creator={"Wood creations"}
          creatorPhoto={creatorImage}
          title={"Become an amazing plyboard builder"}
          raking={4}
          price={"39,90"}
        />
      </div>
      <div className="col-md-6 mt-auto">
        <div className="mb-3">Esta compra incluye:</div>
        {includes.map((include) => {
          return(
            <div className="row mt-2" key={include.id}>
              <div className="col-md-2 payment-checkIcon">
                <img src={checkIcon} alt="checkIcon" height={"27px"}/>
              </div>
              <div className="col my-auto ps-0">{include.name}</div>
            </div>
          );
        })}
        <div className="makePurchase-publicButton mx-auto text-center mt-5 zencluMedium"
          onClick={() => {setSelected(3)}}>
          Comprar
        </div>
      </div>
    </div>
    </>
  );

  const finished = (
    <>
    <div className="row position-relative">
      <div className="col-md-12 my-auto text-center">
        <img src={zcoins} alt="" width={"43px"}/>
        <div>Saldo actual: 317</div>
        <div style={{fontSize: "18px"}} className="zencluMedium">¡Tu compra fue realizada con éxito!</div>
        <div style={{fontSize: "16px"}}>El video ya está guardado en tu página de <a href="/Suscripciones" className="zencluLink">suscripciones.</a></div>
        <img src={closeIcon} alt="Cerrar" width={"14px"} className="makePurchase-close zencluPointer" 
          onClick={() => {props.close(0)}}/>
      </div>
    </div>
    <div className="row makePurchase-card mx-auto">
      <div className="col ps-0 pe-0">
        <img src={purchaseImage} alt="Video comprado" className="makePurchase-cardImage"/>
        <div className="makePurchase-Play text-center zencluMedium">Reproducir</div>
        <div className="row">
          <div className="col-md-2">
            <img src={creatorImage} alt="" width={"45.8px"}/>
          </div>
          <div className="col-md-8 makePurchase-cardInfo">
            <div className="makePurchase-cardTitle zencluMedium">Become an amazing plyboard builder</div>
            <div className="makePurchase-cardCreator">Wood creations</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );

  return(
    <div className="modal-background text-black fadeIn fast">
      <div className="modal-container">
        {pantalla()}
      </div>
    </div>
  );
}

export default MakePurchase;
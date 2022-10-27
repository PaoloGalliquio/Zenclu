import './PaymentMethods.css'
import Footer from "../../components/Shared/Footer/Footer";
import NavbarZ from "../../components/Shared/NavBar/NavbarZ";

import backIcon from "../../assets/Iconos/NavBar/MessageIcons/Recurso 25.png";
import productPhoto from "../../assets/fotos/Recurso 4.png";
import creatorPhoto from "../../assets/fotos/Recurso 43.png";

import paymentIcon from "../../assets/Iconos/PaymentMethods/Recurso 2.svg";
import padlockIcon from "../../assets/Iconos/PaymentMethods/Recurso 4.svg";
import checkIcon from "../../assets/Iconos/PaymentMethods/Recurso 5.svg";
import Arrow from "../../assets/Iconos/Arrow.svg"

const PaymentMethods = (props) => {
  const paymentMethodsData = [
    {
      id: 1,
      name: "Forma de pago 1"
    },
    {
      id: 2,
      name: "Forma de pago 2"
    },
    {
      id: 3,
      name: "Forma de pago 3"
    },
  ];

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

  const titulo = (
    <div className='row w-100 ms-0 me-0'>
      <div className="col ps-0 mt-5 payment-back">
        <a href={document.referrer}>
          <img
            src={backIcon}
            alt="Retroceder"
            height={"20px"}
            className="my-auto"
          />
          <span className="ps-3 my-auto">Regresar</span>
        </a>
      </div>
    </div>
  );

  const paymentMethod = (
    <div className="paymentMethod-container mt-5 mb-5">
      <div className="row w-100 ms-0 me-0">
        <div className="col-md-1 text-center">
          <img
            src={paymentIcon}
            alt="Payment Icon"
            height={"45px"}
            className="my-auto"
          />
        </div>
        <div className="col-md-6 pe-5">
          <div className="row payment-title zencluMedium">Formato de pago</div>
          <div className="row payment-paragraph">
            Escoge la opción que más te acomoda para realizar el pago.
          </div>
          <div className="row payment-security mt-4 mb-5">
            <div className="col-md-1 my-auto text-center">
              <img src={padlockIcon} alt="Payment Icon" height={"30px"} />
            </div>
            <div className="col ps-1">
              Recuerda que este es un proceso 100% seguro y te garantizamos un
              soporte las 24 horas al día ante cualquier duda.{" "}
              <span className="zencluLink">Escríbenos aquí</span>
            </div>
          </div>
          {paymentMethodsData.map((method) => {
            return (
              <div
                className="row mt-3 payment-method zencluMedium"
                key={method.id}>
                <div className="col my-auto">{method.name}</div>
                <div className="col-md-2 text-end my-auto">
                  <img
                    src={Arrow}
                    alt="arrow"
                    width={"20px"}
                    className="rotate90"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-5 payment-videoContainer mx-auto">
          <div className="row payment-video zencluMedium">
            <div className="col">Video</div>
          </div>
          <div className="row mt-3">
            <div className="col text-center">
              <img src={productPhoto} alt="Product Photo" width={"340px"} />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-2 my-auto ps-3 pe-0">
              <img src={creatorPhoto} alt="Wood creations" width={"45px"}/>
            </div>
            <div className="col">
              <div className='zencluMedium payment-videoTitle'>Become an amazing plyaboard builder</div>
              <div className='payment-paragraph'>Wood creations</div>
            </div>
          </div>
          <div className="navbar-division mt-3"></div>
          <div className="payment-includes">
            <div className="row">
              <div className="col">Esta compra incluye:</div>
            </div>
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
          </div>
          <div className="navbar-division mt-4"></div>
          <div className="row">
            <div className="col text-end payment-price zencluMedium">S/ 39,90</div>
          </div>
        </div>
      </div>
    </div>
  );

  return(
    <>
    <NavbarZ />
    {titulo}
    {paymentMethod}
    <Footer />
    </>
  );
}

export default PaymentMethods;
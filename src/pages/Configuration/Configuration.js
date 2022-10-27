import "./Configuration.css";
import Footer from "../../components/Shared/Footer/Footer";
import NavbarZ from "../../components/Shared/NavBar/NavbarZ";
import HeaderTitle from "../../components/Shared/HeaderTitle/HeaderTitle";
import TabSelector from "../../components/Shared/TabSelector/TabSelector";
import configurationIcon from "../../assets/Iconos/Configuration/Recurso 2.svg";
import Form from 'react-bootstrap/Form';
import Arrow from "../../assets/Iconos/Arrow.svg"
import Download from "../../assets/Iconos/Configuration/Recurso 4.svg";
import VisaImage from "../../assets/Iconos/Configuration/Recurso 6.svg";
import MastercardImage from "../../assets/Iconos/Configuration/Recurso 7.svg";
import Garbage from "../../assets/Iconos/Configuration/Recurso 8.svg";
import Add from "../../assets/Iconos/Configuration/Recurso 9.svg";
import { Button } from "react-bootstrap";
import { useState } from "react";

const Configuration = () => {
  const [selected, setSelected] = useState(1);

  const tabs = [
    {
      id: 1,
      name: "Constraseña"
    },
    {
      id: 2,
      name: "Notificaciones"
    },
    {
      id: 3,
      name: "Tus pagos"
    },
    {
      id: 4,
      name: "Métodos de pago"
    },
  ];

  const notifications = [
    {
      id: 1,
      title: "Tus seguidores",
      content: "Recibe una alerta de los canales en los que te has suscrito y enterate de todas las novedades.",
      active: true
    },
    {
      id: 2,
      title: "Tu contenido",
      content: "Recibe un resumen de los estados y avances de tus videos, productos o lives programados.",
      active: true
    },
    {
      id: 3,
      title: "Comentarios e Interacciones",
      content: "Recibe un resumen de las interacciones recibidas de tus videos, productos o lives publicados.",
      active: true
    },
    {
      id: 4,
      title: "Ventas registradas",
      content: "Recibe una alerta por cada venta registrada en tus productos.",
      active: false
    },
    {
      id: 5,
      title: "Cuenta regresiva: Live",
      content: "Activa las notificaciones para recibir recordatorios cuando el live esté próximo a iniciar.",
      active: false
    },
  ];

  const pagos = [
    {
      id: 1,
      date: "04 de Ene de 2022",
      purchase: "Compra N° 111116",
      cost: "PEN 20"
    },
    {
      id: 2,
      date: "04 de Dic de 2021",
      purchase: "Compra N° 111115",
      cost: "PEN 20"
    },
    {
      id: 3,
      date: "04 de Nov de 2021",
      purchase: "Compra N° 111114",
      cost: "PEN 20"
    },
    {
      id: 4,
      date: "04 de Oct de 2021",
      purchase: "Compra N° 111113",
      cost: "PEN 20"
    },
    {
      id: 5,
      date: "04 de Set de 2021",
      purchase: "Compra N° 111112",
      cost: "PEN 20"
    },
    {
      id: 6,
      date: "04 de Ago de 2021",
      purchase: "Compra N° 111111",
      cost: "PEN 20"
    },
  ];

  const tarjetas = [
    {
      id: 1,
      tipo: "Visa",
      numero: "••••••189"
    },
    {
      id: 2,
      tipo: "Visa",
      numero: "••••••246"
    },
    {
      id: 3,
      tipo: "Mastercard",
      numero: "••••••765"
    }
  ];

  const contraseña = (
    <>
      <div className="row">
        <div className="col configuration-subtitle zencluBold">
          Cambiar contraseña
        </div>
      </div>
      <div className="row mt-3 mb-5">
        <div className="col configuration-text zencluMedium">
          Puedes cambiar tu contraseña cuando lo necesites. Para una mayor
          seguridad, te recomendamos que esté compuesta de letras, números y
          signos. De preferencia no utilices tu nombre ni usuario.
        </div>
      </div>
      <div className="row mt-4">
        <div className="col configuration-subtext zencluBold">
          Contraseña actual
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <input
            type="password"
            className="configuration-input"
            placeholder="Escribe tu contraseña actual"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col configuration-subtext zencluBold">
          Nueva contraseña
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <input
            type="password"
            className="configuration-input"
            placeholder="Escribe tu nueva contraseña"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col configuration-subtext zencluBold">
          Confirma tu nueva contraseña
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <input
            type="password"
            className="configuration-input"
            placeholder="Confirma tu nueva contraseña"
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <Button className="text-center configuration-button greencolor">
            Guardar cambios
          </Button>
        </div>
      </div>
    </>
  );

  const notificaciones = (
    <>
      <div className="row">
        <div className="col configuration-subtitle zencluBold">
          Notificaciones
        </div>
      </div>
      <div className="row mt-3 mb-5">
        <div className="col configuration-text zencluMedium">
          No te pierdas de ninguna novedad. Activa las notificaciones
          pertinentes para estar al tanto de los movimientos dentro de tu cuenta
          y contenido, así como de tus suscripciones.
        </div>
        <div className="col-md-1"></div>
      </div>
      {notifications.map((notification, i) => {
        return(
          <div key={notification.id}>
            <div className="row mt-4">
              <div className="col">
                <div className="row">
                  <div className="col my-auto configuration-subtitle zencluBold">
                    {notification.title}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col configuration-text zencluMedium">
                    {notification.content}
                  </div>
                </div>
              </div>
              <div className="col-md-1 my-auto">
                <Form.Check 
                  type="switch"
                  defaultChecked={notification.active}
                  className="configuration-switch"
                  id={notification.id}
                />
              </div>
            </div>
            <div className="row mt-2">
            </div>
            {notifications.length === i + 1 ? (<></>) : (<div className="navbar-division"></div>)}
          </div>
        );
      })}
      <div className="configuration-connectAccounts">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col configuration-subtitle zencluBold">Conecta tus cuentas</div>
            </div>
            <div className="row">
              <div className="col configuration-text zencluMedium">Conecta tu correo electrónico para no perderte de ninguna notificación.</div>
            </div>
          </div>
          <div className="col-md-1 text-end my-auto">
            <img src={Arrow} alt="arrow" width={"20px"}/>
          </div>
        </div>
      </div>
    </>
  );

  const tusPagos = (
    <>
    <div className="row">
      <div className="col configuration-subtitle zencluBold">Tus pagos</div>
    </div>
    <div className="row mt-3 mb-5">
      <div className="col configuration-text zencluMedium">Encuentra tus comprobantes de pago aquí.</div>
    </div>
    {pagos.map((pago, i) => {
      return(
        <div key={i}>
          <div className="row mt-4">
            <div className="col-md-2 configuration-text zencluMedium">{pago.date}</div>
            <div className="col">
              <div className="row"><div className="col configuration-subtitle zencluBold">{pago.purchase}</div></div>
              <div className="row"><div className="col configuration-text zencluMedium">{pago.cost}</div></div>
            </div>
            <div className="col-md-1 my-auto">
              <img src={Download} alt="descargar" width={"60px"}/>
            </div>
          </div>
          <div className="navbar-division mt-4"></div>
        </div>
      );
    })}
    </>
  );

  const metodosDePago = (
    <>
    <div className="row">
      <div className="col configuration-subtitle zencluBold">Métodos de pago</div>
    </div>
    <div className="row mt-3 mb-5">
      <div className="col configuration-text zencluMedium">Aquí encontrarás tus tarjetas de débito/crédito afiliadas.</div>
    </div>
    <div className="row mt-4">
      <div className="col configuration-subtitle zencluMedium">Mis tarjetas guardadas</div>
    </div>
    {tarjetas.map((tarjeta) => {
      return(
        <div className="row mt-4" key={tarjeta.id}>
          <div className="col-md-4 configuration-card ms-2">
            <div className="row">
              <div className="col-md-5 my-auto">
                {tarjeta.tipo === "Visa" ? 
                <img src={VisaImage} alt="Visa" height={"25px"}/> : 
                <img src={MastercardImage} alt="Mastercard" height={"45px"}/>}
              </div>
              <div className="col my-auto configuration-subtitle zencluMedium">{tarjeta.numero}</div>
            </div>
          </div>
          <div className="col-md-1 my-auto ps-5">
            <img src={Garbage} alt="Eliminar" height={"30px"}/>
          </div>
        </div>
      );
    })}
    <div className="row mt-5">
      <div className="col-md-1 configuration-agregarMetodo">
        <img src={Add} alt="Agregar" height={"50px"}/>
      </div>
      <div className="col configuration-subtitle zencluMedium my-auto">Agrega un nuevo método de pago</div>
    </div>
    </>
  );

  const pantalla = () => {
    if(selected === 1)
      return contraseña;
    if(selected === 2)
      return notificaciones;
    if(selected === 3)
      return tusPagos;
    if(selected === 4)
      return metodosDePago;
  }

  return (
    <>
      <NavbarZ />
      <HeaderTitle image={configurationIcon} title="Configuración" />
      <div className="pageContainer">
        <div className="row">
          <div className="col">
            <div className="pb-5 pt-3">
              <TabSelector tabs={tabs} haveImage={false} padding={"15%"} selected={selected} setSelected={setSelected}/>
            </div>
          </div>
        </div>
        {pantalla()}
      </div>
      <Footer />
    </>
  );
}

export default Configuration;
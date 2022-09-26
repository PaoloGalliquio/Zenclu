import "./NavbarZ.css"
import { useState } from 'react';
import closeIcon from "../../../assets/Iconos/NavBar/MessageIcons/Recurso 24.png";
import editIcon from "../../../assets/Iconos/NavBar/MessageIcons/Recurso 23.png";
import backIcon from "../../../assets/Iconos/NavBar/MessageIcons/Recurso 25.png";
import image1 from "../../../assets/fotos/Recurso 43.png";
import image2 from "../../../assets/fotos/Recurso 44.png";
import image3 from "../../../assets/fotos/Recurso 45.png"; 

const Messages = () => {
  const chatImgWidth = "50px";
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState({
    id: 0,
    name: '',
    message: '',
    image: '',
    online: false,
    numberMessages: 0
  });

  const chatsInfo = [
    {
      id: 0,
      name: 'Tamara Dueñas',
      message: 'Tú: El contenido está disponible...',
      image: image1,
      online: true,
      numberMessages: 1,
      lastConnection: '17:55'
    },
    {
      id: 1,
      name: 'Ricardo Mosquera',
      message: 'Bien, lo usual en esta época del año...',
      image: image2,
      online: true,
      numberMessages: 3,
      lastConnection: '17:55'
    },
    {
      id: 2,
      name: 'Anna Hassinger',
      message: 'Anna te ha enviado un archivo',
      image: image3,
      online: false,
      lastConnection: '17:55'
    },
    {
      id: 3,
      name: 'Manuel Villegas',
      message: 'Tú: He visto uno de tus videos y me...',
      image: image1,
      online: false,
      lastConnection: '17:55'
    },
    {
      id: 4,
      name: 'Patricio Reina',
      message: 'Tú: Lo compré en una tienda de la parte...',
      image: image2,
      online: true,
      lastConnection: '17:55'
    },
    {
      id: 5,
      name: 'Karla Madueño',
      message: 'Excelente. Me encanta!',
      image: image3,
      online: false,
      lastConnection: '17:55'
    }
  ];

  const chatMessages = [
    {
      id: 0,
      text: "Hola! He visto tu perfil y me encanta. Tienes contenido de video?",
      isMine: false
    },
    {
      id: 1,
      text: "El contenido está disponible, pero solo para los suscriptores...",
      isMine: true
    },
    {
      id: 2,
      text: "Oh perfecto, me haré suscriptora ya mismo!",
      isMine: false
    },
    {
      id: 3,
      text: "Los video te van a encantar. He trarado de acabar todo el tema de una manera recontra didáctica...",
      isMine: true,
      notLast: true
    },
    {
      id: 4,
      text: "Están súper bien hechos!",
      isMine: true
    }
  ];

  const cabeceraChats = (
    <>
    <div className="row text-center">
      <div className="col">
        <h5 className="zencluBold">Chats</h5>
        <img src={closeIcon} alt="Cerrar" width={"25px"} className="navbar-message-close"/>
      </div>
    </div>
    <div className="row ms-1">
      <div className="col">
        <img src={editIcon} alt="Editar" width={"25px"}/>
      </div>
    </div>
    <div className="row mb-3 mt-3">
      <div className="col w-100">
        <input type="text" placeholder="Buscar..." className="navbar-messages-input w-100"/>
      </div>
    </div>
    <div className="row mb-3">
      <div className="col-md-6 text-center zencluBold">Todos</div>
      <div className="col-md-6 text-center zencluBold">En línea</div>
    </div>
    <div className="navbar-division"></div>
    <div className="navbar-message-triangle"></div>
    </>
  );

  const chats = (
    <>
    {chatsInfo.map(chat => {
      return(
        <div className="row mb-3" key={chat.id}>
          <div className="col-md-2">
            <img src={chat.image} alt={chat.name} width={chatImgWidth}/>
          </div>
          <div className="col-md-10 my-auto ps-4 zencluPointer" onClick={() => {setIsChatOpen(true);setSelectedChat(chat)}}>
            {chat.numberMessages ? <p className="navbar-messages-number">{chat.numberMessages}</p> : <></>}
            <div className="row zencluBold">
              {chat.online ? 
                <>
                  <div className="col p-0 position-relative">
                    <span className="navbar-messages-online"></span>
                    <span className="navbar-messages-online-name">{chat.name}</span>
                  </div>
                </>
                : 
                <div className="col p-0">{chat.name}</div>
              }
            </div>
            <div className="row">
              <div className="col p-0">{chat.message}</div>
            </div>
          </div>
        </div>
      )
    })}
    </>
  );

  const cabeceraChat = (
    <>
    <div className="row">
      <div className="col-md-2 ps-3 my-auto text-center">
        <img src={backIcon} alt="Retroceder" className="zencluPointer navbar-profile-image" width={"15 px"} onClick={() => {setIsChatOpen(false);}}/>
      </div>
      <div className="col-md-2 ps-0">
        <img src={selectedChat.image} alt={selectedChat.name} width={chatImgWidth}/>
      </div>
      <div className="col-md-8 ps-3 my-auto">
        <div className="row">
          <div className="col p-0 zencluBold">{selectedChat.name}</div>
        </div>
        <div className="row">
          <div className="col p-0 zencluMuted">Última conexión a las {selectedChat.lastConnection}</div>
        </div>
        <img src={closeIcon} alt="Cerrar" width={"25px"} className="navbar-message-close"/>
      </div>
    </div>
    <div className="row mb-3 mt-3">
      <div className="col w-100">
        <input type="text" placeholder="Buscar en este chat..." className="navbar-messages-input w-100"/>
      </div>
    </div>
    <div className="navbar-division"></div>
    </>
  );

  const chat = (
    <div className="pb-3">
    {chatMessages.map(message => {
      return(
        <div className="row ps-3 pe-3" key={message.id}>
          {message.isMine && <div className="col-md-4"></div>}
          <div className={`col-md-8 navbar-message-message 
            ${message.notLast ? 
              message.isMine ? "sendedMessageNotLast" : "recivedMessageNotLast" 
              : 
              message.isMine ? "sendedMessage" : "recivedMessage" 
            }`}>
            {message.text}
          </div>
        </div>
      );
    })}
    </div>
  );

  return(
    <div className="navbar-messages-background zencluCursor fadeIn fast">
      <div className="navbar-triangle"></div>
      {!isChatOpen && <>
      {cabeceraChats}
      {chats}
      </>}
      {isChatOpen && <>
      {cabeceraChat}
      {chat}
      </>}
    </div>
  );
}

export default Messages;
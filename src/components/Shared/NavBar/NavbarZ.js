import "./NavbarZ.css"
import { useState } from 'react';
import { Navbar, Nav, FormControl, Form } from "react-bootstrap";
import Messages from "./Messages";
import Bell from "./Bell";
import Add from "./Add";
import Profile from "./Profile";
import image1 from "../../../assets/Iconos/Recurso 32.png";
import image2 from "../../../assets/Iconos/Recurso 41.png";

import image3 from "../../../assets/Iconos/NavBar/NavBarIcons/Recurso 1.png";
import image4 from "../../../assets/Iconos/NavBar/NavBarIcons/Recurso 2.png";
import image5 from "../../../assets/Iconos/NavBar/NavBarIcons/Recurso 3.png";
import image6 from "../../../assets/Iconos/NavBar/NavBarIcons/Recurso 4.png";
import image7 from "../../../assets/Iconos/NavBar/NavBarIcons/Recurso 5.png";

const NavbarZ = () => {
  const iconSize = "40";
  const bigIconSize = "60";
  const [showModal, setShowModal] = useState(0);

  const handleClose = () => {
    setShowModal(0);
  }

  const handleClick = (num) => {
    if(num === showModal)
      setShowModal(0);
    else
      setShowModal(num);
  }

  return (
    <>
    <Navbar bg="dark" variant="dark" className="p-3 navbarheiht w-100 m-0" onClick={() => {handleClose()}}>
      <Navbar.Brand href="/Home">
        <img src={image1} height="48" alt="Zenclu" className="d-inline-block align-top ms-3"/>
      </Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <div className="icon-notification">
            <Form className="d-inline-block">
              <a href="/Topic">
                <FormControl
                  type="search"
                  placeholder="Buscar"
                  className="ms-3 me-5 p-2 pe-5 navbar-search"
                  aria-label="Search"
                  size="lg"
                />
              </a>
            </Form>
            <img src={image2} height="22" alt="search" className="search-icon"/>
          </div>
        </Nav>
        <Nav onClick={e => {e.stopPropagation();}}>
          <div className="nav-link">
            <div className="icon-notification">
              <img src={image3} width={iconSize} height={iconSize} alt="Messages" className="d-inline-block align-top ms-1 mf-1 zencluPointer" 
                onClick={() => {handleClick(1);}}
              />
              {(showModal === 1) && <Messages/>}
              <h6 className="dot-notification">1</h6>
            </div>
          </div>
          <div className="nav-link">
            <img src={image4} width={iconSize} height={iconSize} alt="Add" className="d-inline-block align-top ms-1 mf-1 zencluPointer"
              onClick={() => {handleClick(2);}}
            />
            {(showModal === 2) && <Add/>}
          </div>
          <div className="nav-link">
            <img src={image5} width={iconSize} height={iconSize} alt="Bell" className="d-inline-block align-top ms-1 mf-1 zencluPointer" 
              onClick={() => {handleClick(3);}}
            />
            {(showModal === 3) && <Bell/>}
          </div>
          <div className="nav-link">
            <div className="icon-notification">
              <h4 className="text-center icon-subtext">200</h4>
              <a href="/Zwallet">
                <img src={image6} width={iconSize} height={iconSize} alt="Zwallet" className="d-inline-block align-top ms-1 mf-1 zencluPointer" />
              </a>
            </div>
          </div>
          <div className="nav-link">
            <div className="icon-notification">
              <img src={image7} width={bigIconSize} height={bigIconSize} alt="Profile" className="d-inline-block align-top ms-1 mf-1 zencluPointer"
                onClick={() => {handleClick(4);}}
              />
              <h6 className="dot-notification">1</h6>
              {(showModal === 4) && <Profile/>}
            </div>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
};

export default NavbarZ;
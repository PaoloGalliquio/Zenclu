import { Navbar, Nav, Container, FormControl, Form, Button } from "react-bootstrap";
import "../App.css"


const NavbarZ = () => {
  const iconSize = "40";
  const bigIconSize = "60";
  return (
    <>
      <Navbar bg="dark" variant="dark" className="p-3 navbarheiht">
          <Navbar.Brand href="#home">
            <img
              src={require("../assets/Iconos/Recurso\ 32.png")}
              height="48"
              className="d-inline-block align-top ms-3"
            />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <div className="icon-notification">
                <Form className="d-inline-block">
                  <FormControl
                    type="search"
                    placeholder="Buscar"
                    className="ms-3 me-5 p-2 pe-5"
                    aria-label="Search"
                    size="lg"
                  />
                </Form>
                <img
                  src={require("../assets/Iconos/Recurso\ 41.png")}
                  height="22"
                  className="search-icon"
                />
              </div>
            </Nav>
            <Nav>
              <Nav.Link href="#">
                <div className="icon-notification">
                  <img
                    src={require("../assets/Iconos/Recurso\ 36.png")}
                    width={iconSize}
                    height={iconSize}
                    className="d-inline-block align-top ms-1 mf-1"
                  />
                  <h6 className="dot-notification text-center">1</h6>
                </div>
              </Nav.Link>
              <Nav.Link href="#">
                <img
                  src={require("../assets/Iconos/Recurso\ 37.png")}
                  width={iconSize}
                  height={iconSize}
                  className="d-inline-block align-top ms-1 mf-1"
                />
              </Nav.Link>
              <Nav.Link href="#">
                <img
                  src={require("../assets/Iconos/Recurso\ 38.png")}
                  width={iconSize}
                  height={iconSize}
                  className="d-inline-block align-top ms-1 mf-1"
                />
              </Nav.Link>
              <Nav.Link href="#">
                <div className="icon-notification">
                  <h4 className="text-center icon-subtext">200</h4>
                  <img
                    src={require("../assets/Iconos/Recurso\ 40.png")}
                    width={iconSize}
                    height={iconSize}
                    className="d-inline-block align-top ms-1 mf-1"
                  />
                </div>
              </Nav.Link>
              <Nav.Link href="#">
                <div className="icon-notification">
                  <img
                    src={require("../assets/Iconos/Recurso\ 39.png")}
                    width={bigIconSize}
                    height={bigIconSize}
                    className="d-inline-block align-top ms-1 mf-1"
                  />
                  <h6 className="dot-notification text-center">1</h6>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarZ;
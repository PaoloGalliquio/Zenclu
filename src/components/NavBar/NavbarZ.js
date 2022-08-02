import "./NavbarZ.css"
import { Navbar, Nav, Container, FormControl, Form, Button } from "react-bootstrap";
import image1 from "../../assets/Iconos/Recurso 32.png";
import image2 from "../../assets/Iconos/Recurso 41.png";
import image3 from "../../assets/Iconos/Recurso 36.png";
import image4 from "../../assets/Iconos/Recurso 37.png";
import image5 from "../../assets/Iconos/Recurso 38.png";
import image6 from "../../assets/Iconos/Recurso 40.png";
import image7 from "../../assets/Iconos/Recurso 39.png";

const NavbarZ = () => {
  const iconSize = "40";
  const bigIconSize = "60";
  return (
    <>
      <Navbar bg="dark" variant="dark" className="p-3 navbarheiht w-100 m-0">
          <Navbar.Brand href="/">
            <img
              src={image1}
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
                    className="ms-3 me-5 p-2 pe-5 navbar-search"
                    aria-label="Search"
                    size="lg"
                  />
                </Form>
                <img
                  src={image2}
                  height="22"
                  className="search-icon"
                />
              </div>
            </Nav>
            <Nav>
              <Nav.Link href="#">
                <div className="icon-notification">
                  <img
                    src={image3}
                    width={iconSize}
                    height={iconSize}
                    className="d-inline-block align-top ms-1 mf-1"
                  />
                  <h6 className="dot-notification">1</h6>
                </div>
              </Nav.Link>
              <Nav.Link href="#">
                <img
                  src={image4}
                  width={iconSize}
                  height={iconSize}
                  className="d-inline-block align-top ms-1 mf-1"
                />
              </Nav.Link>
              <Nav.Link href="#">
                <img
                  src={image5}
                  width={iconSize}
                  height={iconSize}
                  className="d-inline-block align-top ms-1 mf-1"
                />
              </Nav.Link>
              <Nav.Link href="/Zwallet">
                <div className="icon-notification">
                  <h4 className="text-center icon-subtext">200</h4>
                  <img
                    src={image6}
                    width={iconSize}
                    height={iconSize}
                    className="d-inline-block align-top ms-1 mf-1"
                  />
                </div>
              </Nav.Link>
              <Nav.Link href="#">
                <div className="icon-notification">
                  <img
                    src={image7}
                    width={bigIconSize}
                    height={bigIconSize}
                    className="d-inline-block align-top ms-1 mf-1"
                  />
                  <h6 className="dot-notification">1</h6>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarZ;
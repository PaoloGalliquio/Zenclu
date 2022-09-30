import Logo from "../../../assets/Iconos/Recurso 32.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-background">
      <img src={Logo} className="header-image" alt="Logo Zenclu" />
    </div>
  );
};

export default Header;

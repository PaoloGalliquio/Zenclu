import "./Product.css";

import Footer from "../../components/Shared/Footer/Footer";
import NavbarZ from "../../components/Shared/NavBar/NavbarZ";

import creatorPhoto from "../../assets/fotos/Store/Recurso 50.png";
import productPhoto from "../../assets/fotos/Store/Recurso 1.png";
import exportIcon from "../../assets/Iconos/Modals/Recurso23.svg";

const Product = () => {
  const content = (
    <div className="row ms-0 me-0 mt-5 mb-5" style={{paddingRight: "15%", paddingLeft: "15%"}}>
      <div className="col-md-5 position-relative text-center">
        <img src={productPhoto} alt="" className="product-principalImage"/>
        <img src={productPhoto} alt="" className="product-miniatureImage"/>
        <img src={productPhoto} alt="" className="product-miniatureImage"/>
        <img src={productPhoto} alt="" className="product-miniatureImage"/>
        <img src={productPhoto} alt="" className="product-miniatureImage product-end"/>
      </div>
      <div className="col-md-7 position-relative ps-4">
        <div className="product-title zencluMedium">
          Nombre del producto
          <img src={exportIcon} alt="export" width={"20px"} className="ms-4 zencluPointer"/>
        </div>
        <div className="zencluMedium">Categoría</div>
        <div className="mt-3">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        </div>
        <div className="product-price mt-3 zencluMedium text-end">S/ 00,00</div>
        <div className="product-visualizations mt-5 zencluMedium">274 VISUALIZACIONES</div>
        <div className="product-sold mt-2 zencluMedium">84 VENDIDOS</div>
        <div className="product-subTitle mt-5 zencluMedium">Información de creador</div>
        <div className="product-creator mt-3 zencluMedium">
          <div className="row">
            <div className="col-md-1">
              <img src={creatorPhoto} alt="creador" width={"45.8px"} className="me-2"/>
            </div>
            <div className="col">
              <div>Zendex Arts</div>
              <div>Nivel</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return(
    <>
    <NavbarZ />
    {content}
    <Footer />
    </>
  );
}

export default Product;
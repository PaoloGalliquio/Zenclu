import "./Store.css"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import NavbarZ from "../../components/Shared/NavBar/NavbarZ";
import Footer from '../../components/Shared/Footer/Footer';
import Product from '../../components/Shared/Cards/Product';
import StoreIcon from "../../assets/Iconos/Store/Recurso 14.png";
import CartIcon from "../../assets/Iconos/Store/Recurso 1.png";
import HeaderTitle from "../../components/Shared/HeaderTitle/HeaderTitle";
import rowImageL from '../../assets/Iconos/Recurso 54.png';
import rowImageR from '../../assets/Iconos/Recurso 53.png';

import tendencyProduct1 from '../../assets/fotos/Store/Recurso 48.png';
import tendencyProduct2 from '../../assets/fotos/Store/Recurso 47.png';
import tendencyProduct3 from '../../assets/fotos/Store/Recurso 45.png';
import tendencyProduct4 from '../../assets/fotos/Store/Recurso 46.png';

import product1 from '../../assets/fotos/Store/Recurso 72.png';
import product2 from '../../assets/fotos/Store/Recurso 71.png';
import product3 from '../../assets/fotos/Store/Recurso 69.png';
import product4 from '../../assets/fotos/Store/Recurso 70.png';

import creatorPhoto1 from '../../assets/fotos/Store/Recurso 52.png';
import creatorPhoto2 from '../../assets/fotos/Store/Recurso 50.png';
import creatorPhoto3 from '../../assets/fotos/Store/Recurso 49.png';
import creatorPhoto4 from '../../assets/fotos/Store/Recurso 50.png'; 

const Store = () => {
  const shoppingCartSize = "150px";
  const productosTendencia = [
    {
      id: 0,
      photo: tendencyProduct1,
      title: 'Zapatillas Adidas con ilustración a mano',
      sellerName: 'PopHopTop',
      sellerPhoto: creatorPhoto1,
      priceDiscount: 'S/299,90',
      price: 'S/399,90',
    },
    {
      id: 1,
      photo: tendencyProduct2,
      title: 'Hoodie Mondrea por Zendex',
      sellerName: 'Zendex Arts',
      sellerPhoto: creatorPhoto2,
      priceDiscount: 'S/199,90',
      price: 'S/249,90',
    },
    {
      id: 2,
      photo: tendencyProduct3,
      title: 'Lampara de concreto por inConcrete',
      sellerName: 'inConcrete',
      sellerPhoto: creatorPhoto3,
      priceDiscount: 'S/79,90',
      price: 'S/129,90',
    },
    {
      id: 3,
      photo: tendencyProduct4,
      title: 'Hoodie signature por Zendex',
      sellerName: 'Zendex Arts',
      sellerPhoto: creatorPhoto4,
      priceDiscount: 'S/199,90',
      price: 'S/249,90',
    },
  ];

  const productos = [
    {
      id: 0,
      photo: product1,
      title: 'Cool Besar mug',
      sellerName: 'PopHopTop',
      sellerPhoto: creatorPhoto1,
      priceDiscount: 'S/ 299,90',
      price: 'S/ 399,00'
    },
    {
      id: 1,
      photo: product2,
      title: 'Yoga Pants',
      sellerName: 'Zendex Arts',
      sellerPhoto: creatorPhoto2,
      priceDiscount: 'S/ 199,90',
      price: 'S/ 249,00'
    },
    {
      id: 2,
      photo: product3,
      title: 'Pop Sugar Headphones',
      sellerName: 'inConcrete',
      sellerPhoto: creatorPhoto3,
      priceDiscount: 'S/ 79,90',
      price: 'S/ 129,00'
    },
    {
      id: 3,
      photo: product4,
      title: 'Gráffika Colour Book ',
      sellerName: 'Zendex Arts',
      sellerPhoto: creatorPhoto4,
      priceDiscount: 'S/ 199,90',
      price: 'S/ 249,90'
    }
  ];

  const tendenciaPantalla = (
    <>
    <div className="store-tendencia pb-5">
      <img src={CartIcon} alt="Carrito de compras" className="store-shopping-cart" width={shoppingCartSize}/>
      <div className="store-number-products">2</div>
      <div className="row ms-0 me-0 store-title">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <h4 className="zencluBold ps-3">Es tendencia</h4>
        </div>
      </div>
      <div className="row ms-0 me-0">
        <div className="col-md-1 my-auto text-center zencluPointer">
          <img src={rowImageL} className="newuser-rowImage" alt="izquierda"/>
        </div>
        <div className="col-md-10">
          <div className="row">
            {productosTendencia.map(productoTendencia => {
              return(
                <Product
                  id = {productoTendencia.id}
                  photo = {productoTendencia.photo}
                  title = {productoTendencia.title}
                  sellerName = {productoTendencia.sellerName}
                  sellerPhoto = {productoTendencia.sellerPhoto}
                  priceDiscount = {productoTendencia.priceDiscount}
                  price = {productoTendencia.price}
                />
              );
            })}
          </div>
        </div>
        <div className="col-md-1 my-auto text-center zencluPointer">
          <img src={rowImageR} className="newuser-rowImage" alt="derecha"/>
        </div>
      </div>
    </div>
    </>
  );

  const productosPantalla = (
    <>
    <div className="strore-productos mb-4">
      <div className="row ms-0 me-0 store-title mb-4">
        <div className="col-md-1"></div>
        <div className="col-md-1 my-auto">
          <h4 className="zencluBold ps-3">Productos</h4>
        </div>
        <div className="col-md-6 my-auto ps-5">
          <button className="btn pt-2 pb-2 ps-5 store-categorias-dropdown" type="button">
            <b>Todas las categorías</b>
            <ArrowBackIosNewIcon className="store-drowdown-icon"/>
          </button>
        </div>
        <div className="col-md-3 my-auto text-end">
          <button className="btn pt-2 pb-2 ps-5 store-precio-dropdown" type="button">
            <b>Precio más bajo</b>
            <ArrowBackIosNewIcon className="store-drowdown-icon"/>
          </button>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row ms-0 me-0">
        <div className="col-md-1 my-auto text-center zencluPointer"></div>
        <div className="col-md-10">
          <div className="row">
            {productos.map(producto => {
              return(
                <Product
                  id = {producto.id}
                  photo = {producto.photo}
                  title = {producto.title}
                  sellerName = {producto.sellerName}
                  sellerPhoto = {producto.sellerPhoto}
                  priceDiscount = {producto.priceDiscount}
                  price = {producto.price}
                />
              );
            })}
          </div>
        </div>
        <div className="col-md-1 my-auto text-center zencluPointer"></div>
      </div>
    </div>
    </>
  );

  return(
    <>
    <NavbarZ />
    <HeaderTitle 
      image = {StoreIcon}
      title = "Tienda"
    />
    {tendenciaPantalla}
    {productosPantalla}
    <Footer />
    </>
  )
}

export default Store
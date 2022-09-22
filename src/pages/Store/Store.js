import "./Store.css"
import NavbarZ from "../../components/Shared/NavBar/NavbarZ";
import Footer from '../../components/Shared/Footer/Footer';
import StoreIcon from "../../assets/Iconos/Store/Recurso 14.png";
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
    <div className="strore-tendencia">
      <div className="row ms-0 me-0 store-title">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <h4 className="zencluBold ps-3">Es tendencia</h4>
        </div>
      </div>
      <div className="row ms-0 me-0">
        <div className="col-md-1 my-auto text-center zencluPointer">
          <img src={rowImageL} className="newuser-rowImage"/>
        </div>
        <div className="col-md-10">
          <div className="row">
            {productosTendencia.map(productoTendencia => {
              return(
                <div className="col d-flex mb-3 align-items-stretch">
                  <div className="card flex-fill">
                    <img src={productoTendencia.photo} className="card-img-top p-1 rounded-3" alt={productoTendencia.name} />
                    <div className="card-body p-1  d-flex flex-column ">
                      <div className="row">
                        <div className="col-3 text-center">
                          <img src={productoTendencia.sellerPhoto} className=" img rounded-circle "
                            style={{width:"35px", height:"35px"}} alt={productoTendencia.sellerName}/>
                        </div>
                        <div className="col-9 ">
                          <h6 className="card-title m-0 ">{productoTendencia.title}</h6>
                          <p className="card-text m-0"
                            style={{fontSize: "13px", color: "rgb(157, 157, 157)", fontWeight: "500"}}>
                            {productoTendencia.sellerName}
                          </p>
                          <p><b> {productoTendencia.priceDiscount} &nbsp;</b> 
                          <span className="text-decoration-line-through">
                            {productoTendencia.price}
                          </span>
                          </p>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <div className="d-grid gap-1 mb-2">
                          <button className="btn " style={{backgroundColor: "rgb(133, 221, 149)"}}> <b> Agregar
                              al carrito </b> </button>
                        </div>
                        <div className="d-grid gap-1">
                          <button className="btn text-white" style={{backgroundColor: "rgb(54, 178, 114)"}}> COMPRAR
                            AHORA</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-md-1 my-auto text-center zencluPointer">
          <img src={rowImageR} className="newuser-rowImage"/>
        </div>
      </div>
    </div>
    </>
  );

  const productosPantalla = (
    <>
    <div className="strore-productos">
      <div className="row ms-0 me-0 store-title mb-4">
        <div className="col-md-1"></div>
        <div className="col-md-1 my-auto">
          <h4 className="zencluBold ps-3">Productos</h4>
        </div>
        <div className="col-md-7 my-auto ps-5">
          <button className="btn dropdown-toggle p-3 ps-5 pe-5" style={{backgroundColor: "rgba(181, 226, 245, 0.775)"}} type="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            <b>Todas las categorías</b>
          </button>
        </div>
        <div className="col-md-2 my-auto text-end">
          <button className="btn dropdown-toggle p-3 ps-5 pe-5" style={{backgroundColor: "rgba(223, 223, 223, 0.775)"}}
            type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <b>Precio más bajo</b>
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
                <div className="col d-flex mb-3 align-items-stretch">
                  <div className="card flex-fill">
                    <img src={producto.photo} className="card-img-top p-1 rounded-3" alt={producto.name} />
                    <div className="card-body p-1  d-flex flex-column ">
                      <div className="row">
                        <div className="col-3 text-center">
                          <img src={producto.sellerPhoto} className=" img rounded-circle "
                            style={{width:"35px", height:"35px"}} alt={producto.sellerName}/>
                        </div>
                        <div className="col-9 ">
                          <h6 className="card-title m-0 ">{producto.title}</h6>
                          <p className="card-text m-0"
                            style={{fontSize: "13px", color: "rgb(157, 157, 157)", fontWeight: "500"}}>
                            {producto.sellerName}
                          </p>
                          <p><b> {producto.priceDiscount} &nbsp;</b> 
                          <span className="text-decoration-line-through">
                            {producto.price}
                          </span>
                          </p>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <div className="d-grid gap-1 mb-2">
                          <button className="btn " style={{backgroundColor: "rgb(133, 221, 149)"}}> <b> Agregar
                              al carrito </b> </button>
                        </div>
                        <div className="d-grid gap-1">
                          <button className="btn text-white" style={{backgroundColor: "rgb(54, 178, 114)"}}> COMPRAR
                            AHORA</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
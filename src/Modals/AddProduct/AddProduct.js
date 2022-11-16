import "./AddProduct.css"
import { useState } from "react";

import uploadHandIcon from "../../assets/Iconos/Modals/Recurso10.svg";
import closeIcon from "../../assets/Iconos/Modals/Recurso15.svg";
import uploadIcon from "../../assets/Iconos/Modals/Recurso14.svg";
import creatorPhoto from "../../assets/fotos/Store/Recurso 50.png";
import productPhoto from "../../assets/fotos/Store/Recurso 1.png";
import arrow from "../../assets/Iconos/ArrowCarouselDark.svg";

const AddProduct = (props) => {
  const [selected, setSelected] = useState(0);
  
  const pantalla = () => {
    if(selected === 0)
      return uploadVideo;
    if(selected === 1)
      return publishProduct;
  }

  const uploadMinuature = (
    <>
    <label className="addProduct-uploadMiniature zencluPointer text-center me-2" htmlFor="uploadImage">
      <img src={uploadIcon} alt="Subir imagen" width={"18px"}/>
      <div>Subir imagen</div>
    </label>
    <input type="file" id="uploadImage" style={{display: "none"}}/>
    </>
  );

  const uploadVideo = (
    <>
    <div className="row">
      <div className="col-md-12 addProduct-title position-relative">
        <img src={uploadHandIcon} alt="Icono de subir" width={"38px"}/>
        <span className="ms-4 zencluMedium">Subir un producto</span>
        <img src={closeIcon} alt="Cerrar" width={"14px"} className="addProduct-close zencluPointer" 
          onClick={() => {props.close(0)}}/>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-md-12">
        {uploadMinuature}
        {uploadMinuature}
        {uploadMinuature}
        {uploadMinuature}
        {uploadMinuature}
      </div>
    </div>
    <div className="row mt-3">
      <div className="col">Elige primero la foto principal de la publicación</div>
    </div>
    <div className="row mt-1">
      <div className="col-md-6">
        <div className="row mt-3">
          <div className="col-md-4">Titulo</div>
          <div className="col-md-8">
            <input className="addProduct-input" type="text" placeholder="Escribe aquí el título"/>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">Precio</div>
          <div className="col-md-8">
            <span className="position-relative">
              <span className="addProduct-money">S/</span>
              <input type="number" className="addProduct-inputMoney"/>
            </span>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">Categoría</div>
          <div className="col-md-8">
            <input className="addProduct-input" type="text" />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row mt-3">
          <div className="col-md-4 text-end">Descripción</div>
          <div className="col-md-8">
            <textarea className="addProduct-largeInput" type="text" />
          </div>
        </div>
      </div>
      <div className="col-md-12 text-center zencluLink mt-4"  onClick={() => {setSelected(1)}}>Siguiente</div>
    </div>
    </>
  );

  const publishProduct = (
    <>
    <div className="row">
      <div className="col-md-12 addProduct-title position-relative">
        <img src={uploadHandIcon} alt="Icono de subir" width={"38px"}/>
        <span className="ms-4 zencluMedium">Subir un producto</span>
        <img src={closeIcon} alt="Cerrar" width={"14px"} className="addProduct-close zencluPointer" 
          onClick={() => {props.close(0)}}/>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-md-5 position-relative">
        <img src={arrow} alt="" height={"20px"} className="addProduct-arrow arrow-Left zencluPointer"/>
        <img src={arrow} alt="" height={"20px"} className="addProduct-arrow arrow-Right zencluPointer"/>
        <img src={productPhoto} alt="" className="addProduct-principalImage"/>
        <img src={productPhoto} alt="" className="addProduct-miniatureImage"/>
        <img src={productPhoto} alt="" className="addProduct-miniatureImage"/>
        <img src={productPhoto} alt="" className="addProduct-miniatureImage"/>
        <img src={productPhoto} alt="" className="addProduct-miniatureImage addProduct-end"/>
      </div>
      <div className="col-md-7 position-relative ps-4">
        <div className="addProduct-subTitle zencluMedium">Título del producto</div>
        <div className="zencluLink addProduct-publishEdit" onClick={() => {setSelected(0)}}>Editar</div>
        <div className="mt-3">Categoría</div>
        <div className="mt-3">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        </div>
        <div className="addProduct-price mt-3 zencluMedium text-end">S/ 00,00</div>
        <div className="addProduct-subTitle mt-3 zencluMedium">Información de creador</div>
        <div className="addProduct-creator mt-3 zencluMedium">
          <img src={creatorPhoto} alt="creador" width={"45.8px"} className="me-2"/> Zendex Arts
        </div>
      </div>
    </div>
    <div className="row mt-4 text-center">
      <div className="addVideo-publicButton mx-auto">
        <a href="/Product">Publicar</a>
      </div>
    </div>
    </>
  );
  
  return(
    <div className="modal-background text-black fadeIn fast">
      <div className="modal-container">
        {pantalla()}
      </div>
    </div>
  );
}

export default AddProduct;
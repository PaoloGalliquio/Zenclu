import "./AddVideo.css";
import { useState } from "react";
import { useEffect } from "react";
import Form from 'react-bootstrap/Form';

import uploadIcon from "../../assets/Iconos/Modals/Recurso14.svg";
import closeIcon from "../../assets/Iconos/Modals/Recurso15.svg";
import arrowIcon from "../../assets/Iconos/Modals/Recurso18.svg";
import greenCircle from "../../assets/Iconos/Modals/Recurso19.svg";
import grayCircle from "../../assets/Iconos/Modals/Recurso20.svg";
import whiteCircle from "../../assets/Iconos/Modals/Recurso21.svg";
import linkIcon from "../../assets/Iconos/Modals/Recurso12.svg";
import copyIcon from "../../assets/Iconos/Modals/Recurso11.svg";
import infoIcon from "../../assets/Iconos/Profile/Recurso 6.svg";
import dropdownArrow from "../../assets/Iconos/Dropdown.svg";
import videoImage from "../../assets/fotos/Live1.png";

const AddVideo = (props) => {
  const [selected, setSelected] = useState(0);
  const [file, setFile] = useState(null);
  const [informacionLink, setInformacionLink] = useState(false);
  const [informacionDocs, setInformacionDocs] = useState(true);
  const [informacionProd, setInformacionProd] = useState(false);
  const [uploadProgress, setUploadProgress] = useState("0%");
  const [etiquetas, setEtiquetas] = useState(["Moda", "Teconología", "Ciencia"]);

  const pantalla = () => {
    if(selected === 0)
      return file ? chargingVideo : uploadVideo;
    if(selected === 1)
      return informationVideo;
    if(selected === 2)
      return elementsVideo;
  }

  const onImageChange = (e) => {
    const [img] = e.target.files;
    setFile(URL.createObjectURL(img));
  }

  const field = (name, content, active) => {
    return <>
    <div className="col-md-4 mt-4 zencluMedium">
      <img src={infoIcon} alt="Información" width={"16px"} className="me-3"/>
      {name}
    </div>
    <div className="col-md-6 mt-4 zencluMedium">
      {content}
    </div>
    <div className="col-md-2 mt-4 text-end my-auto">
      <Form.Check
        type="switch"
        defaultChecked={active}
        className="addVideo-switch"
      />
    </div>
    </>;
  };

  const uploadVideo = (
    <div className="row">
      <div className="col-md-12 addVideo-title position-relative">
        <img src={uploadIcon} alt="Icono de subir" width={"29px"}/>
        <span className="ms-4">Subir un video</span>
        <img src={closeIcon} alt="Cerrar" width={"14px"} className="addVideo-close zencluPointer" onClick={() => {setFile(null); props.close(0)}}/>
      </div>
      <div className="col-md-12 addVideo-dropFile text-center addVideo-uploadVideo-dropFile">
        <label htmlFor="file" className="addVideo-button">
          Seleciona un archivo
        </label>
        <input type="file" id="file" style={{display: "none"}} onChange={onImageChange}  accept="video/*, image/*"/>
        <div className="addVideo-text zencluMedium mt-2">O arrastra y suelta el archivo aquí.</div>
      </div>
      <div className="col-md-12 text-center addVideo-text zencluMedium mt-4 ps-5 pe-5">
        Asegúrate de que el video que subas no infringe los derechos de autor estimados en los Términos y Condiciones de Zenclu.
      </div>
      <div className="col-md-12 text-center zencluLink addVideo-text zencluMedium mt-4">
        <u>Más información</u>
      </div>
    </div>
  );

  const chargingVideo = (
    <div className="row">
      <div className="col-md-12 addVideo-title position-relative text-center">
        <span className="ms-4">Cargando...</span>
        <img src={closeIcon} alt="Cerrar" width={"14px"} className="addVideo-close zencluPointer" onClick={() => {props.close(0)}}/>
      </div>
      <div className="col-md-12 addVideo-dropFile text-center addVideo-chargingVideo-dropFile">
        <img src={file} alt="Imagen de video" className="addVideo-videoImage" onClick={() => {setSelected(1)}}/>
        <div className="addVideo-uploadBarBg">
          <div className="addVideo-percentage" style={{left: uploadProgress}}>{uploadProgress}</div>
          <img src={arrowIcon} alt="Proceso de procentaje" width={"12px"} className="addVideo-arrow" style={{left: uploadProgress}}/>
          <div className="addVideo-uploadBarCharged" style={{width: uploadProgress}}></div>
        </div>
      </div>
      <div className="col-md-12 text-center addVideo-text zencluMedium mt-4 ps-5 pe-5">
        Asegúrate de que el video que subas no infringe los derechos de autor estimados en los Términos y Condiciones de Zenclu.
      </div>
      <div className="col-md-12 text-center zencluLink addVideo-text zencluMedium mt-4">
        <u>Más información</u>
      </div>
    </div>
  );

  const informationVideo = (
    <div className="row">
      <div className="col-md-12 addVideo-title position-relative text-center">
        <span className="ms-4">Información</span>
        <img src={closeIcon} alt="Cerrar" width={"14px"} className="addVideo-close zencluPointer" onClick={() => {props.close(0)}}/>
      </div>
      <div className="col-md-12 text-center mt-2 zencluMedium">
        <img src={greenCircle} alt="Step 1" width={"16px"} className="addVideo-step"/>
        <img src={grayCircle} alt="Step 2" width={"16px"} className="addVideo-step"/>
        <img src={grayCircle} alt="Step 3" width={"16px"} className="addVideo-step"/>
        <img src={grayCircle} alt="Step 4" width={"16px"} className="addVideo-step"/>
        <img src={grayCircle} alt="Step 5" width={"16px"} className="addVideo-step"/>
      </div>
      <div className="col-md-5 mt-4 position-relative zencluMedium">
        <img src={videoImage} alt="Imagen de video subido" width={"100%"} className="mb-3"/>
        <div className="addVideo-url my-auto">
          <img src={linkIcon} alt="Imagen de video subido" width={"18px"} className="me-2"/>
          https://zenclu/VJsxaMqePY8
          <img src={copyIcon} alt="Imagen de video subido" width={"18px"} className="addVideo-copyLink"/>
        </div>
      </div>
      <div className="col-md-7 mt-4 zencluMedium">
        <div>
          <img src={infoIcon} alt="Información" width={"16px"} className="me-3"/>
          Título del video*
        </div>
        <input type="text" className="addVideo-input mt-2"/>
        <div className="mt-3">
          <img src={infoIcon} alt="Información" width={"16px"} className="me-3"/>
          Descripción*
        </div>
        <textarea type="text" className="addVideo-largeInput mt-2" />
      </div>
      <div className="col-md-12 mt-4 zencluMedium">
        <div className="mb-3">
          <img src={infoIcon} alt="Información" width={"16px"} className="me-3"/>
          Vista de miniatura
        </div>
        <div className="my-auto">
          <img src={videoImage} alt="Miniatura de video subido" className="addVideo-miniature"/>
          <img src={videoImage} alt="Miniatura de video subido" className="addVideo-miniature"/>
          <img src={videoImage} alt="Miniatura de video subido" className="addVideo-miniature"/>
          <img src={videoImage} alt="Miniatura de video subido" className="addVideo-miniature"/>
          <label className="addVideo-uploadMiniature zencluPointer text-center" htmlFor="uploadImage">
            <img src={uploadIcon} alt="Subir imagen" width={"18px"} className="mt-3" />
            <div>Subir imagen</div>
          </label>
          <input type="file" id="uploadImage" style={{display: "none"}}/>
        </div>
      </div>
      <div className="col-md-4 mt-4 zencluMedium">
        <img src={infoIcon} alt="Información" width={"16px"} className="me-3"/>
        Lista de reproducción
      </div>
      <div className="col-md-8 mt-4 zencluMedium">
        <select className="addVideo-dropdown"></select>
        <img src={dropdownArrow} alt="Seleccionar" width={"20px"} className="addVideo-dropdownArrow"/>
      </div>
      <div className="col-md-4 mt-4 zencluMedium">
        <img src={infoIcon} alt="Información" width={"16px"} className="me-3"/>
        Recursos
      </div>
      <div className="col-md-4 mt-4">
        <div>
          <label htmlFor="linksDeReferencia">
            {informacionLink ? 
            <img src={greenCircle} width={"20px"} alt="Links de referencia" className="zencluPointer me-2"/> :
            <img src={whiteCircle} width={"20px"} alt="Links de referencia" className="zencluPointer me-2"/> }
          </label>
          <input type="checkbox" style={{display: "none"}} id="linksDeReferencia" onClick={() => {setInformacionLink(!informacionLink)}}/>
          Links de referencia
          <input type="text" className="addVideo-informacionInput"/>
        </div>
        <div>
          <label htmlFor="documentos">
            {informacionDocs ? 
            <img src={greenCircle} width={"20px"} alt="Documentos" className="zencluPointer me-2"/> :
            <img src={whiteCircle} width={"20px"} alt="Documentos" className="zencluPointer me-2"/> }
          </label>
          <input type="checkbox" style={{display: "none"}} id="documentos" onClick={() => {setInformacionDocs(!informacionDocs)}}/>
          Documentos
        </div>
        <div>
          <label htmlFor="productos">
            {informacionProd ? 
            <img src={greenCircle} width={"20px"} alt="Productos" className="zencluPointer me-2"/> :
            <img src={whiteCircle} width={"20px"} alt="Productos" className="zencluPointer me-2"/> }
          </label>
          <input type="checkbox" style={{display: "none"}} id="productos" onClick={() => {setInformacionProd(!informacionProd)}}/>
          Productos
        </div>
      </div>
      <div className="col-md-12 text-center zencluLink mt-4" onClick={() => {setSelected(2)}}>
        Siguiente
      </div>
    </div>
  );

  const elementsVideo = (
    <div className="row">
    <div className="col-md-12 addVideo-title position-relative text-center">
      <span className="ms-4">Elementos del video</span>
      <img src={closeIcon} alt="Cerrar" width={"14px"} className="addVideo-close zencluPointer" onClick={() => {props.close(0)}}/>
    </div>
    <div className="col-md-12 text-center mt-2 zencluMedium">
      <img src={grayCircle} alt="Step 1" width={"16px"} className="addVideo-step"/>
      <img src={greenCircle} alt="Step 2" width={"16px"} className="addVideo-step"/>
      <img src={grayCircle} alt="Step 3" width={"16px"} className="addVideo-step"/>
      <img src={grayCircle} alt="Step 4" width={"16px"} className="addVideo-step"/>
      <img src={grayCircle} alt="Step 5" width={"16px"} className="addVideo-step"/>
    </div>
    <div className="col-md-4 mt-4 zencluMedium">
      <img src={infoIcon} alt="Información" width={"16px"} className="me-3"/>
      Categoría
    </div>
    <div className="col-md-8 mt-4 zencluMedium">
      <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</div>
      <div className="mt-3">
        <select className="addVideo-dropdown">
          <option value="" disabled selected className="addVideo-option">Buscar categoría</option>
        </select>
        <img src={dropdownArrow} alt="Seleccionar" width={"20px"} className="addVideo-dropdownArrow"/>
      </div>
    </div>
    <div className="col-md-4 mt-4 zencluMedium">
      <img src={infoIcon} alt="Información" width={"16px"} className="me-3"/>
      Etiqueta
    </div>
    <div className="col-md-8 mt-4 zencluMedium">
      <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</div>
      <div className="mt-3">
        <select className="addVideo-dropdown" onChange={(e) => {etiquetas.push(e.target.value); e.target.value = 0;}}>
          <option value="0" selected className="addVideo-option">Buscar etiqueta</option>
          <option value="Moda" className="addVideo-option">Moda</option>
          <option value="Tecnología" className="addVideo-option">Tecnología</option>
          <option value="Ciencia" className="addVideo-option">Ciencia</option>
        </select>
        <img src={dropdownArrow} alt="Seleccionar" width={"20px"} className="addVideo-dropdownArrow"/>
      </div>
      <div className="addVideo-tags mt-3">
        {etiquetas.map((etiqueta, index, etiquetas) => {
          return (
            <span key={etiqueta} className="addVideo-tag">
              {etiqueta}{" "}
              <span onClick={() => {etiquetas.splice(index,1);}} className="zencluPointer">x</span>
            </span>
          );
        })}
      </div>
    </div>
      {field("Foro", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.", true)}
      {field("Subtítulos", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.", true)}
      {field("Traducción", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.", true)}
      <div className="col-md-12 text-center zencluLink mt-4" onClick={() => {setSelected(3)}}>
        Siguiente
      </div>
    </div>
  );

  useEffect(() => {
    if(selected == 0){
      setTimeout(() => {setUploadProgress("50%")}, 5000);
      setTimeout(() => {setSelected(1);}, 9000);
    }
  }, [file]);

  return(
    <div className="modal-background text-black fadeIn fast">
      <div className="modal-container addVideo-container">
        {pantalla()}
      </div>
    </div>
  );
}

export default AddVideo;
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
import sadFace from "../../assets/Iconos/Modals/Recurso9.svg";
import dropdownArrow from "../../assets/Iconos/Dropdown.svg";
import videoImage from "../../assets/fotos/Live1.png";

const AddVideo = (props) => {
  const [selected, setSelected] = useState(0);
  const [prevSelected, setPrevSelected] = useState(null);
  const [file, setFile] = useState(null);
  const [informacionLink, setInformacionLink] = useState(false);
  const [informacionDocs, setInformacionDocs] = useState(true);
  const [informacionProd, setInformacionProd] = useState(false);
  const [uploadProgress, setUploadProgress] = useState("0%");
  const [etiquetas, setEtiquetas] = useState(["Moda", "Tecnología", "Ciencia"]);
  const [freeVideo, setFreeVideo] = useState(true);
  const [visibilityVideo, setVisibilityVideo] = useState(0);
  const [videoData, setVideoData] = useState({
    title: "Become an amazing plyboard builder",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
    link: "www.recursoacademico.com",
    category: "Tecnología",
    habilited: "Foro",
    price: "Gratuito",
    Visibility: "Oculto"
  });

  const pantalla = () => {
    if(selected === 0)
      return file ? chargingVideo : uploadVideo;
    if(selected === 1)
      return informationVideo;
    if(selected === 2)
      return elementsVideo;
    if(selected === 3)
      return termsVideo;
    if(selected === 4)
      return contentAndVisibilityVideo;
    if(selected === 5)
      return publishVideo;
    if(selected === 6)
      return exitVideo;
  }

  const onImageChange = (e) => {
    const [img] = e.target.files;
    setFile(URL.createObjectURL(img));
  }

  const field = (name, content, active) => {
    return <>
    <div className="col-md-3 mt-4 zencluMedium">
      <img src={infoIcon} alt="Información" width={"16px"} className="me-3"/>
      {name}
    </div>
    <div className="col-md-7 mt-4 zencluMedium">
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
        <img src={closeIcon} alt="Cerrar" width={"14px"} className="addVideo-close zencluPointer" onClick={() => {setFile(null);setPrevSelected(0);setSelected(6)}}/>
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
        <img src={closeIcon} alt="Cerrar" width={"14px"} className="addVideo-close zencluPointer" onClick={() => {setPrevSelected(0);setSelected(6)}}/>
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
        <img src={closeIcon} alt="Cerrar" width={"14px"} className="addVideo-close zencluPointer" onClick={() => {setPrevSelected(1);setSelected(6)}}/>
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
        <input type="text" className="addVideo-input mt-2" onChange={(e) => {setVideoData(prev => ({...prev, title: e.target.value}))}}/>
        <div className="mt-3">
          <img src={infoIcon} alt="Información" width={"16px"} className="me-3"/>
          Descripción*
        </div>
        <textarea type="text" className="addVideo-largeInput mt-2"  onChange={(e) => {setVideoData(prev => ({...prev, description: e.target.value}))}}/>
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
          <input type="text" className="addVideo-informacionInput" onChange={(e) => {setVideoData(prev => ({...prev, link: e.target.value}))}}/>
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
      <div className="col-md-12 text-center zencluLink mt-4" 
        onClick={() => {
          if(prevSelected === null) setSelected(2)
          else{
            setSelected(prevSelected);
            setPrevSelected(null);
          }
        }}>
        Siguiente
      </div>
    </div>
  );

  const elementsVideo = (
    <div className="row">
    <div className="col-md-12 addVideo-title position-relative text-center">
      <span className="ms-4">Elementos del video</span>
      <img src={closeIcon} alt="Cerrar" width={"14px"} className="addVideo-close zencluPointer" onClick={() => {setPrevSelected(2);setSelected(6)}}/>
    </div>
    <div className="col-md-12 text-center mt-2 zencluMedium">
      <img src={grayCircle} alt="Step 1" width={"16px"} className="addVideo-step"/>
      <img src={greenCircle} alt="Step 2" width={"16px"} className="addVideo-step"/>
      <img src={grayCircle} alt="Step 3" width={"16px"} className="addVideo-step"/>
      <img src={grayCircle} alt="Step 4" width={"16px"} className="addVideo-step"/>
      <img src={grayCircle} alt="Step 5" width={"16px"} className="addVideo-step"/>
    </div>
    <div className="col-md-3 mt-4 zencluMedium">
      <img src={infoIcon} alt="Información" width={"16px"} className="me-3"/>
      Categoría
    </div>
    <div className="col-md-9 mt-4 zencluMedium">
      <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</div>
      <div className="mt-3">
        <select className="addVideo-dropdown" defaultValue={0}>
          <option value="0" disabled className="addVideo-option">Buscar categoría</option>
        </select>
        <img src={dropdownArrow} alt="Seleccionar" width={"20px"} className="addVideo-dropdownArrow"/>
      </div>
    </div>
    <div className="col-md-3 mt-4 zencluMedium">
      <img src={infoIcon} alt="Información" width={"16px"} className="me-3"/>
      Etiqueta
    </div>
    <div className="col-md-9 mt-4 zencluMedium">
      <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</div>
      <div className="mt-3">
        <select className="addVideo-dropdown" 
          defaultValue={0}
          onChange={(e) => {
            setEtiquetas(old => [...old, e.target.value]);
        }}>
          <option value="0" disabled className="addVideo-option">Buscar etiqueta</option>
          <option value="Moda" className="addVideo-option">Moda</option>
          <option value="Tecnología" className="addVideo-option">Tecnología</option>
          <option value="Ciencia" className="addVideo-option">Ciencia</option>
        </select>
        <img src={dropdownArrow} alt="Seleccionar" width={"20px"} className="addVideo-dropdownArrow"/>
      </div>
      <div className="addVideo-tags mt-3">
        {etiquetas.map((etiqueta, index) => {
          return (
            <span key={index} className="addVideo-tag">
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
      <div className="col-md-12 text-center zencluLink mt-4" 
        onClick={() => {
          if(prevSelected === null) setSelected(3)
          else{
            setSelected(prevSelected);
            setPrevSelected(null);
          }
        }}>
        Siguiente
      </div>
    </div>
  );

  const termsVideo = (
    <div className="row">
      <div className="col-md-12 addVideo-title position-relative text-center">
        <span className="ms-4">Términos</span>
        <img src={closeIcon} alt="Cerrar" width={"14px"} className="addVideo-close zencluPointer" onClick={() => {setPrevSelected(3);setSelected(6)}}/>
      </div>
      <div className="col-md-12 text-center mt-2 zencluMedium">
        <img src={grayCircle} alt="Step 1" width={"16px"} className="addVideo-step"/>
        <img src={grayCircle} alt="Step 2" width={"16px"} className="addVideo-step"/>
        <img src={greenCircle} alt="Step 3" width={"16px"} className="addVideo-step"/>
        <img src={grayCircle} alt="Step 4" width={"16px"} className="addVideo-step"/>
        <img src={grayCircle} alt="Step 5" width={"16px"} className="addVideo-step"/>
      </div>
      <div className="col-md-12 mt-4 zencluMedium">
        <img src={infoIcon} alt="Información" width={"16px"} className="me-3"/>
        Términos y condiciones
      </div>
      <div className="col-md-12 mt-4 zencluMedium addVideo-terms">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
      </div>
      <div className="col-md-12 text-center zencluLink mt-4" 
        onClick={() => {
          if(prevSelected === null) setSelected(4)
          else{
            setSelected(prevSelected);
            setPrevSelected(null);
          }
        }}>
        Siguiente
      </div>
    </div>
  );

  const contentAndVisibilityVideo = (
    <div className="row">
      <div className="col-md-12 addVideo-title position-relative text-center">
        <span className="ms-4">Contenido y visibilidad</span>
        <img src={closeIcon} alt="Cerrar" width={"14px"} className="addVideo-close zencluPointer" onClick={() => {setPrevSelected(4);setSelected(6)}}/>
      </div>
      <div className="col-md-12 text-center mt-2 zencluMedium">
        <img src={grayCircle} alt="Step 1" width={"16px"} className="addVideo-step"/>
        <img src={grayCircle} alt="Step 2" width={"16px"} className="addVideo-step"/>
        <img src={grayCircle} alt="Step 3" width={"16px"} className="addVideo-step"/>
        <img src={greenCircle} alt="Step 4" width={"16px"} className="addVideo-step"/>
        <img src={grayCircle} alt="Step 5" width={"16px"} className="addVideo-step"/>
      </div>
      <div className="col-md-12 mt-4 zencluMedium">
        <img src={infoIcon} alt="Información" width={"16px"} className="me-3"/>
        Precio
      </div>
      <div className="addVideo-padding mt-2">
        <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
        <div>
          <label htmlFor="freeVideo" className="mt-2">
            {freeVideo ? 
            <img src={greenCircle} width={"23px"} alt="Links de referencia" className="zencluPointer me-2"/> :
            <img src={whiteCircle} width={"23px"} alt="Links de referencia" className="zencluPointer me-2"/> }
          </label>
          <input type="checkbox" style={{display: "none"}} id="freeVideo" onClick={() => {setFreeVideo(!freeVideo)}}/>
          Gratis
        </div>
        <div>
          <label htmlFor="paidVideo" className="mt-2">
            {!freeVideo ? 
            <img src={greenCircle} width={"23px"} alt="Links de referencia" className="zencluPointer me-2"/> :
            <img src={whiteCircle} width={"23px"} alt="Links de referencia" className="zencluPointer me-2"/> }
          </label>
          <input type="checkbox" style={{display: "none"}} id="paidVideo" onClick={() => {setFreeVideo(!freeVideo)}}/>
          De pago
          <span className="position-relative">
            <span className="addVideo-money">S/</span>
            <input type="number" className="addVideo-terminos mt-2"/>
          </span>
        </div>
      </div>
      <div className="col-md-12 mt-4 zencluMedium">
        <img src={infoIcon} alt="Información" width={"16px"} className="me-3"/>
        Visibilidad
      </div>
      <div className="addVideo-padding mt-2">
        <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
        <div>
          <label htmlFor="publicVideo" className="mt-2">
            {visibilityVideo === 0 ? 
            <img src={greenCircle} width={"23px"} alt="Links de referencia" className="zencluPointer me-2"/> :
            <img src={whiteCircle} width={"23px"} alt="Links de referencia" className="zencluPointer me-2"/> }
          </label>
          <input type="checkbox" style={{display: "none"}} id="publicVideo" onClick={() => {setVisibilityVideo(0)}}/>
          Público
        </div>
        <div>
          <label htmlFor="hiddenVideo" className="mt-2">
            {visibilityVideo === 1 ? 
            <img src={greenCircle} width={"23px"} alt="Links de referencia" className="zencluPointer me-2"/> :
            <img src={whiteCircle} width={"23px"} alt="Links de referencia" className="zencluPointer me-2"/> }
          </label>
          <input type="checkbox" style={{display: "none"}} id="hiddenVideo" onClick={() => {setVisibilityVideo(1)}}/>
          Oculto
        </div>
        <div>
          <label htmlFor="programmedVideo" className="mt-2">
            {visibilityVideo === 3 ? 
            <img src={greenCircle} width={"23px"} alt="Links de referencia" className="zencluPointer me-2"/> :
            <img src={whiteCircle} width={"23px"} alt="Links de referencia" className="zencluPointer me-2"/> }
          </label>
          <input type="checkbox" style={{display: "none"}} id="programmedVideo" onClick={() => {setVisibilityVideo(3)}}/>
          Programado
          <div className="addVideo-visibilitySubtext">Establece la fecha en la que desees hacer publico el video</div>
        </div>
      </div>
      <div className="col-md-12 text-center zencluLink mt-4" 
        onClick={() => {
          if(prevSelected === null) setSelected(5)
          else{
            setSelected(prevSelected);
            setPrevSelected(null);
          }
        }}>
        Siguiente
      </div>
    </div>
  );

  const publishVideo = (
    <div className="row">
      <div className="col-md-12 addVideo-title position-relative text-center">
        <span className="ms-4">Publicar</span>
        <img src={closeIcon} alt="Cerrar" width={"14px"} className="addVideo-close zencluPointer" onClick={() => {setPrevSelected(5);setSelected(6)}}/>
      </div>
      <div className="col-md-12 text-center mt-2 zencluMedium">
        <img src={grayCircle} alt="Step 1" width={"16px"} className="addVideo-step"/>
        <img src={grayCircle} alt="Step 2" width={"16px"} className="addVideo-step"/>
        <img src={grayCircle} alt="Step 3" width={"16px"} className="addVideo-step"/>
        <img src={grayCircle} alt="Step 4" width={"16px"} className="addVideo-step"/>
        <img src={greenCircle} alt="Step 5" width={"16px"} className="addVideo-step"/>
      </div>
      <div className="col-md-5 mt-4 position-relative zencluMedium">
        <img src={videoImage} alt="Imagen de video subido" width={"100%"} className="mb-3"/>
        <div className="addVideo-url my-auto">
          <img src={linkIcon} alt="Imagen de video subido" width={"18px"} className="me-2"/>
          https://zenclu/VJsxaMqePY8
          <img src={copyIcon} alt="Imagen de video subido" width={"18px"} className="addVideo-copyLink"/>
        </div>
      </div>
      <div className="col-md-7 mt-4">
        <div className="addVideo-publishContainer">
          <div className="zencluLink addVideo-publishEdit" onClick={() => {setPrevSelected(5);setSelected(1)}}>Editar</div>
          <div>{videoData.title}</div>
          <div className="mt-3">{videoData.description}</div>
          <div className="mt-3">Enlaces de referencia</div>
          <div>
            1. <span className="zencluLink"><u>{videoData.link}</u></span>
          </div>
          <div>
            2. <span className="zencluLink"><u>{videoData.link}</u></span>
          </div>
        </div>
        <div className="mt-4 addVideo-publishContainer">
          <div className="zencluLink addVideo-publishEdit" onClick={() => {setPrevSelected(5);setSelected(2)}}>Editar</div>
          <div className="row">
            <div className="col-md-3 zencluMedium">Categoría</div>
            <div className="col-md-9">{videoData.category}</div>
            <div className="col-md-3 mt-2 zencluMedium">Etiqueta</div>
            <div className="col-md-9 mt-2 pe-0">
              {etiquetas.map((etiqueta, index) => {
                return <span key={index} className="addVideo-tag">{etiqueta}</span>;
              })}
            </div>
            <div className="col-md-3 mt-2 zencluMedium">Habilitado</div>
            <div className="col-md-9 mt-2">{videoData.habilited}</div>
          </div>
        </div>
        <div className="mt-4 addVideo-publishContainer">
          <div className="zencluLink addVideo-publishEdit" onClick={() => {setPrevSelected(5);setSelected(4)}}>Editar</div>
          <div className="row">
            <div className="col-md-3 zencluMedium">Precio</div>
            <div className="col-md-9">{videoData.price}</div>
            <div className="col-md-3 mt-2 zencluMedium">Visibilidad</div>
            <div className="col-md-9 mt-2">{videoData.Visibility}</div>
          </div>
        </div>
      </div>
      <div className="col-md-4"></div>
      <div className="col-md-8 mt-4 text-center">
        <div className="addVideo-publicButton" onClick={() => {setSelected(6)}}>Publicar</div>
      </div>
    </div>
  );

  const exitVideo = (
    <div className="row text-center">
      <div className="col-md-12">
        <img src={sadFace} alt="Cara triste" width={"51px"}/>
      </div>
      <div className="col-md-12 zencluMedium mt-3 addVideo-title">¿Seguro de que quieres salir?</div>
      <div className="col-md-12 mt-3">
        <div>Actualmente estás en el proceso de subir un video.</div>
        <div>¿Te gustaría detener el proceso?</div>
        <div>Selecciona una de las opciones a continuación.</div>
      </div>
      <div className="col-md-4"></div>
      <div className="col-md-4 zencluMedium mt-5 addVideo-closeButton addVideo-continue"
        onClick={() => {
          if(prevSelected === null) setSelected(5)
          else{
            setSelected(prevSelected);
            setPrevSelected(null);
          }
        }}>
        Continuar publicando
      </div>
      <div className="col-md-4"></div>
      <div className="col-md-4 zencluMedium mt-3 addVideo-closeButton addVideo-save" onClick={() => {props.close(0)}}>
        Guardar y cerrar
      </div>
      <div className="col-md-4"></div>
      <div className="col-md-12 zencluMedium mt-5 addVideo-closeButton addVideo-exit" onClick={() => {props.close(0)}}>
        Salir
      </div>
    </div>
  );

  useEffect(() => {
    if(selected == 0){
      setTimeout(() => {setUploadProgress("50%")}, 5000);
      setTimeout(() => {setSelected(1);}, 7000);
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
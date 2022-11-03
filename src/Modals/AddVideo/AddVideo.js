import "./AddVideo.css";
import { useState } from "react";

import uploadIcon from "../../assets/Iconos/Modals/Recurso14.svg";
import closeIcon from "../../assets/Iconos/Modals/Recurso15.svg";
import arrowIcon from "../../assets/Iconos/Modals/Recurso18.svg";
import videoImage from "../../assets/fotos/Live1.png";

const AddVideo = (props) => {
  const [selected, setSelected] = useState(3);
  const [uploadProgress, setUploadProgress] = useState("89%");

  const pantalla = () => {
    if(selected === 0)
      return uploadVideo;
    if(selected === 1)
      return chargingVideo;
    if(selected === 3)
      return informationVideo;
  }

  const uploadVideo = (
    <div className="row">
      <div className="col-md-12 addVideo-title position-relative">
        <img src={uploadIcon} alt="Icono de subir" width={"29px"}/>
        <span className="ms-4">Subir un video</span>
        <img src={closeIcon} alt="Cerrar" width={"14px"} className="addVideo-close zencluPointer" onClick={() => {props.close(0)}}/>
      </div>
      <div className="col-md-12 addVideo-dropFile text-center addVideo-uploadVideo-dropFile">
        <button className="addVideo-button" onClick={() => {setSelected(1)}}>Seleciona un archivo</button>
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
        <img src={videoImage} alt="Imagen de video" width={"270px"}/>
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
    </div>
  );

  return(
    <div className="modal-background text-black fadeIn fast">
      <div className="modal-container addVideo-container">
        {pantalla()}
      </div>
    </div>
  );
}

export default AddVideo;
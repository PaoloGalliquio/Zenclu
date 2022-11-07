import "./ScheduleLive.css"
import { useState } from "react";
import calendarIcon from "../../assets/Iconos/Modals/Recurso22.svg";
import closeIcon from "../../assets/Iconos/Modals/Recurso15.svg";
import dropdownArrow from "../../assets/Iconos/Dropdown.svg";
import greenCircle from "../../assets/Iconos/Modals/Recurso19.svg";
import whiteCircle from "../../assets/Iconos/Modals/Recurso21.svg";
import uploadIcon from "../../assets/Iconos/Modals/Recurso14.svg";
import linkIcon from "../../assets/Iconos/Modals/Recurso12.svg";
import copyIcon from "../../assets/Iconos/Modals/Recurso11.svg";
import shareIcon from "../../assets/Iconos/Modals/Recurso13.svg";
import happyFace from "../../assets/Iconos/Profile/Recurso 2.svg";
import videoImage from "../../assets/fotos/Live1.png";

const ScheduleLive = (props) => {
  const [selected, setSelected] = useState(0);
  const [tags, setTags] = useState(["Moda", "Tecnología", "Ciencia"]);
  const [areas, setAreas] = useState(["Área 1","Área 2","Área 3"]);
  const [image, setImage] = useState(null);
  const [isPrivate, setIsPrivate] = useState(true);
  const [liveData, setLiveData] = useState({
    title: "Tecnología",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu.",
    date: "00/00/00",
    time: "00:00:00",
    price: "S/ 00,00",
    capacity: "",
    category: "Categoría"
  });
  
  const pantalla = () => {
    if(selected === 0)
      return informationLive;
    if(selected === 1)
      return previewLive;
    if(selected === 2)
      return correctLive;
  }

  const removeTag = (removed) => {
    setTags(prev => prev.filter(tag => tag !== removed));
  }

  const onImageChange = (e) => {
    const [img] = e.target.files;
    setImage(URL.createObjectURL(img));
  }

  const informationLive = (
    <>
    <div className="row">
      <div className="col-md-12 scheduleLive-title position-relative">
        <img src={calendarIcon} alt="Icono de subir" width={"38px"}/>
        <span className="ms-4 zencluMedium">Agendar Live</span>
        <img src={closeIcon} alt="Cerrar" width={"14px"} className="scheduleLive-close zencluPointer" 
          onClick={() => {props.close(0)}}/>
      </div>
    </div>
    <div className="row">
      <div className="col-md-2 zencluMedium mt-4">Título</div>
      <div className="col-md-10 mt-4">
        <input type="text" className="scheduleLive-input" 
          onChange={(e) => {setLiveData(prev => ({...prev, title: e.target.value}))}}/>
      </div>
    </div>
    <div className="row">
      <div className="col-md-2 zencluMedium mt-3">Descripción</div>
      <div className="col-md-10 mt-3">
        <textarea type="text" className="scheduleLive-largeInput"
          onChange={(e) => {setLiveData(prev => ({...prev, description: e.target.value}))}}/>
      </div>
    </div>
    <div className="row">
    <div className="col-md-2 zencluMedium mt-3">Fecha</div>
    <div className="col-md-4 mt-3">
      <input type="date" className="scheduleLive-input" 
        onChange={(e) => {setLiveData(prev => ({...prev, date: e.target.value}))}}/>
    </div>
    <div className="col-md-2 zencluMedium mt-3 ps-5">Hora</div>
    <div className="col-md-4 mt-3">
      <input type="time" className="scheduleLive-input" 
        onChange={(e) => {setLiveData(prev => ({...prev, time: e.target.value}))}}/>
    </div>
    </div>
    <div className="row">
    <div className="col-md-2 zencluMedium mt-3">Precio</div>
    <div className="col-md-4 mt-3">
      <span className="position-relative">
        <span className="scheduleLive-money">S/</span>
        <input type="number" className="scheduleLive-inputMoney" 
          onChange={(e) => {setLiveData(prev => ({...prev, price: e.target.value}))}}/>
      </span>
    </div>
    <div className="col-md-4 zencluMedium mt-3 ps-5">Capacidad de usuarios</div>
    <div className="col-md-2 mt-3">
      <input type="number" className="scheduleLive-input" 
        onChange={(e) => {setLiveData(prev => ({...prev, capacity: e.target.value}))}}/>
    </div>
    </div>
    <div className="row">
    <div className="col-md-2 zencluMedium mt-3">Categoría</div>
    <div className="col-md-4 mt-3">
      <input type="text" className="scheduleLive-input" 
        onChange={(e) => {setLiveData(prev => ({...prev, category: e.target.value}))}}/>
    </div>
    <div className="col-md-6 zencluMedium mt-3 ps-5">
      <label htmlFor="freeVideo">
        {isPrivate ? 
        <img src={greenCircle} width={"23px"} alt="Links de referencia" className="zencluPointer me-2"/> :
        <img src={whiteCircle} width={"23px"} alt="Links de referencia" className="zencluPointer me-2"/> }
      </label>
      <input type="checkbox" style={{display: "none"}} id="freeVideo" onClick={() => {setIsPrivate(!isPrivate)}}/>
      Público
    </div>
    </div>
    <div className="row">
    <div className="col-md-2 zencluMedium mt-3">Etiquetas</div>
    <div className="col-md-4 mt-3 position-relative">
      <select className="scheduleLive-dropdown" 
          defaultValue={0}
          onChange={(e) => {
            setTags(old => [...old, e.target.value]);
        }}>
        <option value="0" disabled className="scheduleLive-option">Buscar etiqueta</option>
        <option value="Moda" className="scheduleLive-option">Moda</option>
        <option value="Tecnología" className="scheduleLive-option">Tecnología</option>
        <option value="Ciencia" className="scheduleLive-option">Ciencia</option>
      </select>
      <img src={dropdownArrow} alt="Seleccionar" width={"20px"} className="scheduleLive-dropdownArrow"/>
    </div>
    <div className="col-md-6 zencluMedium mt-3 ps-5">
      <label htmlFor="freeVideo">
        {!isPrivate ? 
        <img src={greenCircle} width={"23px"} alt="Links de referencia" className="zencluPointer me-2"/> :
        <img src={whiteCircle} width={"23px"} alt="Links de referencia" className="zencluPointer me-2"/> }
      </label>
      <input type="checkbox" style={{display: "none"}} id="freeVideo" onClick={() => {setIsPrivate(!isPrivate)}}/>
      Privado
    </div>
    </div>
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <div className="scheduleLive-tags mt-3">
          {tags.map((tag, index) => {
            return (
              <span key={index} className="scheduleLive-tag">
                {tag}{" "}
                <span onClick={() => {removeTag(tag)}} className="zencluPointer">x</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
    <div className="row">
    <div className="col-md-7 mt-3 zencluMedium">
      <div>Miniatura</div>
      <div>Esta será la imagen de presentación de tu live.</div>
    </div>
    <div className="col-md-5 mt-3 zencluMedium position-relative">
      {image != null ? 
        <>
          <img src={image} alt="Minuatura" className="scheduleLive-minuatureImage" /> 
          <img src={closeIcon} alt="Cerrar" width={"14px"} className="zencluPointer scheduleLive-deleteMinuature" onClick={() => {setImage(null)}}/>
        </>:
        <>
          <label className="scheduleLive-minuature text-center" htmlFor="image">
            <div><img src={uploadIcon} alt="Icono de subir" width={"20px"}/></div>
            <div>Subir imagen</div>
          </label>
          <input type="file" id="image" style={{display: "none"}} onChange={onImageChange} accept="image/*"/>
        </>
      }
    </div>
    </div>
    <div className="row">
      <div className="col-md-12 zencluMedium mt-5 text-center">
        <div className="scheduleLive-button scheduleLive-next" onClick={() => {setSelected(1)}}>
          Siguiente
        </div>
      </div>
    </div>
    </>
  );

  const previewLive = (
    <>
    <div className="row">
      <div className="col-md-12 scheduleLive-title position-relative">
        <img src={calendarIcon} alt="Icono de subir" width={"38px"}/>
        <span className="ms-4 zencluMedium">Agendar Live</span>
        <img src={closeIcon} alt="Cerrar" width={"14px"} className="scheduleLive-close zencluPointer" 
          onClick={() => {props.close(0)}}/>
      </div>
    </div>
    <div className="row mt-4 scheduleLive-text">
      <div className="col-md-5">
        <div className="scheduleLive-preview">
          <div className="zencluMedium">Previsualización</div>
          <img src={image != null ? image : videoImage} alt="Miniatura de live" className="scheduleLive-previewImage mt-3"/>
          <div className="scheduleLive-previewTitle mt-3 zencluMedium">Nombre del live</div>
          <div className="mt-3 zencluMedium">Áreas:</div>
          <div className="mt-2 scheduleLive-overflow">
            {areas.map((area, index) => {
              return <span key={index} className="scheduleLive-area">{area}</span>;
            })}
          </div>
          <div className="row mt-3 scheduleLive-time zencluMedium">
            <div className="col-md-6 p-0 my-auto">Inicia en:</div>
            <div className="col-md-6 p-0 my-auto scheduleLive-timer">{liveData.time}</div>
          </div>
        </div>
      </div>
      <div className="col-md-7 position-relative">
        <span className="zencluLink scheduleLive-publishEdit" onClick={() => {setSelected(0)}}>Editar</span>
        <div className="row">
          <div className="col-md-3 zencluMedium">Título</div>
          <div className="col-md-9">{liveData.title}</div>
        </div>
        <div className="row mt-3">
          <div className="col-md-3 zencluMedium">Descripción</div>
          <div className="col-md-9">{liveData.description}</div>
        </div>
        <div className="row mt-3">
          <div className="col-md-3 zencluMedium">Fecha</div>
          <div className="col-md-9">{liveData.date}</div>
        </div>
        <div className="row mt-3">
          <div className="col-md-3 zencluMedium">Precio</div>
          <div className="col-md-9">{liveData.price}</div>
        </div>
        <div className="row mt-3">
          <div className="col-md-3 zencluMedium">Categoría</div>
          <div className="col-md-9">{liveData.category}</div>
        </div>
        <div className="row mt-3">
          <div className="col-md-3 zencluMedium">Etiquetas</div>
          <div className="col-md-9">
            {tags.map((tag, index) => {
              return <span key={index} className="scheduleLive-tag">{tag}</span>;
            })}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 position-relative zencluMedium">
            <div className="scheduleLive-url my-auto">
              <img src={linkIcon} alt="Imagen de video subido" width={"18px"} className="me-2"/>
              https://zenclu/VJsxaMqePY8
              <img src={copyIcon} alt="Imagen de video subido" width={"18px"} className="scheduleLive-copyLink"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-md-12 zencluMedium text-center">
        <div className="scheduleLive-button scheduleLive-next" onClick={() => {setSelected(2)}}>
          Agendar
        </div>
      </div>
    </div>
    </>
  );

  const correctLive = (
    <>
    <div className="row text-center">
      <div className="col-md-12 position-relative">
        <img src={happyFace} alt="" width={"51px"}/>
        <div className="scheduleLive-title mt-3 zencluMedium">¡Live agendado correctamente!</div>
        <div className="mt-3">Te enviaremos una alerta a tus notificaciones y correo electrónico vinculado con la información confirmada.</div>
        <img src={closeIcon} alt="Cerrar" width={"14px"} className="scheduleLive-close zencluPointer" 
          onClick={() => {props.close(0)}}/>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-md-2"></div>
      <div className="col-md-6">
        <div className="scheduleLive-bigUrl">
          <img src={linkIcon} alt="Imagen de video subido" width={"22px"} className="me-3"/>
          https://zenclu/VJsxaMqePY8
          <img src={copyIcon} alt="Imagen de video subido" width={"17px"} className="scheduleLive-bigCopyLink"/>
        </div>
      </div>
      <div className="col-md-2 ps-0 pe-0">
        <div className="scheduleLive-share h-100 text-center">
          <img src={shareIcon} alt="" width={"17px"}/> Compartir
        </div>
      </div>
      <div className="col-md-2"></div>
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

export default ScheduleLive;
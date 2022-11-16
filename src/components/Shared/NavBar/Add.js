import "./NavbarZ.css";
import { useState } from "react";
import image1 from "../../../assets/Iconos/NavBar/AddIcons/VideoIcon.png";
import image2 from "../../../assets/Iconos/NavBar/AddIcons/CalendarIcon.png";
import image3 from "../../../assets/Iconos/NavBar/AddIcons/ShakeIcon.png";
import AddVideo from "../../../Modals/AddVideo/AddVideo";
import ScheduleLive from "../../../Modals/ScheduleLive/ScheduleLive";
import AddProduct from "../../../Modals/AddProduct/AddProduct";

const Add = (props) => {
  const optionImgWidth = "50px";
  const [modalVideo, setModalVideo] = useState(false);
  const [modalRoom, setModalRoom] = useState(false);
  const [modalSell, setModalSell] = useState(false);

  return (
    <>
    {modalVideo ? <AddVideo close={props.close}/> :
    modalRoom ? <ScheduleLive close={props.close}/> :
    modalSell ? <AddProduct close={props.close}/> :
    <div className="modalBackdrop" onClick={() => {props.close(0);}}>
      <div className="navbar-background-add fadeIn fast" onClick={e => {e.stopPropagation();}}>
        <div className="navbar-triangle"></div>
        <div className="row">
          <div className="col-md-3">
            <img src={image1} alt="Video" className="zencluPointer" width={optionImgWidth} onClick={() => {setModalVideo(true)}}/>
          </div>
          <div className="col-md-9 my-auto ps-4 zencluPointer">
            <span onClick={() => {setModalVideo(true)}}>
              <div className="row zencluBold">
                <div className="col p-0">Video</div>
              </div>
              <div className="row">
                <div className="col p-0">Sube un video</div>
              </div>
            </span>
          </div>
        </div>
        <div className="navbar-division"></div>
        <div className="row">
          <div className="col-md-3">
            <img src={image2} alt="Sala" className="zencluPointer" width={optionImgWidth} onClick={() => {setModalRoom(true)}}/>
          </div>
          <div className="col-md-9 my-auto ps-4 zencluPointer">
            <span onClick={() => {setModalRoom(true)}}>
              <div className="row zencluBold">
                <div className="col p-0">Sala</div>
              </div>
              <div className="row">
                <div className="col p-0">Agenda una sala</div>
              </div>
            </span>
          </div>
        </div>
        <div className="navbar-division"></div>
        <div className="row">
          <div className="col-md-3">
            <img src={image3} alt="Vende" className="zencluPointer" width={optionImgWidth} onClick={() => {setModalSell(true)}}/>
          </div>
          <div className="col-md-9 my-auto ps-4 zencluPointer">
            <span onClick={() => {setModalSell(true)}}>
              <div className="row zencluBold">
                <div className="col p-0">Vende</div>
              </div>
              <div className="row">
                <div className="col p-0">Vende</div>
              </div>
            </span>
          </div>
        </div>
        <div className="pb-3"></div>
      </div>
    </div>
    }
    </>
  );
};

export default Add;

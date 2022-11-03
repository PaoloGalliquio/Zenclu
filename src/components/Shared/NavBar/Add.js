import "./NavbarZ.css";
import { useState } from "react";
import image1 from "../../../assets/Iconos/NavBar/AddIcons/VideoIcon.png";
import image2 from "../../../assets/Iconos/NavBar/AddIcons/CalendarIcon.png";
import image3 from "../../../assets/Iconos/NavBar/AddIcons/ShakeIcon.png";
import AddVideo from "../../../Modals/AddVideo/AddVideo";

const Add = (props) => {
  const optionImgWidth = "50px";
  const [modalVideo, setModalVideo] = useState(false);

  return (
    <>
    {modalVideo ? <AddVideo close={props.close}/> :
    <div className="modalBackdrop" onClick={() => {props.close(0);}}>
      <div className="navbar-background-add fadeIn fast" onClick={e => {e.stopPropagation();}}>
        <div className="navbar-triangle"></div>
        <div className="row">
          <div className="col-md-3">
            <img src={image1} alt="Video" width={optionImgWidth}/>
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
            <img src={image2} alt="Sala" width={optionImgWidth}/>
          </div>
          <div className="col-md-9 my-auto ps-4">
            <div className="row zencluBold">
              <div className="col p-0">Sala</div>
            </div>
            <div className="row">
              <div className="col p-0">Agenda una sala</div>
            </div>
          </div>
        </div>
        <div className="navbar-division"></div>
        <div className="row">
          <div className="col-md-3">
            <img src={image3} alt="Vende" width={optionImgWidth}/>
          </div>
          <div className="col-md-9 my-auto ps-4">
            <div className="row zencluBold">
              <div className="col p-0">Vende</div>
            </div>
            <div className="row">
              <div className="col p-0">Vende</div>
            </div>
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

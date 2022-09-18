import "./NavbarZ.css"
import image1 from "../../../assets/Iconos/Recurso 36.png";
import image2 from "../../../assets/Iconos/Recurso 37.png";
import image3 from "../../../assets/Iconos/Recurso 38.png";

const Add = () => {
  const optionImgWidth = "50px";

  const options = [
    {
      name: 'Video',
      message: 'Sube un video',
      image: image1,
      last: false
    },
    {
      name: 'Sala',
      message: 'Agenda una sala',
      image: image2,
      last: false
    },
    {
      name: 'Vende',
      message: 'Vende',
      image: image3,
      last: true
    }
  ];

  return(
    <div className="navbar-background">
      <div className="navbar-triangle"></div>
      {options.map(option => {
        return(
          <div key={option.name}>
            <div className="row">
              <div className="col-md-3">
                <img src={option.image} alt={option.name} width={optionImgWidth}/>
              </div>
              <div className="col-md-9 my-auto ps-4">
                <div className="row zencluBold">
                  <div className="col p-0">{option.name}</div>
                </div>
                <div className="row">
                  <div className="col p-0">{option.message}</div>
                </div>
              </div>
            </div>
            {option.last ? <div className="pb-3"></div> : <div className="navbar-division"></div>}
          </div>
        )
      })}
    </div>
  );
}

export default Add;
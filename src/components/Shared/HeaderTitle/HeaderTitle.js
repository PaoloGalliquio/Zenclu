import "./HeaderTitle.css";

const HeaderTitle = (props) => {
  return (
    <>
      <div className="row w-100 d-flex headerTitle-container ms-0 me-0">
        <div className="headerTitle-icon">
          <img
            src={props.image}
            alt={props.title}
            className="m-0 p-0"
            height={"50px"}
          />
        </div>
        <div className="col justify-content-center align-self-center">
          <h2 className="zencluBold">{props.title}</h2>
        </div>
      </div>
    </>
  );
};

export default HeaderTitle;

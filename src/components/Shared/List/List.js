import "./List.css";

const List = (props) => {
  return (
    <>
      <div className="row list-title">{props.title}</div>
      {props.items.map((item, i) => {
        return (
          <div className="row" key={item.id}>
            <div className="col-md-1 list-icon text-center my-auto">
              <img src={item.icon} alt="icono" height={"30px"} />
            </div>
            <div className="col-md-11 list-info">
              <div className="row">{item.name}</div>
              <div className="row">{item.time}</div>
            </div>
            {props.items.length === i + 1 ? (
              <></>
            ) : (
              <div className="navbar-division"></div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default List;

import "./TabSelector.css"

const TabSelector = (props) => {
  const iconSize = "80px";
  return(
    <>
    <div className="row w-100 ms-0 me-0 text-center tabSelector-padding">
      {props.tabs.map(tab => {
        return(
          <div className={`col pb-2 ${tab.active ? "tabActive" : "tabNotActive"}`} key={tab.name}>
            {props.haveImage ? <img src={tab.image} alt={tab.name} height={iconSize}/> : <></>}
            <h4 className="zencluBold mt-2">{tab.name}</h4>
          </div>
        );
      })}
    </div>
    <div className="row w-100 ms-0 me-0 text-center">
      <span className="lineaGradiente"></span>
    </div>
    </>
  );
}

export default TabSelector;
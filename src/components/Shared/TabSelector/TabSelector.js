import "./TabSelector.css";

const TabSelector = (props) => {
  const iconSize = "75px";

  return (
    <>
      <div className="row w-100 ms-0 me-0 text-center" 
        style={{paddingLeft: props.padding, paddingRight: props.padding}}>
        {props.tabs.map((tab) => {
          return (
            <div
              className={`col pb-2 zencluPointer ${
                tab.id === props.selected ? "tabActive" : "tabNotActive"
              }`}
              key={tab.name}
              onClick={() => {
                props.setSelected(tab.id);
              }}>
              {props.haveImage ? (
                <img
                  src={tab.image}
                  alt={tab.name}
                  height={iconSize}
                  width={iconSize}
                  className="tabSelector-icon"
                />
              ) : (
                <></>
              )}
              {props.small ? 
                <div className="zencluBold mt-2 tabSelector-small pb-1">{tab.name}</div>
                :
                <div className="zencluMedium mt-2 tabSelector-large pb-1">{tab.name}</div>
              }
            </div>
          );
        })}
      </div>
      <div className="row w-100 ms-0 me-0 text-center">
        <span className="lineaGradiente"></span>
      </div>
    </>
  );
};

export default TabSelector;

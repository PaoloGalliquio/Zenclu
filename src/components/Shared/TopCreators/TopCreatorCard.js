import { Card, Button } from "react-bootstrap";

const showThemesTags = (themes) => {
  return (
    <div>
      {themes.map((theme) => {
        return (<div key={theme} className="secondary me-2 mt-2 text-center card-top-creators rounded">{theme}</div>);
      })}
    </div>
  );
};

export default function TopCreatorCard(props) {
  return (
    <Card className="m-2 p-3 col-md-3 mx-auto" style={{ width: "20rem" }}>
      <Card.Img
        className="ps-5 pe-5 pt-3"
        variant="top"
        src={props.image}
      />
      <Card.Body>
        <h4 className="text-center pb-3">
          <b>{props.name}</b>
        </h4>
        {showThemesTags(props.themes)}
        <Button variant="success w-100 mt-3 text-center greencolor">
          Ver pefil completo
        </Button>
      </Card.Body>
    </Card>
  );
}

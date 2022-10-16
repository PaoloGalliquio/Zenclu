import "./Accordion.css";
import Accordion from 'react-bootstrap/Accordion';

const AccordionZ = (props) => {
  return (
    <Accordion defaultActiveKey="0">
      {props.items.map((item) => {
        return (
          <Accordion.Item eventKey={item.id} key={item.id}>
            <Accordion.Header>
              <div className="accordion-number">
                {item.id < 10 ? <>{"0" + item.id}</> : <>{item.id}</>}
              </div>
              <div className="accordion-question">{item.question}</div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="accordion-answer">{item.answer}</div>
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}

export default AccordionZ;
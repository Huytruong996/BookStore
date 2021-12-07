import { Card, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import FormAuthor from "./components/Form/FormAuthor";
import FormBook from "./components/Form/FormBook";
import ListBooks from "./components/ListBooks/ListBooks";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm={12} xl>
            <Card>
              <Card.Body>
                <FormBook />
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} xl>
            <Card>
              <Card.Body>
                <FormAuthor />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <ListBooks />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

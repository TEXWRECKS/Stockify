import React from 'react';
import '../App.css';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import Lego from '../assets/images/lego.jpg';

function product(props) {
  // Creating a state that holds which question we are asking
  const[counter, setCounter] = useState(0);
  // On-click event listener functions go here
  const question1Yes = (event) => {
    event.preventDefault()
  };
  const question1No = (event) => {
    event.preventDefault()
  };
  const question2Yes = (event) => {
    event.preventDefault()
  };
  const question2No = (event) => {
    event.preventDefault()
  };
  const question3Yes = (event) => {
    event.preventDefault()
  };
  const question3No = (event) => {
    event.preventDefault()
  };
  return (
    <div
    //   style={{
    //     position: 'absolute',
    //     left: '50%',
    //     top: '50%',
    //     transform: 'translate(-50%, -50%)',
    //   }}
    >
      <Container className="product-container md">
        <Card className="product-card">
          <Card.Body>
            <Card.Title className="product-found">Product Found</Card.Title>
            {counter===0 ?
            <Card.Subtitle className="mb-2 text-muted product-subtext">
              Is this the product you were looking for?
            </Card.Subtitle>
            : counter===1 ?
            <Card.Subtitle className="mb-2 text-muted product-subtext">
            Do you want to be notified of product availability changes?
            </Card.Subtitle>
            : counter===2 ?          
            <Card.Subtitle className="mb-2 text-muted product-subtext">
              Do you want to be notified of price changes?
            </Card.Subtitle>
            : null}
            <Container className="product-output">
              <Row>
                <Col md>
                  <img src={Lego} alt="" className="product-photo" />
                </Col>
                <Col classname="product-details" md>
                  {/* this needs to be props and also have a limit on character length */}
                  <Card.Title className="product-name">
                    LEGO Technic Bugatti Chiron 42083 Race Car Building Kit and
                    Engineering Toy, Adult Collectible Sports Car with Scale
                    Model Engine (3599 Pieces)
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted product-price">
                    Price: <strong>$349.95</strong>
                  </Card.Subtitle>
                  <Card.Text className="product-status">
                    <strong style={{ color: 'red' }}>Out of Stock</strong>
                  </Card.Text>
                  {counter===0 ?
                  <>
                  <Button onClick={() => question1Yes} variant="success" className="product-btn">
                    Yes
                  </Button>
                  <Button onClick={() => question1No} variant="outline-primary" className="product-btn">
                    No
                  </Button>
                  </>
                  : counter===1 ?
                  <>
                  <Button onClick={() => question2Yes} variant="success" className="product-btn">
                    Yes
                  </Button>
                  <Button onClick={() => question2No} variant="outline-primary" className="product-btn">
                    No
                  </Button>
                  </>
                  : counter===2 ?
                  <>
                  <Button onClick={() => question3Yes} variant="success" className="product-btn">
                    Yes
                  </Button>
                  <Button onClick={() => question3No} variant="outline-primary" className="product-btn">
                    No
                  </Button>
                  </>
                  : null}
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default product;

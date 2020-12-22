import React, {useState} from 'react';
import '../App.css';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import Lego from '../assets/images/lego.jpg';


function Product(props) {

  // Creating a state that holds which question we are asking
  const[counter, setCounter] = useState(0);
  
  // counter===0 question/button set event listener functions
    // Question 1 "Yes" onclick function
  const question1Yes = (event) => {
    event.preventDefault()
  };
    // Question 1 "No" onclick function
  const question1No = (event) => {
    event.preventDefault()
  };
  // end counter===0

  // counter===1 question/button set event listener functions
    // Question 2 "Yes" onclick function
  const question2Yes = (event) => {
    event.preventDefault()
  };
    // Question 2 "No" onclick function
  const question2No = (event) => {
    event.preventDefault()
  };
  // end counter===1

  // counter===2 question/button set event listener functions
    // Question 3 "Yes" onclick function
  const question3Yes = (event) => {
    event.preventDefault()
  };
    // Question 3 "No" onclick function
  const question3No = (event) => {
    event.preventDefault()
  };
  // end counter===2

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

            {/* Counter===0 Question (Question 1) */}
            {counter===0 ?
            <Card.Subtitle className="mb-2 text-muted product-subtext">
              Is this the product you were looking for?
            </Card.Subtitle>
            // Ends counter===0 question (Question 1)

            // Counter===1 question (Question 2)
            : counter===1 ?
            <Card.Subtitle className="mb-2 text-muted product-subtext">
            Do you want to be notified of product availability changes?
            </Card.Subtitle>
            // Ends counter===1 question (Question 2)

            // Counter===2 question (Question 3)
            : counter===2 ?          
            <Card.Subtitle className="mb-2 text-muted product-subtext">
              Do you want to be notified of price changes?
            </Card.Subtitle>
            // Ends counter===2 question (Question 3)

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

                  {/* Counter===0 button set (for Question 1)*/}
                  {counter===0 ?
                  <>
                  <Button onClick={() => question1Yes} variant="success" className="product-btn">
                    Yes
                  </Button>
                  <Button onClick={() => question1No} variant="outline-primary" className="product-btn">
                    No
                  </Button>
                  </>
                  // Ends counter===0 button set (for Question 1)

                  // Counter===1 button set (for Question 2)
                  : counter===1 ?
                  <>
                  <Button onClick={() => question2Yes} variant="success" className="product-btn">
                    Yes
                  </Button>
                  <Button onClick={() => question2No} variant="outline-primary" className="product-btn">
                    No
                  </Button>
                  </>
                  // Ends counter===1 button set (for Question 2)

                  // Counter===2 button set (for Question 3)
                  : counter===2 ?
                  <>
                  <Button onClick={() => question3Yes} variant="success" className="product-btn">
                    Yes
                  </Button>
                  <Button onClick={() => question3No} variant="outline-primary" className="product-btn">
                    No
                  </Button>
                  </>
                  // Ends counter===2 button set (for Question 3)

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

export default Product;

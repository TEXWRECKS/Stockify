import React from 'react';
import '../App.css';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import Lego from '../assets/images/lego.jpg';

function product(props) {
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
            <Card.Subtitle className="mb-2 text-muted product-subtext">
              Is this the product you were looking for?
            </Card.Subtitle>
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
                  <Button variant="outline-primary" className="product-btn">
                    No
                  </Button>
                  <Button variant="success" className="product-btn">
                    Yes
                  </Button>
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

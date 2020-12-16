import React from 'react';
import '../App.css';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import Lego from '../assets/images/lego.jpg';

function savedProduct() {
  return (
    <div>
      <div className="container">
        <h1 className="product-saved-heading">All Saved Products</h1>

        <Card>
          <Card.Header>
            <strong style={{ color: 'green' }}>In Stock</strong>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md>
                <img src={Lego} alt="" className="photo-small" />
              </Col>
              <Col md>
                <Card.Title className="product-name">
                  LEGO Technic Bugatti Chiron 42083 Race Car Building Kit and
                  Engineering Toy, Adult Collectible Sports Car with Scale Model
                  Engine (3599 Pieces)
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted product-price">
                  Price: <strong>$349.95</strong>
                </Card.Subtitle>
                <Card.Text className="product-status">
                  <strong style={{ color: 'red' }}>Out of Stock</strong>
                </Card.Text>
              </Col>
              <Col md-2 className="btn-col" md>
                <Button variant="primary" className="view-btn">
                  View Product
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default savedProduct;

import React from 'react';
import '../App.css';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import Lego from '../assets/images/lego.jpg';

function savedProduct(props) {
  return (
        <Card>
          <Card.Header>
            <strong style={{ color: 'green' }}>{props.savedProduct.itemStatus}</strong>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col className="md">
                <img src={props.savedProduct.itemImage} alt="" className="photo-small" />
              </Col>
              <Col className="md">
                <Card.Title className="product-name">
                  {props.savedProduct.itemTitle}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted product-price">
                  Price: <strong>{props.savedProduct.itemPrice}</strong>
                </Card.Subtitle>
                <Card.Text className="product-status">
                  <strong style={{ color: 'red' }}>{props.savedProduct.itemStatus}</strong>
                </Card.Text>
              </Col>
              <Col className="mb-2 btn-col md">
                <Button variant="primary" className="view-btn">
                  View Product
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
  );
}

export default savedProduct;

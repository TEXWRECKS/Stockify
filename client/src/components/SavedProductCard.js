import React, { useState } from 'react';
import '../App.css';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


function SavedProductCard(props) {
    // Price Change toggle button variable for setting state
    const [priceChecked, setPriceChecked] = useState({checked: false});
    // Avialability Change toggle button variable for setting state
    const [availabilityChecked, setAvailabilityChecked] = useState({available: false});

  return (
    <Card>
    <Card.Header>
      <strong style={{ color: 'green' }}>{props.savedProduct.itemStatus}</strong>
    </Card.Header>
    <Card.Body>
      <Container>
        <Row>
          <Col className="prod-picture mb-5 md-4">
            <img
              src={props.savedProduct.itemImage}
              alt=""
              className="mx-auto my-auto"
              width="80%" 
              height="auto%" 
              max-width="50px"
            />
          </Col>
          <Col className="description md-4">
            <Card.Title className="product-name">
            {props.savedProduct.itemTitle}
            </Card.Title>
          </Col>
          <Col className="notification-preference" md={4}>
            You can choose to be notified on price changes, availability
            changes, or both.
            <br></br>
            Click the toggles for any which you want to receive
            notifications for <strong>below!</strong>
          </Col>
        </Row>

        <Row>
          <Col className="mb-5 center description md-4">
            <Button variant="primary" className="view-btn">
              View Product
            </Button>
          </Col>
          <Col className="description md-4">
            <Card.Subtitle className="mb-2 text-muted center">
              Price: <strong>{props.savedProduct.itemPrice}</strong>
            </Card.Subtitle>
            <Card.Text className="center">
              <strong style={{ color: 'red' }}>{props.savedProduct.itemStatus}</strong>
            </Card.Text>
          </Col>
          <Col className="notification-preference md-4">
            <ButtonGroup toggle className="m-2">
              <ToggleButton
                className="p-check btn- btn-secondary active"
                type="checkbox"
                checked={priceChecked.checked}
                value="1"
                onChange={(e) => setPriceChecked({checked: e.currentTarget.checked})}
              >
                Price Change
              </ToggleButton>
            </ButtonGroup>
            <ButtonGroup toggle className="m-2">
              <ToggleButton
                className="a-check btn- btn-secondary active"
                type="checkbox"
                checked={availabilityChecked.available}
                value="1"
                onChange={(e) =>
                  setAvailabilityChecked({available: e.currentTarget.checked})
                }
              >
                Availability Change
              </ToggleButton>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </Card.Body>
  </Card> 
  );
}

export default SavedProductCard;
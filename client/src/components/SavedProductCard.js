import React, { useState } from 'react';
import '../App.css';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from '../utils/API';

function SavedProductCard(props) {
    // Price Change toggle button variable for setting state
    const [priceChecked, setPriceChecked] = useState({checked: false});
    // Avialability Change toggle button variable for setting state
    const [availabilityChecked, setAvailabilityChecked] = useState({available: false});
    

    function handleDeleteClick(event) {
      console.log(event)
      let item_id = event.target.getAttribute("identify")
      API.deleteUsersSavedItem(props.user.email, item_id)
      setTimeout(() => {props.getUsersSavedItems(); }, 2000)
      }

  return (
    <Card className="mb-5">
    {console.log(props)}
      <Card.Header>
        <strong style={{ color: 'green' }}>
          {props.savedProduct.itemStatus}
        </strong>
        <Button variant="danger" className="btn-delete">
          <i className="fa fa-times" aria-hidden="true"></i>
        </Button>
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
              Click the toggles for any which you want to receive notifications
              for <strong>below!</strong>
            </Col>
            <Button variant="danger" className="btn-delete" identify={props.savedProduct._id} onClick={handleDeleteClick}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </Button>
          </Row>
          <br></br>
          <Row>
            <Col className="mb-5 center description md-4">
              <Button variant="primary" className="view-btn mr-2">
                View Product
              </Button>
              <Button variant="light" className="view-btn">
                Update Product
              </Button>
            </Col>
            <Col className="description md-4">
              <Card.Subtitle className="mb-2 text-muted center">
                Price: <strong>{props.savedProduct.itemPrice}</strong>
              </Card.Subtitle>
              <Card.Text className="center">
                <strong style={{ color: 'red' }}>
                  {props.savedProduct.itemStatus}
                </strong>
              </Card.Text>
            </Col>

            <Col className="notification-preference md-4">
              <ToggleButtonGroup
                type="checkbox"
                defaultValue={[1, 2]}
                className="mb-2 mr-2"
              >
                <ToggleButton
                  className="p-check btn"
                  type="checkbox"
                  checked={priceChecked.checked}
                  value={1}
                  onChange={(e) =>
                    setPriceChecked({ checked: e.currentTarget.checked })
                  }
                >
                  Price Change
                </ToggleButton>
                <ToggleButton
                  className="a-check btn"
                  type="checkbox"
                  checked={availabilityChecked.available}
                  value={2}
                  onChanged={(e) =>
                    setAvailabilityChecked({
                      available: e.currentTarget.checked,
                    })
                  }
                >
                  Availability Change
                </ToggleButton>
              </ToggleButtonGroup>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default SavedProductCard;

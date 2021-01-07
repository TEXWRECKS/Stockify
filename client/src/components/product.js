import React, { useState } from 'react';
import '../App.css';
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
// import Lego from '../assets/images/lego.jpg';

function Product(props) {
  // Creating a state that holds which question we are asking
  const [counter, setCounter] = useState(0);

  // counter===0 question/button set event listener functions
  // Question 1 "Yes" onclick function
  const question1Yes = (event) => {
    event.preventDefault();
    // *** NEED to write code here to save the product to the saved products list/page

    // changing counter to 1, to present the statement
    setCounter(1);
  };

  // Question 1 "No" onclick function
  const question1No = (event) => {
    event.preventDefault();
    // *** NEED to write code that will save the url that was searched, in case the user presses "Back" in the 404 option provided to them...
    // ... if they click this "No" button
    console.log('No has been clicked');
    props.updateProductState({
      data: {
        title: '',
        url: '',
        image: '',
        price: 0,
        availability: '',
      },
    });
    // setting the counter to 404 to prompt user to check their url entry and try again, or to return to the product page
    setCounter(404);
  };
  // end counter===0

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
        {/* this is the new card */}
        <Card style={{ width: '28rem' }}>
          <img
            src={props.item.itemImage}
            alt=""
            className="new-product-photo"
          />
          <Card.Body>
            <Card.Title>
              <a href={props.item.itemUrl} target="_blank">
                {props.item.itemTitle}
              </a>
            </Card.Title>
            <Card.Text>
              <strong style={{ color: 'red' }}>{props.item.itemStatus}</strong>
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {/* <ListGroupItem>
              Price: <strong>{props.item.itemPrice}</strong>
            </ListGroupItem> */}
          </ListGroup>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted product-subtext">
              Would you like to save this product to your "Saved Products" page
              for notification capabilities?
            </Card.Subtitle>
            <Button
              onClick={question1Yes}
              variant="success"
              className="product-btn"
            >
              Yes
            </Button>
            <Button
              onClick={question1No}
              variant="outline-primary"
              className="product-btn"
            >
              No
            </Button>
          </Card.Body>
        </Card>
        {/* this ends the new card */}

        <Card className="product-card">
          <Card.Body>
            <Card.Title className="product-found">Product Found</Card.Title>

            {/* Counter===0 Question (Question 1) */}
            {counter === 0 ? (
              <Card.Subtitle className="mb-2 text-muted product-subtext">
                {/* Would you like to save this product to your "Saved Products"
                page for notification capabilities? */}
              </Card.Subtitle>
            ) : // Ends counter===0 question (Question 1)

            // Counter===1 statement (question 1 yes)
            counter === 1 ? (
              <Card.Subtitle className="mb-2 text-muted product-subtext">
                This item has been saved to your Saved Products! Check your
                Saved Products page to confirm product notification preferences.
              </Card.Subtitle>
            ) : // Ends counter===1 statement (question 1 yes)

            null}

            <Container className="product-output">
              <Row>
                <Col md>
                  <img
                    src={props.item.itemImage}
                    alt=""
                    className="product-photo"
                  />
                </Col>
                <Col className="product-details md">
                  {/* this needs to be props and also have a limit on character length */}
                  <Card.Title className="product-name">
                    {/* displays the title and allows user to click on a link to the url, opening in a new window*/}
                    <a href={props.item.itemUrl} target="_blank">
                      {props.item.itemTitle}
                    </a>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted product-price">
                    Price: <strong>{props.item.itemPrice}</strong>
                  </Card.Subtitle>
                  <Card.Text className="product-status">
                    <strong style={{ color: 'red' }}>
                      {props.item.itemStatus}
                    </strong>
                  </Card.Text>

                  {/* Counter===0 button set (for Question 1)*/}
                  {counter === 0 ? (
                    <>
                      <Card.Subtitle className="mb-2 text-muted product-subtext">
                        Would you like to save this product to your "Saved
                        Products" page for notification capabilities?
                      </Card.Subtitle>
                      <Button
                        onClick={question1Yes}
                        variant="success"
                        className="product-btn"
                      >
                        Yes
                      </Button>
                      <Button
                        onClick={question1No}
                        variant="outline-primary"
                        className="product-btn"
                      >
                        No
                      </Button>
                    </>
                  ) : // Ends counter===0 button set (for Question 1)

                  null}
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

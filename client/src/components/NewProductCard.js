import React, { useState } from 'react';
import '../App.css';
import API from '../utils/API';
import { Card, Container, Button, ListGroup } from 'react-bootstrap';

function NewProductCard(props) {
  // Creating a state that holds which question we are asking
  const [counter, setCounter] = useState(0);

  // counter===0 question/button set event listener functions
  // Question 1 "Yes" onclick function
  const question1Yes = async (event) => {
    event.preventDefault()
    console.log(`Yes Clicked`)
    let item = props.readProductState()
    console.log(`Saving Item ${JSON.stringify(item)}`)
    API.saveUserItem(item).then(res =>{
      console.log(res)
      props.clearProductState();
      // Needed to delay fetching the users saved items as the fetch would happen before the item could save to the DB
      setTimeout(() => {props.getUsersSavedItems(); }, 2000)
    }).catch(err => console.log(err))
    // changing counter to 1, to present the statement
    setCounter(1);
  };

  // Question 1 "No" onclick function
  const question1No = (event) => {
    event.preventDefault();
    // *** NEED to write code that will save the url that was searched, in case the user presses "Back" in the 404 option provided to them...
    // ... if they click this "No" button
    console.log('No has been clicked');
    props.clearProductState();
    props.getUsersSavedItems();
    // setting the counter to 404 to prompt user to check their url entry and try again, or to return to the product page
    setCounter(404);
  };
  // end counter===0

  return (
    <div>
      <Container className="product-container md-4">
        {/* this is the new card */}
        <Card className="md-4 product-card">
          <Card.Title className="mb-3">
            <h2>Item Found</h2>
          </Card.Title>
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
          <Card.Body>
            <Card.Subtitle className="text-muted product-subtext text-center">
              Would you like to save this product to your "Saved Products" list
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
      </Container>
    </div>
  );
}

export default NewProductCard;

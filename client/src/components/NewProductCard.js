import React from 'react';
import '../App.css';
import API from '../utils/API';
import { Card, Container, Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

function NewProductCard(props) {
  // Creating a state that holds which question we are asking
  const { user } = useAuth0();

  const question1Yes = async (event) => {
    event.preventDefault()
    console.log(`Yes Clicked`)
    let item = props.readProductState()
    console.log(`Saving Item ${JSON.stringify(item)} for ${user.email}`)
    API.saveUserItem(user, item).then(res =>{
      console.log(res)
      props.clearProductState();
      // Needed to delay fetching the users saved items as the fetch would happen before the item could save to the DB
      setTimeout(() => {props.getUsersSavedItems(); }, 1000)
    }).catch(err => console.log(err))
  };

  const question1No = (event) => {
    event.preventDefault();
    console.log('No has been clicked');
    props.clearProductState();
    props.getUsersSavedItems();
  };

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

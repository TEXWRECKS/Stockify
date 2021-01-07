import React, { useState } from 'react';
import '../App.css';
import { Card, Row, Col, Button, Form, CardDeck } from 'react-bootstrap';
import Banner from '../assets/images/Stuck at Home - Searching.png';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Index(props) {
  // stores whatever was typed in the input element
  const [userInput, setUserInput] = useState({ url: '' });
  // on change of the element, this will grab the value inputted and set state with that value
  function handleInputChange(event) {
    setUserInput({ url: event.target.value });
  }
  // with the state already set with the url, this will make the call passing the url to the backend
  function handleSearch() {
    console.log('Search button clicked');
    console.log(userInput);
    Axios.post('/api/getItem', userInput)
      .then((res) => {
        // console.log(res.data);
        // Updates the product state on the App.js component
        props.updateProductState(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="App">
      <div className="top-banner">
        We monitor product avaiblity for you, search and save your amazon
        product and we will email you when it is back in stock!
      </div>
      <div className="jumbotron jumbotron-fluid mt-20">
        <div className="container">
          <Row>
            <Col className="search-col md-8">
              <h1 className="search-title">Search for your Product</h1>
              <p className="search-text">
                and we will notify you when it's back in stock.
              </p>
              <Form inline>
                <Form.Control
                  type="search"
                  placeholder="URL or Amazon Product Id"
                  className=" product-search mr-2"
                  onChange={handleInputChange}
                />
                <Button onClick={handleSearch} variant="outline-primary">
                  Search
                </Button>
              </Form>
            </Col>
            <Col className="md-4">
              <img className="banner-photo" src={Banner} alt="bannerphoto" />
            </Col>
          </Row>
        </div>
      </div>
      <div className="container banner">
        <div className="row">
          <CardDeck>
            <Card className="info-card">
              <Card.Body>
                {/* Icon to be added */}
                <Card.Title>Step 1</Card.Title>
                <Card.Text>
                  Find the desired product on Amazon Copy the Amazon product
                  item URL into the Stockify search bar
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="info-card">
              <Card.Body>
                {/* Icon to be added */}
                <Card.Title>Step 2</Card.Title>
                <Card.Text>
                  Save the product to your Saved Products page Select your
                  product notification preferences.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="info-card">
              <Card.Body>
                {/* Icon to be added */}
                <Card.Title>Step 3</Card.Title>
                <Card.Text>
                  We will watch the product for you and email you when the
                  desired price or availability change.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </div>
    </div>
  );
}

export default Index;

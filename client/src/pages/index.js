import React, { useState } from 'react';
import '../App.css';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import Banner from '../assets/images/Stuck at Home - Searching.png';
import API from '../utils/API';

function Index(props) {
  // stores whatever was typed in the input element
  const [userInput, setUserInput] = useState({ url: '' });
  // on change of the element, this will grab the value inputted and set state with that value
  function handleInputChange(event) {
    setUserInput({ url: event.target.value });
  }
  // with the state already set with the url, this will make the call passing the url to the backend
  function handleSearch(){
    console.log("Search button clicked")
    props.updateIsLoadingState(true)
    API.getItem(userInput.url).then(res =>{
      // console.log(res.data);
      // Updates the product state on the App.js component
      props.updateIsLoadingState(false)
      props.updateProductState(res)
    }).catch(err => console.log(err))
  }
  return (
    <div className="App">
      <div className="instructionBanner center">
        <div className="row">
          <Card className="infoBanner" style={{ width: '28rem' }}>
            <div className="row">
              {/* <Card.Img
                className="icon"
                variant="top"
                src={searchIcon}
                style={{ width: 20 }}
              /> */}
              <Card.Body>
                <Card.Text>
                  1. Find the desired product on Amazon Copy the Amazon product
                  item URL into the Stockify search bar
                </Card.Text>
              </Card.Body>
            </div>
          </Card>
          <Card className="infoBanner" style={{ width: '28rem' }}>
            {/* <Card.Img
              className="icon"
              variant="top"
              src={saveIcon}
              style={{ width: 20 }}
            /> */}
            <Card.Body>
              <Card.Text>
                2. Save the product to your Saved Products page Select your
                product notification preferences.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="infoBanner" style={{ width: '30rem' }}>
            {/* <Card.Img
              className="icon"
              variant="top"
              src={shopIcon}
              style={{ width: 20 }}
            /> */}
            <Card.Body>
              <Card.Text>
                3. We will watch the product for you and email you when the
                desired price or availability change.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="jumbotron jumbotron-fluid mt-10">
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
                <img className="banner-photo" src={Banner} alt="" />
              </Col>
            </Row>
          </div>
        </div>
        <div className="container"></div>
      </div>
    </div>
  );
}

export default Index;

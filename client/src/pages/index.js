import React, { useState } from 'react';
import '../App.css';
import { Row, Col, Button, Form } from 'react-bootstrap';
import Banner from '../assets/images/Stuck at Home - Searching.png';
import Axios from 'axios';

function Index() {
  // stores whatever was typed in the input element
  const[userInput, setUserInput] = useState(
    {url: ""})
  // on change of the element, this will grab the value inputted and set state with that value
  function handleInputChange(event){
    setUserInput(
      {url: event.target.value})
  }
  // with the state already set with the url, this will make the call passing the url to the backend
  function handleSearch(){
    console.log("Search button clicked")
    console.log(userInput)
    Axios.post("/api/getItem", userInput).then(res =>{
      console.log(res);
    }).catch(err => console.log(err))
  }
  return (
    <div className="App">
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
                <Button onClick={handleSearch} variant="outline-primary">Search</Button>
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
  );
}

export default Index;

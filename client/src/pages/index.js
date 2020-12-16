import React from 'react';
import '../App.css';
import { Row, Col, Button, Form } from 'react-bootstrap';
import Banner from '../assets/images/Stuck at Home - Searching.png';

function Index() {
  return (
    <div className="App">
      <div class="jumbotron jumbotron-fluid mt-10">
        <div class="container">
          <Row>
            <Col md-8 className="search-col">
              <h1 className="search-title">Search for your Product</h1>
              <p className="search-text">
                and we will notify you when it's back in stock.
              </p>
              <Form inline>
                <Form.Control
                  type="search"
                  placeholder="URL or Amazon Product Id"
                  className=" product-search mr-2"
                />
                <Button variant="outline-primary">Search</Button>
              </Form>
            </Col>
            <Col md-4>
              <img className="banner-photo" src={Banner} alt="" />
            </Col>
          </Row>
        </div>
      </div>
      <div class="container"></div>
    </div>
  );
}

export default Index;

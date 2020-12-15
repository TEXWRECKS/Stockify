import React from 'react';
import '../App.css';
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Card,
  Form,
} from 'react-bootstrap';
import Banner from '../assets/images/Stuck at Home - Searching.png';

function Index() {
  return (
    <div className="App">
      <div class="jumbotron jumbotron-fluid mt-10">
        <div class="container">
          <Row>
            <Col md>
              <Form.Group className="input-col" controlId="formEmail">
                <Form.Label className="search-title">
                  Search for your Product
                </Form.Label>
                <Form.Text className="search-text">
                  and we will notify you when it's back in stock.
                </Form.Text>
                <Form.Control
                  className="product-search"
                  type="search"
                  placeholder="URL or Amazon Product Id"
                />
              </Form.Group>
            </Col>
            <Col md>
              <img className="banner-photo" src={Banner} />
            </Col>
          </Row>
        </div>
      </div>

      <Container>
        <div>
          This is the hompage
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Adress</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="youremail@gmail.com"
                  />
                  <Form.Text className="text-muted">
                    We will never share your email
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="Password" placeholder="Password" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="info">Test</Button>
          </Form>
          <Card>
            <Card.Body>Body</Card.Body>
            <Card.Text>Text</Card.Text>
            <Button variant="danger">Test</Button>
          </Card>
          <Alert variant="primary">This is an alert</Alert>
          <Button>Test</Button>
        </div>
      </Container>
    </div>
  );
}

export default Index;

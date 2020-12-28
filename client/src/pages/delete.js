<Container>
  <div>
    This is the hompage
    <Form>
      <Row>
        <Col className="md">
          <Form.Group controlId="formEmail">
            <Form.Label>Email Adress</Form.Label>
            <Form.Control type="email" placeholder="youremail@gmail.com" />
            <Form.Text className="text-muted">
              We will never share your email
            </Form.Text>
          </Form.Group>
        </Col>
        <Col className="md">
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
</Container>;

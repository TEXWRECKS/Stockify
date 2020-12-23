import React, {useState} from 'react';
import '../App.css';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import Lego from '../assets/images/lego.jpg';


function Product(props) {

  // Creating a state that holds which question we are asking
  const[counter, setCounter] = useState(0);
  
  
  // counter===0 question/button set event listener functions
  // Question 1 "Yes" onclick function
  const question1Yes = (event) => {
    event.preventDefault()
    // *** NEED to write code here to save the product to the saved products list/page

    // changing counter to 1, to present the next question and set of yes and no buttons
    setCounter(1)
  };

  // Question 1 "No" onclick function
  const question1No = (event) => {
    event.preventDefault()
    // *** NEED to write code that will save the url that was searched, in case the user presses "Back" in the 404 option provided to them...
    // ... if they click this "No" button

    // setting the counter to 404 to prompt user to check their url entry and try again, or to return to the product page
    setCounter(404)
    };
    // end counter===0

  
  // counter===1 question/button set event listener functions
  // Question 2 "Yes" onclick function
  const question2Yes = (event) => {
    event.preventDefault()
    // *** NEED to write code here that will add this to the users list to be notified of

    // changing counter to 2, to present the next question and set of yes and no buttons
    setCounter(2)
  };
  
  // Question 2 "No" onclick function
  const question2No = (event) => {
    event.preventDefault()
    // changing counter to 2, to present the next question and set of yes and no buttons
    setCounter(2)
  };
  // end counter===1

  
  // counter===2 question/button set event listener functions
  // Question 3 "Yes" onclick function
  const question3Yes = (event) => {
    event.preventDefault()
    // *** NEED to write code here that will add this to the users list to be notified of

    setCounter(777)
  };
  
  // Question 3 "No" onclick function
  const question3No = (event) => {
    event.preventDefault()
    // if statement to determine if question 2 answer was yes, then move to counter===777 (email form)
    if (question2Yes = true) {
      setCounter(777)
    }
    // or if question 2 was no, then move to counter 420 as the user did not select anything to be notified for
    else if (question2No = true) {
      setCounter(420)
    }
  };
  // end counter===2


  // counter===420 verification question button functions
  // verificationQuestionYes (I'm Sure) on click function
  const verificationQuestionYes = (event) => {
    event.preventDefault()
    // *** NEED to write code here that prompts the user to try another product...
    // ... and that clears the search
    setCounter(0)
  }

  // verificationQuestionNo (Take Me Back!) on click function
  const verificationQuestionNo = (event) => {
    event.preventDefault()
    // *** Need to write code here that performs the url search again and brings it back to question two (first notification question)

    setCounter(1)
  }

  
  // counter===404 statement/button set event listener functions
  const urlCheckClear = (event) => {
    event.preventDefault()
    // Resets the counter back to 0, to allow user to start a new search
    setCounter(0)
  };

  const urlCheckReturn = (event) => {
    event.preventDefault()
    // *** NEED to write code that performs the search function with that saved url from question1No variable, IF this "Return" button is clicked...
    // ... and sets the counter to (0) after performing that search.
  };
  // end counter===404 statement/button set

  // counter===777
  const emailSubmit = (event) => {
    event.preventDefault()
    // *** NEED to write code here that saves the users email (emailEntry) with their product & notification preferences
    // *** NEED to write code here that uses the user's email (emailEntry) to send a notification to the user (first notification which confirms their product notification requests)
    // *** NEED to write code here that triggers the web scrapping for the requested notification types for that product, and triggers notification on change
  }

  
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
        <Card className="product-card">
          <Card.Body>
            <Card.Title className="product-found">Product Found</Card.Title>

            {/* Counter===0 Question (Question 1) */}
            {counter===0 ?
            <Card.Subtitle className="mb-2 text-muted product-subtext">
              Is this the product you were looking for?
            </Card.Subtitle>
            // Ends counter===0 question (Question 1)

            // Counter===1 question (Question 2)
            : counter===1 ?
            <Card.Subtitle className="mb-2 text-muted product-subtext">
            Do you want to be notified of product availability changes?
            </Card.Subtitle>
            // Ends counter===1 question (Question 2)

            // Counter===2 question (Question 3)
            : counter===2 ?          
            <Card.Subtitle className="mb-2 text-muted product-subtext">
              Do you want to be notified of price changes?
            </Card.Subtitle>
            // Ends counter===2 question (Question 3)

            // Counter===404 statement
            // Message if the product search does not turn up the product the user is looking for
            : counter===404 ?
            <Card.Subtitle className="mb-2 test-muted product-subtext">
              Please check your Amazon product URL and try again, or find another product to get notifications for
            </Card.Subtitle>
            // Ends counter===404 statement

            // Counter===777 prompt
            // Prompt for user to enter their email address and press submit to receive notifications requested
            : counter===777 ?
            <Card.Subtitle className="mb-2 test-muted product-subtext">
              Enter your email address and press "Submit" to receive requested notifications
            </Card.Subtitle>
            // Ends counter===777 prompt

            // Counter===420 question
            : counter===420 ?
            <Card.Subtitle className="mb-2 test-muted product-subtext">
              Are you sure you don't want any availability or price change notifications for this product?
            </Card.Subtitle>
            // Ends counter===420 question

            : null}


            <Container className="product-output">
              <Row>
                <Col md>
                  <img src={Lego} alt="" className="product-photo" />
                </Col>
                <Col classname="product-details" md>
                  {/* this needs to be props and also have a limit on character length */}
                  <Card.Title className="product-name">
                    LEGO Technic Bugatti Chiron 42083 Race Car Building Kit and
                    Engineering Toy, Adult Collectible Sports Car with Scale
                    Model Engine (3599 Pieces)
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted product-price">
                    Price: <strong>$349.95</strong>
                  </Card.Subtitle>
                  <Card.Text className="product-status">
                    <strong style={{ color: 'red' }}>Out of Stock</strong>
                  </Card.Text>

                  {/* Counter===0 button set (for Question 1)*/}
                  {counter===0 ?
                  <>
                  <Button onClick={() => question1Yes} variant="success" className="product-btn">
                    Yes
                  </Button>
                  <Button onClick={() => question1No} variant="outline-primary" className="product-btn">
                    No
                  </Button>
                  </>
                  // Ends counter===0 button set (for Question 1)

                  // Counter===1 button set (for Question 2)
                  : counter===1 ?
                  <>
                  <Button onClick={() => question2Yes} variant="success" className="product-btn">
                    Yes
                  </Button>
                  <Button onClick={() => question2No} variant="outline-primary" className="product-btn">
                    No
                  </Button>
                  </>
                  // Ends counter===1 button set (for Question 2)

                  // Counter===2 button set (for Question 3)
                  : counter===2 ?
                  <>
                  <Button onClick={() => question3Yes} variant="success" className="product-btn">
                    Yes
                  </Button>
                  <Button onClick={() => question3No} variant="outline-primary" className="product-btn">
                    No
                  </Button>
                  </>
                  // Ends counter===2 button set (for Question 3)

                  // Counter===404 button set (for a "No" on Question 1)
                  : counter===404 ?
                  <>
                  <Button onclick={() => urlCheckClear} variant="success" className="product-btn">
                    Clear
                  </Button>
                  <Button onClick={() => urlCheckReturn} variant="success" className="product-btn">
                    Return
                  </Button>
                  </>
                  // Ends counter===404 button set

                  // Counter===777 email address text entry and submit button
                  : counter===777 ?
                  <>
                  <input handleFormSubmit={() => emailEntry} type="text"/> {/* *** NEED to add to this to provide text box for user to enter email address */}
                  <Button onclick={() => emailSubmit} variant="success" className="product-btn">
                    Submit
                  </Button>
                  </>
                  // Ends counter 777

                  // Counter===420 - verification question, confirming user is sure they don't want to be notified of product availability or price changes
                  : counter===420 ?
                  <>
                  <Button onClick={() => verificationQuestionYes} variant="success" className="product-btn">
                    I'm Sure
                  </Button>
                  <Button onClick={() => verificationQuestionNo} variant="success" className="product-btn">
                    Take Me Back!
                  </Button>
                  </>

                  : null}

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

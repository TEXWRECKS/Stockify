import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import saveIcon from '../assets/images/save.png';
import searchIcon from '../assets/images/search.png';
import shopIcon from '../assets/images/celebrate.png';

const Banner = () => {
  const bannerinfo = [
    {
      image: { searchIcon },
      title: 'Step 1',
      description: `Find the product you are looking for on Amazon. 
      Copy the URL of the exact item into the Stockify search bar.`,
    },
    {
      image: { saveIcon },
      title: 'Step 2',
      description: `Approve the item, add your email & save it to Stockify. We will watch the product for you, notifying you when the item is back in stock or the price drops. `,
    },
    {
      image: { shopIcon },
      title: 'Step 3',
      description: `We will send you an email when your product is ready to purchase.`,
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title class="card-title blue">{card.title}</Card.Title>
          <Card.Subtitle class="banner-description">
            {card.description}
          </Card.Subtitle>
          <Card.Text class="left">{card.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  };
};

import React from 'react';
import SavedProductCard from '../components/SavedProductCard';
import { Container } from 'react-bootstrap';

function savedproducts(props) {
  return (
    <Container className="product-container">
      <h1 className="product-saved-heading">All Saved Products</h1>

      {props.savedProducts.productData.map((savedProduct) =>
          <SavedProductCard key={savedProduct._id} savedProduct={savedProduct} getUsersSavedItems={props.getUsersSavedItems} user={props.user}/>
        )}
    </Container>
  );
}

export default savedproducts;

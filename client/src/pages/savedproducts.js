import React from 'react';
import ProductCard from '../components/ProductCard';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

function products(props) {
  return (
    <Container classname="product-container">
      <h1 className="product-saved-heading">All Saved Products</h1>

      {props.savedProducts.productData.map((savedProduct) =>
          <ProductCard savedProduct={savedProduct}/>
        )}
    </Container>
  );
}

export default products;

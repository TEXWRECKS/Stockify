import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/index';
import Products from './pages/products';
import Navbar from './components/navbar';
import ProductCard from './components/product';
import SavedProducts from './components/savedProducts';

function App() {
  const [theme, setTheme] = useState('light');
  const [product, setProduct] = useState({
    itemTitle: '',
    itemUrl: '',
    itemImage: '',
    itemPrice: 0,
    itemStatus: '',
    itemPriceAlert: 0,
  });

  function updateProductState(item) {
    setProduct({
      itemTitle: item.data.title,
      itemUrl: item.data.url,
      itemImage: item.data.image,
      itemPrice: item.data.price,
      itemStatus: item.data.availability,
    });
  }

  return (
    <Router>
      <Navbar />
      <div>
        <Route
          exact
          path="/"
          render={() => <Index updateProductState={updateProductState} />}
        />
        <Route exact path="/products" component={Products} />
        {product.itemTitle != '' && (
          <ProductCard item={product} updateProductState={updateProductState} />
        )}
        <SavedProducts />
      </div>
    </Router>
  );
}

export default App;

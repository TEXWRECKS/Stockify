import React, { useState } from 'react';
// import './components/Icons';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/index';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import ProductCard from './components/Product.js';
import SavedProducts from './components/SavedProducts';
import Spinner from './components/Spinner';

function App() {
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState({});
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

  function clearProductState() {
    setProduct({
      itemTitle: '',
      itemUrl: '',
      itemImage: '',
      itemPrice: 0,
      itemStatus: '',
      itemPriceAlert: 0,
    });
  }

  function readProductState() {
    return product;
  }

  function updateIsLoadingState(bool) {
    setIsLoading(bool);
  }

  return (
    <Router>
      <Navbar />
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <Index
              updateProductState={updateProductState}
              clearProductState={clearProductState}
              updateIsLoadingState={updateIsLoadingState}
            />
          )}
        />
        <Route exact path="/products" component={Products} />
        {isLoading == true && <Spinner />}
        {product.itemTitle != '' && (
          <ProductCard
            item={product}
            updateProductState={updateProductState}
            clearProductState={clearProductState}
            readProductState={readProductState}
          />
        )}
        <SavedProducts />
      </div>
    </Router>
  );
}

export default App;

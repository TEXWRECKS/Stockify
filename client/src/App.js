import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/index';
import Products from './pages/savedproducts';
import Navbar from './components/Navbar';
import ProductCard from './components/Product';
import SavedProducts from './pages/savedproducts';
import Spinner from './components/Spinner';
import API from './utils/API'

function App() {
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState({});
  const [savedProducts, setSavedProducts] = useState({
    productData: null
  });
  const [product, setProduct] = useState({
    itemTitle: null,
    itemUrl: null,
    itemImage: null,
    itemPrice: null,
    itemStatus: null,
    itemPriceAlert: null,
  });

  function updateProductState(item) {
    setProduct({
      itemTitle: item.data.title,
      itemUrl: item.data.url,
      itemImage: item.data.image,
      itemPrice: item.data.price,
      itemStatus: item.data.availability,
    });
  };

  function clearProductState() {
    setProduct({
      itemTitle: null,
      itemUrl: null,
      itemImage: null,
      itemPrice: null,
      itemStatus: null,
      itemPriceAlert: null,
    });
  };

  function readProductState() {
    return product;
  };

  function updateIsLoadingState(bool){
    setIsLoading(bool);
  };

  function getUsersSavedItems(){
    API.getUsersSavedItems("smrodriguez88@gmail.com").then(res =>{
      console.log(`User saved item data retrieved ${JSON.stringify(res.data)}`)
      setSavedProducts({productData: null})
      setSavedProducts({productData: res.data})
    });
  };

  useEffect(() => {
    getUsersSavedItems()
},[]);

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
        {isLoading == true &&
        <Spinner />
        }
        {product.itemTitle != null && 
          <ProductCard item={product} updateProductState={updateProductState} clearProductState={clearProductState} readProductState={readProductState} getUsersSavedItems={getUsersSavedItems}/>
        }
        {savedProducts.productData != null && 
          <SavedProducts savedProducts={savedProducts}/>
        }
        
      </div>
    </Router>
  );
}

export default App;

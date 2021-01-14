import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Index from './pages/index';
=======
import Index from './pages/Index';
import Products from './pages/savedproducts';
>>>>>>> origin/main
import Navbar from './components/Navbar';
import NewProductCard from './components/NewProductCard';
import SavedProducts from './pages/savedproducts';
import Spinner from './components/Spinner';
<<<<<<< HEAD
import API from './utils/API'
import { useAuth0 } from '@auth0/auth0-react';
import { If } from 'jsx-control-statements';
=======
import API from './utils/API';
>>>>>>> origin/main

function App() {
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState({});
  const [savedProducts, setSavedProducts] = useState({
    productData: null,
  });
  const { user } = useAuth0();
  const [product, setProduct] = useState({
    itemTitle: null,
    itemUrl: null,
    itemImage: null,
    itemPrice: null,
    itemStatus: null,
    itemPriceAlert: null,
    itemPriceThreshold: null,
    itemAvailabilityAlert: null
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
      itemTitle: null,
      itemUrl: null,
      itemImage: null,
      itemPrice: null,
      itemStatus: null,
      itemPriceAlert: null,
      itemPriceThreshold: null,
      itemAvailabilityAlert: null
    });
  }

  function readProductState() {
    return product;
  }

  function updateIsLoadingState(bool) {
    setIsLoading(bool);
  }

<<<<<<< HEAD
  function getUsersSavedItems(){
    API.getUsersSavedItems("smrodriguez88@gmail.com").then(res =>{
      console.log(`User saved item data retrieved ${JSON.stringify(res.data)}`)
      setSavedProducts({productData: res.data})
=======
  function getUsersSavedItems() {
    API.getUsersSavedItems('smrodriguez88@gmail.com').then((res) => {
      console.log(`User saved item data retrieved ${JSON.stringify(res.data)}`);
      setSavedProducts({ productData: null });
      setSavedProducts({ productData: res.data });
>>>>>>> origin/main
    });
  }

  function displaySavedProducts(){
    if(savedProducts.productData){
      return (<SavedProducts savedProducts={savedProducts}/>)
    } else {
      return (<div className="text-center"><h1>No Products Saved</h1></div>)
    }
  };


  useEffect(() => {
    getUsersSavedItems();
  }, []);

  return (
    <Router>
     {console.log({user})}
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
<<<<<<< HEAD
          {isLoading == true && <Spinner />}
          {product.itemTitle && 
            <NewProductCard 
              item={product} 
              updateProductState={updateProductState} 
              clearProductState={clearProductState} 
              readProductState={readProductState} 
              getUsersSavedItems={getUsersSavedItems}
              />
          }

          {user ?
            displaySavedProducts() :
            <div className="text-center"><h1>Please LOGIN to Save & View Your Products</h1></div>
          }
          
=======
        <Route exact path="/products" component={Products} />
        {isLoading == true && <Spinner />}
        {product.itemTitle != null && (
          <ProductCard
            item={product}
            updateProductState={updateProductState}
            clearProductState={clearProductState}
            readProductState={readProductState}
            getUsersSavedItems={getUsersSavedItems}
          />
        )}
        {savedProducts.productData != null && (
          <SavedProducts savedProducts={savedProducts} />
        )}
>>>>>>> origin/main
      </div>
    </Router>
  );
}

export default App;

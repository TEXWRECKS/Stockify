import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/index';
import Navbar from './components/Navbar';
import NewProductCard from './components/NewProductCard';
import SavedProducts from './pages/savedproducts';
import Spinner from './components/Spinner';
import API from './utils/API'
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const [isLoading, setIsLoading] = useState({});
  const [savedProducts, setSavedProducts] = useState({
    productData: null,
  });
  const { user, isAuthenticated } = useAuth0();
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

  function getUsersSavedItems(){
    if (isAuthenticated){
      console.log(`Obtaining saved items for user ${JSON.stringify(user.email)}`)
      API.getUsersSavedItems(user.email).then(res =>{
        console.log(`User saved item data retrieved ${JSON.stringify(res.data)}`)
        setSavedProducts({productData: res.data})
    });
  };
  };

  function displaySavedProducts(){
    if(savedProducts.productData){
      return (<SavedProducts savedProducts={savedProducts} getUsersSavedItems={getUsersSavedItems} user={user}/>)
    } else {
      return (<div className="text-center"><h1>No Products Saved</h1></div>)
    }
  };


  useEffect((isAuthenticated, getUsersSavedItems) => {
    if (isAuthenticated){
        getUsersSavedItems();
  }}, []);

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
          {isLoading === true && <Spinner />}
          {product.itemTitle && 
            <NewProductCard 
              item={product} 
              updateProductState={updateProductState} 
              clearProductState={clearProductState} 
              readProductState={readProductState} 
              getUsersSavedItems={getUsersSavedItems}
              />
          }

          {isAuthenticated ?
            displaySavedProducts() :
            <div className="text-center"><h1>Please LOGIN to Save & View Your Products</h1></div>
          }
          
      </div>
    </Router>
  );
}

export default App;

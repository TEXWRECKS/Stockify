import React, { useState, useEffect } from 'react';
import './components/Icons';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/index';
import Products from './pages/products';
import Navbar from './components/Navbar';
import ProductCard from './components/Product';
import SavedProducts from './components/SavedProducts';
import Spinner from './components/Spinner';
import API from './utils/API'

function App() {
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState({});
  const [savedProducts, setSavedProducts] = useState({
    productData: ''
  });
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
  };

  function clearProductState(){
    setProduct({
      itemTitle: "",
      itemUrl: "",
      itemImage: "",
      itemPrice: 0,
      itemStatus: "",
      itemPriceAlert: 0,
    })
  }

  function readProductState(){
    return product;
  }

  function updateIsLoadingState(bool){
    setIsLoading(bool)
  }

  useEffect(() => {
    API.getUsersSavedItems("smrodriguez88@gmail.com").then(res =>{
      console.log(`User saved item data retrieved ${JSON.stringify(res.data)}`)
      setSavedProducts({productData: res.data})
    });
},[]);

  return (
    <Router>
      <Navbar />
      <div>
        <Route exact path="/" render={() => (<Index updateProductState={updateProductState} clearProductState={clearProductState} updateIsLoadingState={updateIsLoadingState}/>)} />
        <Route exact path="/products" component={Products} />
        {isLoading == true &&
        <Spinner />
        }
        {product.itemTitle != "" && 
          <ProductCard item={product} updateProductState={updateProductState} clearProductState={clearProductState} readProductState={readProductState}/>
        }
        {savedProducts.productData.map((savedProduct) =>
          <SavedProducts savedProduct={savedProduct}/>
        )}
        
      </div>
    </Router>
  );
}

export default App;

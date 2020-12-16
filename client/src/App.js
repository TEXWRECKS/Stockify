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
  return (
    <Router>
      <Navbar />
      <div>
        <Route exact path="/" component={Index} />
        <Route exact path="/products" component={Products} />
        <ProductCard />
        <SavedProducts />
      </div>
    </Router>
  );
}

export default App;

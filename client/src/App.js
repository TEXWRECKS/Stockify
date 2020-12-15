import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/index';
import Products from './pages/products';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Index} />
        <Route exact path="/products" component={Products} />
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import Header from './containers/Header';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import ProductDetails from './containers/ProductDetails';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Header/>
          <Routes>
            <Route path="/" exact element={<ProductListing/>}></Route>
            <Route path="/product/:productId" exact element={<ProductDetails/>}></Route>
            <Route>404 not found</Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;

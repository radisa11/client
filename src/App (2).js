import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SingleProduct from './views/singleProduct';
import AllProducts from './views/allProducts';
import CreateProduct from './components/createProduct';
import UpdateProduct from './components/updateProduct';
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar navbar-light bg-light">
          <h3>Here are the best products ever! </h3>
        <Link to="/">All Products</Link></div>
        <Switch>
          <Route exact path="/"> 
          <div className="main">
            <div className="mainTop"> <CreateProduct /></div>
            <div className="mainBottom"> <AllProducts /> </div>
          </div>
          </Route>
          <Route exact path="/products/:_id">
            <SingleProduct/>
          </Route>
          <Route exact path="/products/:_id/update"> <UpdateProduct/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Cart from "./Cart/Cart";
import Default from "./Default";
import Details from "./Details";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Model from "./Model";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Model />
      </React.Fragment>
    );
  }
}
export default App;

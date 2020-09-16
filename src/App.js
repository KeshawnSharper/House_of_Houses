import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./Components";
import Landing from "./Components/Landing";
import Search from "./Components/Search/search";
import { fetchProperties } from "./actions/actions";
import { connect } from "react-redux";
import axios from "axios";
import Loader from "react-loader-spinner";
import Product from "./Components/Product/Product";
const App = (props) => {
  useEffect(() => {
    props.fetchProperties("Philadelphia", "PA");
  }, []);

  return props.resetProperties.length === 0 ? (
    <Loader type="Puff" color="#00BFFF" height={100} width={100} />
  ) : (
    <Router>
      <Provider>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/search/:num" component={Search} />
          <Route exact path="/product/:num" component={Product} />
        </Switch>
      </Provider>
    </Router>
  );
};
function mapStateToProps(state) {
  return {
    resetProperties: state.resetProperties
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchProperties: (city, state) => {
      dispatch(fetchProperties(city, state));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

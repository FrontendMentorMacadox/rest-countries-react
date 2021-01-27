import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import CountryPage from "./pages/CountryPage";
import Home from "./pages/Home";
import Error from "./pages/Error";

// Components
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/country/:code' children={<CountryPage />}></Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

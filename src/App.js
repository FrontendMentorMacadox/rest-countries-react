import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import CountryPage from "./pages/CountryPage";
import Home from "./pages/Home";
import Error from "./pages/Error";

// Components
import Header from "./components/Header";

import { useGlobalContext } from "./context";

const App = () => {
  const { darkMode } = useGlobalContext();

  return (
    <div className={`app-wrapper ${darkMode ? "dark-mode" : ""}`}>
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
    </div>
  );
};

export default App;

import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from "./navbar";
import Quotes from "../navbar components/quotes";
import Calculator from "../navbar components/calculator";
import Drum from "../navbar components/drum";
import Previewer from "../navbar components/previewer";
import Todo from "../navbar components/todo";
import Home from "../navbar components/home";

const Nav = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/quotes" component={Quotes} />
          <Route
            path="/calculator"
            component={Calculator}
          />
          <Route path="/drum" component={Drum} />
          <Route path="/previewer" component={Previewer} />
          <Route path="/todo" component={Todo} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default Nav;

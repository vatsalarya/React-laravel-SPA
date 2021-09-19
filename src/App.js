import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Books from "./components/Books";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <div>
        <NavLink to="/books">Books</NavLink>
      </div>
      <Switch>
        <Route path="/books" component={Books} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;

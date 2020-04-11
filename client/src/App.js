import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Client from "./pages/Client";
import AddClient from "./pages/AddClient";
import Project from "./pages/Project";
import Product from "./pages/Product";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
        <Route exact path={["/", "/login"]}>
            <Login />
          </Route>
          <Route exact path={"/home"}>
            <Home />
          </Route>
          <Route exact path={"/client"}>
            <Client />
          </Route>
          <Route exact path={"/addClient"}>
            <AddClient />
          </Route>
          <Route exact path={"/project"}>
            <Project />
          </Route>
          <Route exact path={"/product"}>
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;

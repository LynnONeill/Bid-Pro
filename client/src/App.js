import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Client from "./pages/Client";
import AddClient from "./pages/AddClient";
import Admin from "./pages/Admin";
import Project from "./pages/Project";
import Product from "./pages/Product";
import Nav from "./components/Nav";
import ClientContext from "./utils/GlobalState";
import API from "./utils/API";

function App() {
  const [selectedClient, setSelectedClient] = useState({});

  function handleClick(event) {
    // Get the title of the clicked button
    if (event) {
      const info = JSON.parse(event.target.closest(".clientLink").getAttribute("data-value"));
      console.log(info)
      console.log(!info.clientID)
      if (!info.clientID) {
        setSelectedClient({ ...selectedClient, ...info })
      } else {

        setSelectedClient({ ...selectedClient, info })

      }
    }
  }
  function pushClient(event) {

    function addClient(newClient) {
      console.log('LOGGING')
      console.log(newClient)
      API.addClient(newClient)
        .then(res => {
          console.log(res)
          setSelectedClient({ ...selectedClient, ...res.data })
          console.log(selectedClient)
        })
    }
    const info = JSON.parse(event.target.closest(".clientLink").getAttribute("data-value"));
    console.log("pushClient hit here")
    console.log(info)
    addClient(info)
  }


  return (
    <Router>
      <div>
        <Nav />
        <ClientContext.Provider value={{ selectedClient, handleClick, pushClient }}>
          <Switch>
            <Route exact path={["/", "/login"]}>
              <Login />
            </Route>
            <Route exact path={"/home"} component={Home} />

            <Route exact path={"/client"}>
              <Client />
            </Route>
            <Route exact path={"/admin"}>
              <Admin />
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
        </ClientContext.Provider>
      </div>
    </Router>

  );
}

export default App;

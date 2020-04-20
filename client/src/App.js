import React, { useState }  from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Client from "./pages/Client";
import AddClient from "./pages/AddClient";
import Admin from "./pages/Admin";
import Project from "./pages/Project";
import Product from "./pages/Product";
import Nav from "./components/Nav";
import ClientContext from "./utils/GlobalState"

function App() {
  const [selectedClient,setSelectedClient] = useState({});

  function handleClick(event) {
    // Get the title of the clicked button
    console.log(event.target.closest(".clientLink").getAttribute("data-value"))
    if (event){
    const info = JSON.parse(event.target.closest(".clientLink").getAttribute("data-value"));
    console.log(info)
      setSelectedClient({...selectedClient,...info})
    }
  }

  return (
    <Router>
      <div>
        <Nav />
        <ClientContext.Provider value={{selectedClient,handleClick}}>
        <Switch>
        <Route exact path={["/", "/login"]}>
            <Login />
          </Route>
          <Route exact path={"/home"} component={Home}/>
          
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

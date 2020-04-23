import React, { useState }  from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory, useLocation} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Client from "./pages/Client";
import AddClient from "./pages/AddClient";
import Admin from "./pages/Admin";
import Project from "./pages/Project";
import Product from "./pages/Product";
import Navbar from "./components/Nav";
import ClientContext from "./utils/GlobalState";
import AuthContext from './utils/AuthContext';
import { NavItem } from 'react-bootstrap';
import API from "./utils/API";


function App() {
  const [selectedClient,setSelectedClient] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // login function
  function handleAuth(valUser, cb) {
    API.valUsers(valUser)
      .then(res => {
        setIsLoggedIn(true);
        setTimeout(cb, 100);
      }  
    )
    .catch(err => console.log(err))   
  }

  // logout function
  function handleLogout (obj, cb) {
      setIsLoggedIn(false);
      setTimeout(cb, 100);
  }  

  function handleClick(event) {
    // Get the title of the clicked button
    console.log(event.target.closest(".clientLink").getAttribute("data-value"))
    if (event){
    const info = JSON.parse(event.target.closest(".clientLink").getAttribute("data-value"));
    console.log(info)
      setSelectedClient({...selectedClient,...info})
    }
  }

 function PrivateRoute({ children, ...rest }) {
   console.log(isLoggedIn)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
} 

  return (
    <Router>
      <div>
        <ClientContext.Provider value={{selectedClient,handleClick}}>
          <AuthContext.Provider value={{isLoggedIn, handleAuth, handleLogout}}>
          <Navbar />
        <Switch>
        <Route exact path={["/", "/login"]}>
            <Login />
          </Route>
          <PrivateRoute path={"/home"}>
            <Home />
          </PrivateRoute>
          <PrivateRoute path={"/client"}>
            <Client />
          </PrivateRoute>
          <PrivateRoute path={"/admin"}>
            <Admin />
          </PrivateRoute>
          <PrivateRoute path={"/addClient"}>
            <AddClient />
          </PrivateRoute>
          <PrivateRoute path={"/project"}>
            <Project />
          </PrivateRoute>
          <PrivateRoute path={"/product"}>
            <Product />
          </PrivateRoute>
        </Switch>
        </AuthContext.Provider>
        </ClientContext.Provider>
      </div>
    </Router>
   
  );
}

export default App;

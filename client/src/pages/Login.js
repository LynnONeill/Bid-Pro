import React from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";



function Login() {
    

    function loadTest() {
        API.test()
          .then(res => 
            console.log(res)
          )
          .catch(err => console.log(err));
      };
      loadTest();

    return (
        <div>
            <h1 className="text-center">Login Page</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
               
                <button 
                    type="submit" 
                    className="btn btn-primary">
                        Submit
                </button>
               
            </form>

            <Link to="/Home">Temp link to homepage</Link>

        </div>
        
    );
}

export default Login;
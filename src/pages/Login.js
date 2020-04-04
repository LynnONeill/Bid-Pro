import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";



function Login() {
    return (
        <div>
            <Nav />
            <h1 className="text-center">Login Page</h1>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
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
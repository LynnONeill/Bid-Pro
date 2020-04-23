import React, { useState, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import API from "../utils/API";
import Wrapper from '../components/Wrapper';
import AuthContext from '../utils/AuthContext';

function Login() {
    
    const history = useHistory();
    const location = useLocation();

    const initialForm = {email: '', password: ''}
    const [valUser, setValUser] = useState(initialForm);
    const {isLoggedIn, handleAuth} = useContext(AuthContext);

    // grab info from input
    const loginData = event => {
        const { name, value } = event.target
        console.log(name)
        console.log(value)
        setValUser({ ...valUser, [name]: value })
    }


      function validateUser () {
        console.log(valUser)
        let { from } = location.state || { from: { pathname: "/" } };
        handleAuth(valUser, () => {
            history.push('/home')
        })
      }

    return (
        <Wrapper>
        <div>
            <div className="logo">
                <img alt="Affordable Fence and Gates Logo" src="logo.png" />
            </div>
            <h1 className="text-center">Welcome</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input 
                    type="email" className="form-control"
                    name="email"
                    value={valUser.email}
                    onChange={loginData}
                    id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input 
                    type="password" 
                    name="password"
                    value={valUser.password}
                    onChange={loginData}
                    className="form-control" 
                    id="exampleInputPassword1" placeholder="Password"/>
                </div>
               
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={() => validateUser()}>
                        Log In
                </button>
               
            </form>
           
        </div>
        </Wrapper>
    );
}

export default Login; 
import React from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Wrapper from '../components/Wrapper';


function Login() {
    

    // function loadTest() {
    //     API.test()
    //       .then(res => 
    //         console.log(res)
    //       )
    //       .catch(err => console.log(err));
    //   };
    //   loadTest();

      function validateUser(email,password) {
          console.log('click')
          API.valUsers()
          .then(function() {
            
            window.location.replace('/home')
          }  
        )
        .catch(err => console.log(err))
      }

    return (
        <Wrapper>
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
                    type="button" 
                    className="btn btn-primary"
                    onClick={() => validateUser()}>
                        Log In
                </button>
               
            </form>

            <Link to="/Home">Temp link to homepage</Link>
           
        </div>
        </Wrapper>
    );
}

export default Login; 
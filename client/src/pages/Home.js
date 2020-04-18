import { Link } from "react-router-dom";
import Container from "../components/Grid";
import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import Wrapper from '../components/Wrapper';
import ClientContext from "../utils/GlobalState"
import API from "../utils/API";
import React, { useEffect, useState, useContext } from "react";
import ClientList from "../components/ClientList";

function AddClient() {
    return(

      <Wrapper>

        <Container fluid>
      
            <div>
                
            <h1 style= {{textAlign: "right"}}>  Add New Client <FaPlus/>  </h1>
            
            <form>
  <label>
    existing clients go here
    <input type="text" name="name" />
  </label>
 
</form>

       </div>
        
        <div>
             <h1 className="text-center">Home Page(temp text)</h1>
             <Link to="/Project">Temp link to project page</Link>
             <br></br>
             <Link to="/Client">Temp link to client page</Link>
             <br></br>
             <Link to="/Login">Temp link back to Login page</Link>
             <br></br>
             <Link to="/Product">Temp link to Product Page</Link>
             <br></br>
             <Link to="/AddClient">Temp link to Add Client page</Link>
        </ Container >
        </Wrapper>
    );
}
export default AddClient;
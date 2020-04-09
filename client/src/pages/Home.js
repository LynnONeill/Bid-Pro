import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Grid";
import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
function AddClient() {
    return(
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

        </Container>

        
        
    );
}
export default AddClient;
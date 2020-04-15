import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Grid";
import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import ClientContext from "../utils/GlobalState"

function AddClient() {
  const { handleClick } = useContext(ClientContext);
  const client =JSON.stringify({
    id: "1",
    name: "2",
    businessName:"3",
    email:"4",
    address:"5",
    addressTwo:"6",
    city:"7",
    state:"8",
    zip:"9",
    notes:"0"
  })
  const client2 =JSON.stringify({
    id: "1a",
    name: "2s",
    businessName:"f3",
    email:"4f",
    address:"5g",
    addressTwo:"g6",
    city:"7j",
    state:"8l",
    zip:"9;",
    notes:"0'"
  })
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
        
        <div>
             <h1 className="text-center">Home Page(temp text)</h1>
             <Link to="/Project">Temp link to project page</Link>
             <br></br>
             <Link to="/Client" onClick={handleClick}  data-value={client}>Temp link to client page</Link>
             <br></br>
             <Link to="/Login" onClick={handleClick}  data-value={client2}>Temp link back to Login page</Link>
             <br></br>
             <Link to="/Product">Temp link to Product Page</Link>
             <br></br>
             <Link to="/AddClient">Temp link to Add Client page</Link>
             <br></br>
             <Link to="/Admin">Temp link to Admin page</Link>        
          </div>

        </ Container >
    );
}
export default AddClient;
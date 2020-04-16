import { Link } from "react-router-dom";
import Container from "../components/Grid";
import { Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa"
import ClientContext from "../utils/GlobalState"
import API from "../utils/API";
import React, { useEffect, useState, useContext } from "react";
import ClientList from "../components/ClientList";



function AddClient() {
  const [clients,setClients] = useState([]);
  useEffect(() => {
    // Api call to get product and feature data //
    API.getAllClients().then(res => {
      console.log(res)
      setClients(res.data)
    }
    )
      .catch(err => console.log(err))

  }, []);



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



  return (
    <Container fluid>

      <div>

        <h1 style={{ textAlign: "right" }}>  Add New Client <FaPlus />  </h1>

        <form>
          <label>
            {clients.map(client=> {
                return <ClientList 
                 value = {client}
                 key = {client.id}
                 />
            })}
         
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
      </div>


    </Container >
  );

}
export default AddClient;
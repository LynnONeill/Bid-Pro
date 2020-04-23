import React,{ useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Grid";
import {Form, Col, Button} from "react-bootstrap";
import Wrapper from '../components/Wrapper';
import API from '../utils/API';
import ClientContext from "../utils/GlobalState";

function AddClient(props) {

    const {  pushClient, handleClick } = useContext(ClientContext);

    const initialForm = {
    name: '',
    businessName: '',
    phoneNumber: 0,
    email:'',
    address:'',
    addressTwo:'',
    city:'',
    state:'',
    zip: 0,
    notes:''
    }

    const  [newClient, setNewClient] = useState(initialForm);

    
    let added;

    const handleInputChange = event => {
        const { name, value } = event.target
        console.log(name)
        console.log(value)
        setNewClient({ ...newClient, [name]: value })
        console.log(newClient)
        added = JSON.stringify(newClient)
        console.log(added)
        
       
      }

      

    return(
        <Wrapper>
        <Container>
        
        <h1>Add Client</h1>
        <form>
            <Form.Group>
                <Form.Label>Client Name:</Form.Label>
                <Form.Control 
                    type="input" 
                    placeholder="name" 
                    value={newClient.name}
                    onChange={handleInputChange}
                    name="name"
                />
                <Form.Label>Business Name:</Form.Label>
                <Form.Control 
                    type="input" 
                    placeholder="enter business name" 
                    value={newClient.businessName}
                    onChange={handleInputChange}
                    name="businessName"
                />
            </Form.Group>         
        <Form.Row>
            <Form.Group as={Col}  controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="email" 
                    value={newClient.email}
                    onChange={handleInputChange}
                    name="email"
                />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control 
                    type="phoneNumber" 
                    placeholder="phone" 
                    value={newClient.phoneNumber}
                    onChange={handleInputChange}
                    name="phoneNumber"
                />
            </Form.Group>
        </Form.Row>
            

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control 
                    type="input" 
                    placeholder="address" 
                    value={newClient.address}
                    onChange={handleInputChange}
                    name="address"
                     />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Address 2</Form.Label>
                <Form.Control 
                    type="input" 
                    placeholder="address 2" 
                    value={newClient.addressTwo}
                    onChange={handleInputChange}
                    name="addressTwo"
                     />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control 
                    type="input" 
                    placeholder="city" 
                    value={newClient.city}
                    onChange={handleInputChange}
                    name="city"
                     />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                        as="select" 
                        type="input" 
                        placeholder="state" 
                        value={newClient.state}
                        onChange={handleInputChange}
                        name="state">
                            <option>Choose...</option>
                            <option>AZ</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control 
                    type="input" 
                    placeholder="zip" 
                    value={newClient.zip}
                    onChange={handleInputChange}
                    name="zip"
                     />  
                </Form.Group>
            </Form.Row>
            <Form.Group>
                <Form.Label>Notes:</Form.Label>
                <Form.Control as="textarea" 
                rows="4" 
                type="input" 
                placeholder='notes' 
                value={newClient.notes}
                onChange={handleInputChange}
                name="notes"
                />
             </Form.Group>
             <Link to="/Client" className="clientLink" onClick={pushClient} data-value={JSON.stringify(newClient)}>
                <Button variant="primary" type="button">
                    Submit
                </Button>
            </Link>
     
        </form>

        <br></br>
        <Link to="/Product">Temp link to client page</Link>
        <br></br>
        <Link to="/Project">Temp link to project page</Link>
        <br></br>
        <Link to="/Admin">Temp link to admin page</Link>
        
        </Container>
        
        </Wrapper>
    );
}


export default AddClient;
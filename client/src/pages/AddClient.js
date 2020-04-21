import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Container from "../components/Grid";
import {Form, Col, Button} from "react-bootstrap";
import Wrapper from '../components/Wrapper';
import API from '../utils/API'

function AddClient() {
    const initialForm = {name: '',
     businessName: '',
      phoneNumber: 0,
    email:'',
address:'',
addressTwo:'',
city:'',
state:'',
zip: 0,
notes:''}
    const  [newClient, setNewClient] = useState(initialForm);

    let clientList;

    const handleInputChange = event => {
        const { name, value } = event.target
        console.log(name)
        console.log(value)
        setNewClient({ ...newClient, [name]: value })
      }

    //     useEffect(

        const addClient = (event) => {
            console.log('LOGGING')
            console.log(newClient)
            API.addClient(newClient)
            .then(res => {
                console.log(res)
            })
        }   

    return(
        <Wrapper>
        <div>
        <Container>
        
        <h1>Add Client</h1>
        <form>
            <Form.Group className="">
                <Form.Label>
                    Business Name:
                    <Form.Control 
                    type="input" 
                    placeholder="enter business name" 
                    value={newClient.businessName}
                    onChange={handleInputChange}
                    name="businessName"
                     />
                </Form.Label>
                <Form.Label>
                    Contact Name:
                    <Form.Control 
                    type="input" 
                    placeholder="name" 
                    value={newClient.name}
                    onChange={handleInputChange}
                    name="name"
                     />
                </Form.Label>
            </Form.Group>         

            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="email" 
                    value={newClient.email}
                    onChange={handleInputChange}
                    name="email"
                     />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="input" 
                    placeholder="password" 
                    value={newClient.password}
                    onChange={handleInputChange}
                    name="password"
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

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control 
                    type="input" 
                    placeholder="address two" 
                    value={newClient.addressTwo}
                    onChange={handleInputChange}
                    name="address two"
                     />            </Form.Group>

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
                    name="businessName">
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

             <Button variant="primary" type="button" onClick={() => addClient()}>
                Submit
            </Button>
     
        </form>

        <Link to="/Login">Temp link back to Login page</Link>
        <br></br>
        <Link to="/Product">Temp link to client page</Link>
        <br></br>
        <Link to="/Home">Temp link to home page</Link>
        <br></br>
        <Link to="/Project">Temp link to project page</Link>
        <br></br>
        <Link to="/Admin">Temp link to admin page</Link>
        
        </Container>
        </div>
        </Wrapper>
    );
}


export default AddClient;
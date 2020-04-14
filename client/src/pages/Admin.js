import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Grid";
import {Form, Col, FormControl, FormGroup, ControlLabel, Button} from "react-bootstrap";
import API from '../utils/API';

function Admin() {
    // users state

    // handle users submit

    return(
        
        <div>
        <Container>
        
        <h1>Admin Page</h1>
        <h2>Add User</h2>
        <form>        

            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
                Submit
            </Button>
     
        </form>

        <h3>Current Users</h3>
        <p>user 1</p>
        <p>user 2</p>
        <p>user 3</p>

        <Link to="/Login">Temp link back to Login page</Link>
        <br></br>
        <Link to="/Product">Temp link to client page</Link>
        <br></br>
        <Link to="/Home">Temp link to home page</Link>
        <br></br>
        <Link to="/Project">Temp link to project page</Link>
        <br></br>
        <Link to="/AddClient">Temp link to Add Client page</Link> 

        </Container>
        </div>

    );
}


export default Admin;
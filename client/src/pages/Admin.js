import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Grid";
import {Form, Col, Button, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import API from '../utils/API';
import Wrapper from '../components/Wrapper';

function Admin() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => { 
        // api call to retrieve users
        API.getUsers()
            .then(res => {
                console.log('users from db')
                console.log(res.data)

                setUsers(res.data)
                    //console.log(users)
            })
            .catch(err => console.log(err))

    }, []);

    const deleteUser = (id) => {
        console.log('click')
        API.deleteUsers(id)
        .then (res => {
            console.log(res.data)
            let filterusers = users.filter(user => user.id !== id)
            setUsers(filterusers)
        })  
    };



    return(
        <Wrapper>
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

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Is Admin?</Form.Label>
                <ToggleButtonGroup type="radio" name="options" defaultValue={false}>
                    <ToggleButton value={true}>Yes</ToggleButton>
                    <ToggleButton value={false}>No</ToggleButton>
                </ToggleButtonGroup>
                </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit" >
                Submit
            </Button>
     
        </form>

        <Container fluid>
            <h3>Current Users</h3>
            {users.map(users => (
                <Row className="justify-content-md-center my-4">
                    <Col>Email: {users.email}</Col>
                    <Col>Password: {users.password}</Col>
                    <Col>Is Admin?: {users.isadmin}</Col>
                    <button type="button" value="delete" onClick={() => deleteUser(users.id)}>Delete</button>
                </Row>
            ))}


        </Container>

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
        </Wrapper>
    );
}


export default Admin;
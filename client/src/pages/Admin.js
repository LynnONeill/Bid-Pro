import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Grid";
import {Form, Col, Button, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import API from '../utils/API';
import Wrapper from '../components/Wrapper';
import Navbar from '../components/Nav';

function Admin() {
    // grab users from db
    const [users, setUsers] = useState([]);
    
    // add new user
    const initialForm = {email: '', password: '', isadmin: false}
    const  [newUser, setNewUser] = useState(initialForm);
    
    
    useEffect(() => { 
        // api call to retrieve users
        API.getUsers()
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => console.log(err))

    }, []);

    // add user functions
    const handleInputChange = event => {
        if (typeof event === 'boolean') {
            setNewUser({ ...newUser, isadmin: event })
            return
        }
        const { name, value } = event.target
        console.log(name)
        console.log(value)
        setNewUser({ ...newUser, [name]: value })
      }

    const addUser = (event) => {
        console.log('LOGGING')
        console.log(newUser)
        API.addUsers(newUser)
        .then(res => {
            console.log(res)
        })
    }    

    // delete users
    const deleteUser = (id) => {
        API.deleteUsers(id)
        .then (res => {
            let filterusers = users.filter(user => user.id !== id)
            setUsers(filterusers)
        })  
    };


    return(
        <div>
        <Navbar />
        <Wrapper>
        <Container>
        
        <h1>Admin Page</h1>
        <h2>Add User</h2>
        <form>        

            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={newUser.email}
                    onChange={handleInputChange}
                    name="email"
                     />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value={newUser.password} 
                        onChange={handleInputChange}
                        name='password'
                        />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Is Admin?</Form.Label>
                    <ToggleButtonGroup type="radio" defaultValue={newUser.isadmin} onChange={handleInputChange} name='isadmin'>
                        <ToggleButton value={true}>Yes</ToggleButton>
                        <ToggleButton value={false}>No</ToggleButton>
                    </ToggleButtonGroup>
                </Form.Group>
            </Form.Row>

            <Button variant="primary" type="button" onClick={() => addUser()}>
                Add User
            </Button>
     
        </form>

        <Container fluid>
            <h3>Current Users</h3>
            <Row className="justify-content-md-center my-4 adminTable">
                <Col>Email</Col>
                <Col>Password</Col>
                <Col>Is Admin</Col>
                <Col>Remove</Col>
            </Row>
            {users.map(users => (
                <Row className="justify-content-md-center my-4 dbUsers">
                    <Col>{users.email}</Col>
                    <Col>{users.password}</Col>
                    <Col>{users.isadmin.toString()}</Col>
                    <Button className="delete" type="button" value="delete" onClick={() => deleteUser(users.id)}>Delete</Button>
                </Row>
            ))}


        </Container>
        </Container>
        </Wrapper>
        </div>
    );
}


export default Admin;
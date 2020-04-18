import React, { useContext, useEffect} from "react";
import { Link, Redirect } from "react-router-dom";
import Container from "../components/Grid";
import Wrapper from '../components/Wrapper';
import ClientContext from "../utils/GlobalState"
import Row from "react-bootstrap/row";
import API from "../utils/API";


function Clients() {


  
    // *** Need to set sql client id in global state and replace value below //
    let clientID = 123456
    const {selectedClient} = useContext(ClientContext)

    function handleNewProjectClick(event) {
        console.log("click is working");
        API.createProject({clientid: clientID})
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
           /// ***Need code to redirect to product page - this isn't working /// 
           return <Redirect to='/product' />
           /// Also, will need to set project id number in global state 
    }

   

    return(
        <Wrapper>
        <Container fluid>
            <div>
            <h1>Client Page</h1>
        <ul>
    <li>{selectedClient.name}</li>
            <li>{selectedClient.address}</li>
            <li>{selectedClient.email}</li>
            <li>{selectedClient.notes}</li>
        </ul>

        

        <p>Maybe also add a note field??</p>
        <p>Here would be a list of projects (open and closed) for this client</p>
        </div>
        <Row>
            <button id="add-project-btn" 
                    onClick={handleNewProjectClick}
                    type="button" 
                    class="btn btn-success">
                    Add Project
            </button>
        </Row>
        

        <Link to="/Login">Temp link back to Login page</Link>
                 <br></br>
                 <Link to="/Product">Temp link to product page</Link>
                 <br></br>
                 <Link to="/Home">Temp link to home page</Link>
                 <br></br>
                 <Link to="/Project">Temp link to project page</Link>
        </Container>
        </Wrapper>
    );
}


export default Clients;
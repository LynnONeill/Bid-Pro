import React from "react";
import Container from "../components/Grid";


function Clients() {
    return(
        <Container fluid>
            <div>
            <h1>Client Page</h1>
        <ul>
            <li>name</li>
            <li>address</li>
            <li>phone</li>
            <li>email</li>
        </ul>

        <p>Maybe also add a note field??</p>
        <p>Here would be a list of projects (open and closed) for this client</p>
        </div>

        </Container>
        
        

    );
}


export default Clients;
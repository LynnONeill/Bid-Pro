import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Grid";
import ClientContext from "../utils/GlobalState"


function Clients() {
    const [client,setClient] = useState({});

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
        <Link to="/Login">Temp link back to Login page</Link>
                 <br></br>
                 <Link to="/Product">Temp link to product page</Link>
                 <br></br>
                 <Link to="/Home">Temp link to home page</Link>
                 <br></br>
                 <Link to="/Project">Temp link to project page</Link>
        </Container>
        
        

    );
}


export default Clients;
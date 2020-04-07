import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Grid";

function Project() {
    return (
        <Container>
            <h1 className="text-center">Project Page (temp text)</h1>
           
            <Link to="/Login">Temp link back to Login page</Link>
             <br></br>
             <Link to="/Client">Temp link to client page</Link>
             <br></br>
             <Link to="/Home">Temp link to home page</Link>

        </Container>
           
            
        
    );
}

export default Project;
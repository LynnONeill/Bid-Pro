import React, { useEffect, useState, useContext } from "react";
import ClientContext from "../utils/GlobalState"
import { Link } from "react-router-dom";
import Container from "../components/Grid";
import ClientsProjects from "../components/ClientsProjects"
import API from "../utils/API";


function Project(props) {
    const { selectedClient } = useContext(ClientContext)

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        // Api call to get product and feature data //
        API.getClientProducts(selectedClient.projectsID)
            .then((res) => {
                console.log(res);
                setProjects(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <Container>
            <h1 className="text-center">Project Page (temp text)</h1>
            {projects.map(project=>{return(
            <ClientsProjects value={project} />
            )
            })}
            <Link to="/Login">Temp link back to Login page</Link>
            <br></br>
            <Link to="/Client">Temp link to client page</Link>
            <br></br>
            <Link to="/Home">Temp link to home page</Link>

        </Container>



    );
}

export default Project;
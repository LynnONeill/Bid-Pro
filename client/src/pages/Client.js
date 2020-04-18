import React, { useEffect, useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import Container from "../components/Grid";
import ClientCard from "../components/ClientCard";
import Wrapper from '../components/Wrapper';
import ClientContext from "../utils/GlobalState"
import Row from "react-bootstrap/row";
import API from "../utils/API";


function Clients() {

    const { selectedClient } = useContext(ClientContext);
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        // Api call to get product and feature data //
        getProjects();
    }, []);
    function getProjects() {
        API.getAllProjects(selectedClient.id).then(res => {
            console.log(res)
            setProjects(res.data)
        }).catch(err => console.log(err))

    }

    function newProject() {

        API.addNewProject(selectedClient.id).then(res => {
            console.log(res)
            setProjects(res.data)
        }).catch(err => console.log(err))
  }
//   function handleNewProjectClick(event) {
//     console.log("click is working");
//     API.createProject({clientid: clientID})
//         .then(res => {
//             console.log(res.data)
//         })
//         .catch(err => console.log(err))
//        /// ***Need code to redirect to product page - this isn't working /// 
//        return <Redirect to='/product' />
//        /// Also, will need to set project id number in global state 
// }

    return (
        <Wrapper>
        <Container fluid>
            <div>
                <h1>Client Page</h1>
                <ClientCard />


                <p>Here would be a list of projects (open and closed) for this client</p>
                <button
                    onClick={newProject}
                >Add New Project</button>

                <div>

                </div>
            </div>
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
import React, { useEffect, useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import Container from "../components/Grid";
import ClientCard from "../components/ClientCard";
import ProjectCard from "../components/ProjectCard";
import Wrapper from '../components/Wrapper';
import ClientContext from "../utils/GlobalState"
import Row from "react-bootstrap/row";
import API from "../utils/API";


function Clients() {

    const { selectedClient } = useContext(ClientContext);
    const [projects, setProjects] = useState([]);
    const [name, setName] = useState("");

    console.log(selectedClient);
    console.log(selectedClient.id);

    function handleProjectNameChange(e) {
        setName(e.target.value);
    }

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

    function newProject(e) {
        e.preventDefault()

        API.addNewProject(selectedClient.id, name).then(res => {
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

                    {projects.map(project => {
                        return (
                            <ProjectCard
                                value={project}
                                project={getProjects}
                                key={project._id}
                            />
                        )
                    })}
                    <form>

                        <input type="text" name="projectName" placeholder="New Project Name" value={name} onChange={handleProjectNameChange} />

                        <button
                            onClick={newProject}
                        >
                            Add New Project</button>


                    </form>
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
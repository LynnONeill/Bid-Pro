import React, { useEffect, useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import Container from "../components/Grid";
import ClientCard from "../components/ClientCard";
import ProjectCard from "../components/ProjectCard";
import Wrapper from '../components/Wrapper';
import ClientContext from "../utils/GlobalState"
import API from "../utils/API";
import Navbar from '../components/Nav';

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

    return (
        <div>
        <Navbar />
        <Wrapper>
            <Container fluid>
                <div>

                    <h1>Client Details</h1>
      
                    <ClientCard />

                    <div className="clientCard">
                        <h2>Project History</h2>
                        {projects.map(project => {
                            return (
                                <ProjectCard
                                    value={project}
                                    project={getProjects}
                                    key={project._id}
                                />
                            )
                        })}
                    </div>

                    <form className="clientCard">
                        <h2>Add New Project</h2>
                        <div className="projectList">
                            <input type="text" name="projectName" placeholder="New Project Name" value={name} onChange={handleProjectNameChange} />

                            <button onClick={newProject}>Add</button>
                        </div>
                    </form>
                    <div>

                    </div>
                </div>
        </Container>
        </Wrapper>
        </div>
    );
}


export default Clients;
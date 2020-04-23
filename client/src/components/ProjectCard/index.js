import { Link } from "react-router-dom";
import ClientContext from "../../utils/GlobalState"
import React, { useContext } from "react";
import API from "../../utils/API";

function ProjectCard(props) {
    const { handleClick } = useContext(ClientContext);
    const user = JSON.stringify({ projectID: props.value._id })
    const deleteProject = function () {
        API.deleteProject(props.value._id).then(res => {
            console.log(res)
            props.project()
        }).catch(err => console.log(err))
    }
    let date = props.value.date
    console.log(props)
    return (
        <>
            <div>
                <Link to="/project" className="clientLink" onClick={handleClick} data-value={user}>
                    Project : {props.value.name}  Cost: ${props.value.__v} Created : {date.slice(5, 7)}-{date.slice(8, 10)}-{date.slice(0, 4)}
                </Link>
                <button onClick={deleteProject}>Delete</button>
            </div>

        </>
    )
}

export default ProjectCard
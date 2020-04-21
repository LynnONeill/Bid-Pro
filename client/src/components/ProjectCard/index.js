import { Link } from "react-router-dom";
import ClientContext from "../../utils/GlobalState"
import React, { useContext } from "react";
import API from "../../utils/API";

function ClientCard(props) {
    const { handleClick } = useContext(ClientContext);
    const user = JSON.stringify({ projectID: props.value._id })
    const deleteProject = function () {
        API.deleteProject(props.value._id).then(res => {
            console.log(res)
            props.project()
        }).catch(err => console.log(err))
    }
    console.log(props)
    return (
        <>
            <Link to="/project" className="clientLink" onClick={handleClick} data-value={user}>
                <div>
                    {props.value.name}
                </div>
            </Link>
            <button onClick={deleteProject}>Delete</button>
        </>
    )
}

export default ClientCard
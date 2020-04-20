import { Link } from "react-router-dom";
import ClientContext from "../../utils/GlobalState"
import React, {  useContext } from "react";

function ClientCard(props) {
    const { handleClick } = useContext(ClientContext);
    const user = JSON.stringify({projectID:props.value._id})
    console.log(props)
    return (
        <Link to ="/project" className="clientLink" onClick={handleClick} data-value={user}>
            <div>
                {props.value._id}
            </div>
        </Link>
    )
}

export default ClientCard
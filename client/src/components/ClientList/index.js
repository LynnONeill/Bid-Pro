import ClientContext from "../../utils/GlobalState"
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";



function ClientList(props) {
    const [clients, setClients] = useState([]);
    const { handleClick } = useContext(ClientContext);
    props.value.phoneNumber =1234567890
    const user =JSON.stringify(props.value)

    return (

        <Link to="/Client" onClick={handleClick} data-value={user}>
            <div>
                {props.value.name} -             {props.value.phoneNumber}
            </div>
        </Link>

    )
};

export default ClientList;
import React from "react";



function ClientList(props) {
    console.log(props)

    return (


        <div>
            {props.value.name} -             {props.value.phoneNumber}
        </div>

    )
};

export default ClientList;
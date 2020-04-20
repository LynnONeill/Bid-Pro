import ClientContext from "../../utils/GlobalState"
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { FaEye } from "react-icons/fa";


function ClientsProjects(props) {
    const { handleClick } = useContext(ClientContext);
    props.value.phoneNumber = 1234567890
    console.log(props)
    const user = JSON.stringify(props.value)

    return (

        <Link to="/Client" className="clientLink" onClick={handleClick} data-value={user}>
            <div className="row" style={{ marginTop: 10, }}>

                <div className="col-8">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ padding: 10, background: "dodgerblue", borderRadius: 5, marginRight: 10 }}> <FaEye style={{ color: "#fff" }}></FaEye> </div>
                        <div> <div> {props.value.businessName} - {props.value.name} </div>
                            <div > {props.value.address} , {props.value.addressTwo}, {props.value.city} , {props.value.state}, {props.value.zip} </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div style={{ textAlign: "right" }}>  {props.value.email} </div>
                    <div style={{ textAlign: "right" }}> {props.value.phoneNumber}</div>
                </div>


            </div>

        </Link>



    )
};

export default ClientsProjects;
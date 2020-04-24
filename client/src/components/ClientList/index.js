import ClientContext from "../../utils/GlobalState"
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { FaEye } from "react-icons/fa";
import API from "../../utils/API";


function ClientList(props) {
    const { handleClick } = useContext(ClientContext);
    console.log(props)
    const user = JSON.stringify(props.value)

    function deleteClient (e){
        e.preventDefault()
        API.deleteClient(props.value.id)
        .then((res) => {
            console.log(res);
            props.setClients(res.data);
          })
          .catch((err) => console.log(err));
      }
      

    return (
<>
        <Link to="/Client" className="clientLink" onClick={handleClick} data-value={user}>
            <div className="row clientLinkRow" style={{ marginTop: 10, }}>

                <div className="col-6">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ padding: 10, background: "dodgerblue", borderRadius: 5, marginRight: 10 }}> <FaEye style={{ color: "#fff" }}></FaEye> </div>
                        <div> <div> {props.value.businessName} - {props.value.name} </div>
                            <div > {props.value.address} , {props.value.addressTwo}, {props.value.city} , {props.value.state}, {props.value.zip} </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 clientEmail">
                    <div style={{ textAlign: "right" }}>  {props.value.email} </div>
                    <div style={{ textAlign: "right" }}> {props.value.phoneNumber}</div>
                </div>

                <button className="btn btn-primary delete" onClick={deleteClient}>Delete</button>
            </div>
            
        </Link>
        
</>


    )
};

export default ClientList;
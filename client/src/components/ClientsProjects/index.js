import ClientContext from "../../utils/GlobalState";
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";


function ClientsProjects(props) {
    const { handleClick } = useContext(ClientContext);
    console.log(props)

    return (

        <div className="row" style={{ marginTop: 10, }}>

            <div className="col-8">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div>
                        <div> {props.value.product.name} total cost {props.value.total.price} </div>
                        <div >
                            {props.value.features.map(each => {
                                return (
                                    <div>
                                        {each.name}
                                        {each.type}
                                        {each.price}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div style={{ textAlign: "right" }}>  {props.value.email} </div>
                    <div style={{ textAlign: "right" }}> {props.value.phoneNumber}</div>
                </div>


            </div>
        </div>




    )
};

export default ClientsProjects;
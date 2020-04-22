import ClientContext from "../../utils/GlobalState";
import { Redirect, Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import API from "../../utils/API";


function ClientsProjects(props) {
    const { handleClick } = useContext(ClientContext);
    console.log(props)
    function deleteProduct() {
        API.deleteProduct(props.value._id)
            .then(res => {
                props.setUp()
            })
    }

    return (
        <>
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
                </div>
            </div>
            <Link to="/project">
                <button onClick={deleteProduct}>Delete Product</button>
            </Link>
        </>



    )
};

export default ClientsProjects;
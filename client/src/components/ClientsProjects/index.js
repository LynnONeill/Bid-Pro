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
            <div className="row clientProject">
                <div className="col-12">
                    <div>
                        <div>
                            <h2 className="alignLeft">{props.value.product.name}</h2>
                            <div><strong>Total Cost: ${props.value.total.price} </strong></div>
                            <div >
                                {props.value.features.map(each => {
                                    return (
                                        <div>
                                            {each.name}: 
                                            {each.type} - 
                                            ${each.price}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/project">
                    <button className="btn btn-primary delete btmleft" onClick={deleteProduct}>Delete</button>
                </Link>
            </div>

        </>



    )
};

export default ClientsProjects;
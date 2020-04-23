import React from "react";

function ClientSearch(props) {

    return (

        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button
                    style={{ background: "dodgerblue", 
                             padding: 10, 
                             color: "#fff", 
                             borderRadius: 5 }} 
                    
                    className="btn" 
                    name="button"
                    // onClick={props.handleClick}
                    type="button">
                        Search
                </button>
            </div>
            <input 
                value={props.search}
                onChange={props.handleSearchChange}
                type="text" 
                name="name"
                className="form-control" 
                placeholder="name" 
                aria-label="Search" 
                aria-describedby="basic-addon1"
            />
        </div>

                  

    )
};

export default ClientSearch;

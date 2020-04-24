import React from "react";

function ClientSearch(props) {

    return (

        <div className="input-group mb-3">
            <input 
                value={props.search}
                onKeyUp={props.handleSearchChange}
                type="text" 
                name="name"
                className="form-control" 
                placeholder="search" 
                aria-label="Search" 
                aria-describedby="basic-addon1"
            />
        </div>
    )
};

export default ClientSearch;

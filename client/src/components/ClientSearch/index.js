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
            
            <button 
                className="btn search" 
                name="button"
                // onClick={props.handleClick}
                type="button">
                    Search
            </button>
                       
        </div>
    )
};

export default ClientSearch;

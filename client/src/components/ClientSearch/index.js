import React from "react";

function ClientSearch() {

    return (

        <div class="input-group mb-3">
            <div class="input-group-prepend">
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
               
                type="text" 
                name="name"
                class="form-control" 
                placeholder="name" 
                aria-label="Search" 
                aria-describedby="basic-addon1"
            />
        </div>

                  

    )
};

export default ClientSearch;
  {/* style={{padding: 10, borderRadius: 5}}
                    value={props.search}
                    onChange={props.handleSearchChange}
                    className="form-control mr-sm-2" */}
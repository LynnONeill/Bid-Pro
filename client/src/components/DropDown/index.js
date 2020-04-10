import React from "react";


function DropDown({ products }) {

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select a Product
            </button>
            {products}

        </div>
      
    )
};

export default DropDown;
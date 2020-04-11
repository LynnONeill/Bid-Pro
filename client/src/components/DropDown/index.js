import React from "react";


function DropDown(products) {
    console.log(products)

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select a Product
            </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {products.products}
                </div>
        </div>
        

      
    )
};

export default DropDown;
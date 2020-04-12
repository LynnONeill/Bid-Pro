import React from "react";


function QuoteDropDown({productDrop, designDrop, backingDrop, finishDrop, hardwareDrop, handleProductSelect}) {
  

    return (
        <div className="dropdown p-2 my-2">
            <button className="btn btn-secondary dropdown-toggle" 
                    onChange={handleProductSelect}
                    type="button"   
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    // aria-haspopup="true" 
                    // aria-expanded="false"
                    >
                    Select 
            </button>
                <div className="dropdown-menu" 
                    aria-labelledby="dropdownMenuButton">
                    {productDrop}
                    {designDrop}
                    {backingDrop}
                    {finishDrop}
                    {hardwareDrop}
                </div>
        </div>
    )
};

export default QuoteDropDown;
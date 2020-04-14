import React from "react";
import Dropdown from "react-bootstrap/Dropdown";


function QuoteDropDown({productDrop, designDrop, backingDrop, finishDrop, hardwareDrop, handleMenuSelect}) {
  

    return (
      
        <div className="dropdown p-2 my-2">
                <input
                className="form-control mr-sm-2"
                placeholder="test input"
                type="text"
                aria-label="test"
                onChange={handleMenuSelect}>
                </input>
            <button className="btn btn-secondary dropdown-toggle" 
                type="button"   
                id="dropdownMenuButton" 
                onChange={handleMenuSelect}
                data-toggle="dropdown" 
                // aria-haspopup="true" 
                // aria-expanded="false"
            >
                Select 
            </button>
        <div className="dropdown-menu" 
            id="dropdown"
            onChange={handleMenuSelect}
            aria-labelledby="dropdownMenuButton"
            >
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


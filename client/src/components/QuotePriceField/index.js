import React from "react";

function QuotePriceField( {selectedProductPX, backingPrice, finishPrice, designPrice, hardwarePrice }) {

    return (
       <div  
        className="block-example bg-light border border-light my-2 p-2">
        ${selectedProductPX}
        {backingPrice}
        {finishPrice}
        {designPrice}
        {hardwarePrice}
        
        </div> 
    )
};

export default QuotePriceField;

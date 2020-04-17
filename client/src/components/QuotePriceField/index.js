import React from "react";

function QuotePriceField( {selectedProductPX, backingPrice, finishPrice, designPrice, hardwarePrice }) {

    return (
       <div  
        className="block-example bg-light border border-light my-2 p-2">
        ${selectedProductPX}
        {designPrice}
        {backingPrice}
        {finishPrice}
        {hardwarePrice}
        
        </div> 
    )
};

export default QuotePriceField;

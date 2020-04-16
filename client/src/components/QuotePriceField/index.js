import React from "react";

function QuotePriceField( {selectedProductPX }) {

    return (
       <div  
        className="block-example bg-light border border-light my-2 p-2">
        ${selectedProductPX}
        </div> 
    )
};

export default QuotePriceField;

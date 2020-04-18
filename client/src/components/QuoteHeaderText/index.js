import React from "react";

function QuoteHeaderText( {selectedProduct}) {

    return (
        <div className="my-2">
            <h3>
            {selectedProduct} 
            </h3>
        </div>
       
    )
};


export default QuoteHeaderText;
import React from "react";
import Form from "react-bootstrap/Form";


function QuoteProductDropDown({productDrop, handleProductSelect}) {
  
 

    return (
      
        <div className="dropdown p-2 my-2">
        <Form.Control 
            as="select" 
            id="dropdown" 
            onChange={handleProductSelect}>
            
            {productDrop}
        </Form.Control>
        </div> 
    )
};

export default QuoteProductDropDown;


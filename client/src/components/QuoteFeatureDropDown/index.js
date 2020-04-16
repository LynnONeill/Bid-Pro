import React from "react";
import Form from "react-bootstrap/Form";


function QuoteFeatureDropDown({designDrop, backingDrop, finishDrop, hardwareDrop, handleFeatureSelect}) {
  

    return (
      
        <div className="dropdown p-2 my-2">
        <Form.Control 
            as="select" 
            id="dropdown" 
            onChange={handleFeatureSelect}>
            {designDrop}
            {backingDrop}
            {finishDrop}
            {hardwareDrop}
        </Form.Control>
        </div> 
    )
};

export default QuoteFeatureDropDown;

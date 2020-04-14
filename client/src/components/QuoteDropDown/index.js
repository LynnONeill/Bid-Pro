import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";


function QuoteDropDown({productDrop, designDrop, backingDrop, finishDrop, hardwareDrop, handleMenuSelect}) {
  

    return (
      
        <div className="dropdown p-2 my-2">
        <Form.Control 
            as="select" 
            id="dropdown" 
            onChange={handleMenuSelect}>
            {designDrop}
            {backingDrop}
            {finishDrop}
            {hardwareDrop}
            {productDrop}
        </Form.Control>
        </div> 
    )
};

export default QuoteDropDown;

{/* <button className="btn btn-secondary dropdown-toggle" 
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
</div> */}
import React from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function QuoteSubmitBtn(){

    return(
        <Row className="justify-content-md-center mb-4">
             <button
                    name="name"
                    type="button"
                    // onClick={props.handleClick}
                >
                    Add Product
                </button>
        </Row>
    )
};

export default QuoteSubmitBtn;
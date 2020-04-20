import React from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function QuoteSubmitBtn( {addProduct} ){

    return(
        <Row className="justify-content-md-center mb-4">
             <button
                    name="name"
                    type="button"
                    onClick={addProduct}
                >
                    Add Product
                </button>
        </Row>
    )
};

export default QuoteSubmitBtn;
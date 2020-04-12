import React from "react";
import Row from "react-bootstrap/Row";
import QuoteForm from "../QuoteForm";
import QuoteHeaderText from "../QuoteHeaderText";



function QuoteContainer({productDrop, designDrop, backingDrop, finishDrop, hardwareDrop, handleProductSelect}) {

    return (

        <div className="jumbotron card-container">
            <Row className="justify-content-md-center">
                <QuoteHeaderText />
            </Row>
            <QuoteForm
                productDrop={productDrop}
                designDrop={designDrop}
                backingDrop={backingDrop}
                finishDrop={finishDrop}
                hardwareDrop={hardwareDrop}
                handleProductSelect={handleProductSelect}
            />
           

        </div>
    )
};

export default QuoteContainer;
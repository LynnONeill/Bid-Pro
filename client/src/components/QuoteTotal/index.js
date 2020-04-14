import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function QuoteTotal() {

    return(
        <Row className="justify-content-md-center mb-4">
            <Col xs={6} md={6}>
                <div className="block-example p-2" >
                    Total:
                </div>
            </Col> 
            <Col xs={6} md={6}>
                <div  
                className="block-example bg-light border border-light my-2 p-2"
                >$
                </div> 
            </Col>
        </Row>
           
    )
};

export default QuoteTotal;
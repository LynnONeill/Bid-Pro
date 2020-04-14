import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import QuotePriceField from "../QuotePriceField";
import QuoteTotal from "../QuoteTotal";
import QuoteSubmitBtn from "../QuoteSubmitBtn";
import QuoteDropDown from "../QuoteDropDown";

function QuoteForm({productDrop, designDrop, backingDrop, finishDrop, hardwareDrop, handleMenuSelect}) {

    return (
        <form>
             <Row className="justify-content-md-center">
                <Col xs={3} md={3}>
                    <QuoteDropDown
                        handleMenuSelect={handleMenuSelect}
                        productDrop={productDrop} 
                     />
                </Col>
                <Col xs={3} md={3}>
                    <QuotePriceField />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={3} md={3}>
                    <QuoteDropDown
                        designDrop={designDrop} 
                     />
                </Col>
                <Col xs={3} md={3}>
                    <QuotePriceField />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={3} md={3}>
                    <QuoteDropDown
                        backingDrop={backingDrop} 
                     />
                </Col>
                <Col xs={3} md={3}>
                    <QuotePriceField />

                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={3} md={3}>
                    <QuoteDropDown
                        finishDrop={finishDrop} 
                     />
                </Col>
                <Col xs={3} md={3}>
                    <QuotePriceField />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={3} md={3}>
                    <QuoteDropDown
                        hardwareDrop={hardwareDrop} 
                     />
                </Col>
                <Col xs={3} md={3}>
                    <QuotePriceField />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={3} md={3}>
                    <QuoteTotal />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <QuoteSubmitBtn />
            </Row>



        </form>

    )
};

export default QuoteForm;
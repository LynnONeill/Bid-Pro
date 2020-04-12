import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import QuotePriceField from "../QuotePriceField";
import QuoteTotal from "../QuoteTotal";
import QuoteSubmitBtn from "../QuoteSubmitBtn";
import DropDown from "../QuoteDropDown";

function QuoteForm({productDrop, designDrop, backingDrop, finishDrop, hardwareDrop, handleProductSelect}) {

    return (
        <form>
             <Row className="justify-content-md-center">
                <Col xs={3} md={3}>
                    <DropDown
                        onChange={handleProductSelect}
                        productDrop={productDrop} 
                     />
                </Col>
                <Col xs={3} md={3}>
                    <QuotePriceField />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={3} md={3}>
                    <DropDown
                        designDrop={designDrop} 
                     />
                </Col>
                <Col xs={3} md={3}>
                    <QuotePriceField />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={3} md={3}>
                    <DropDown
                        backingDrop={backingDrop} 
                     />
                </Col>
                <Col xs={3} md={3}>
                    <QuotePriceField />

                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={3} md={3}>
                    <DropDown
                        finishDrop={finishDrop} 
                     />
                </Col>
                <Col xs={3} md={3}>
                    <QuotePriceField />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={3} md={3}>
                    <DropDown
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
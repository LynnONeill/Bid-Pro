import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import QuotePriceField from "../QuotePriceField";
import QuoteTotal from "../QuoteTotal";
import QuoteSubmitBtn from "../QuoteSubmitBtn";
import QuoteProductDropDown from "../QuoteProductDropDown";
import QuoteFeatureDropDown from "../QuoteFeatureDropDown";

function QuoteForm({productDrop, designDrop, backingDrop, finishDrop, hardwareDrop, handleProductSelect, handleFeatureSelect, selectedProductPX}) {

    return (
        <form>
             <Row className="justify-content-md-center">
                <Col xs={6} md={6}>
                    <QuoteProductDropDown
                        handleProductSelect={handleProductSelect}
                        productDrop={productDrop} 
                     />
                </Col>
                <Col xs={3} md={3}>
                    <QuotePriceField 
                        selectedProductPX={selectedProductPX}
                    />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={6} md={6}>
                    <QuoteFeatureDropDown
                        handleFeatureSelect={handleFeatureSelect}
                        designDrop={designDrop}
                        
                     />
                </Col>
                <Col xs={3} md={3}>
                    <QuotePriceField />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={6} md={6}>
                    <QuoteFeatureDropDown
                        handleFeatureSelect={handleFeatureSelect}
                        backingDrop={backingDrop} 
                     />
                </Col>
                <Col xs={3} md={3}>
                    <QuotePriceField />

                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={6} md={6}>
                    <QuoteFeatureDropDown
                        handleFeatureSelect={handleFeatureSelect}
                        finishDrop={finishDrop} 
                     />
                </Col>
                <Col xs={3} md={3}>
                    <QuotePriceField />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={6} md={6}>
                    <QuoteFeatureDropDown
                        hardwareDrop={hardwareDrop} 
                     />
                </Col>
                <Col xs={3} md={3}>
                    <QuotePriceField />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={6
                } md={6}>
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
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import QuotePriceField from "../QuotePriceField";
import QuoteTotal from "../QuoteTotal";
import QuoteSubmitBtn from "../QuoteSubmitBtn";
import QuoteProductDropDown from "../QuoteProductDropDown";
import QuoteFeatureDropDown from "../QuoteFeatureDropDown";

function QuoteForm({productDrop, designDrop, backingDrop, finishDrop, hardwareDrop, handleProductSelect, handleFeatureSelect, selectedProductPX, backingPrice, finishPrice, designPrice, hardwarePrice, totalPrice, addProduct}) {

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
                        handleFeatureSelect={(e) =>handleFeatureSelect(e, "design")}
                        designDrop={designDrop}
                        
                     />
                </Col>
                <Col xs={3} md={3}>
                    <QuotePriceField 
                        designPrice={designPrice}
                    />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={6} md={6}>
                    <QuoteFeatureDropDown
                        handleFeatureSelect={(e) =>handleFeatureSelect(e, "backing")}
                        backingDrop={backingDrop} 
                     />
                </Col>
                <Col xs={3} md={3}>
                    <QuotePriceField 
                        backingPrice={backingPrice}
                    />

                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={6} md={6}>
                    <QuoteFeatureDropDown
                        handleFeatureSelect={(e) =>handleFeatureSelect(e, "finish")}
                        finishDrop={finishDrop} 
                     />
                </Col>
                <Col xs={3} md={3}>
                    <QuotePriceField
                    finishPrice={finishPrice}
                    />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={6} md={6}>
                    <QuoteFeatureDropDown
                        handleFeatureSelect={(e) =>handleFeatureSelect(e, "hardware")}
                        hardwareDrop={hardwareDrop} 
                     />
                </Col>
                <Col xs={3} md={3}>
                    <QuotePriceField 
                        hardwarePrice={hardwarePrice}
                    />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={6
                } md={6}>
                    <QuoteTotal 
                        totalPrice={totalPrice}
                    />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <QuoteSubmitBtn 
                    addProduct={addProduct}
                />
            </Row>



        </form>

    )
};

export default QuoteForm;
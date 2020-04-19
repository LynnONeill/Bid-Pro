import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import QuoteForm from "../QuoteForm";
import QuoteHeaderText from "../QuoteHeaderText";
import ClientCard from "../ClientCard";
import ClientContext from "../../utils/API";



function QuoteContainer({productDrop, designDrop, backingDrop, finishDrop, hardwareDrop, selectedProduct, selectedProductPX, handleProductSelect, handleFeatureSelect, backingPrice, finishPrice, designPrice, hardwarePrice, totalPrice, addProduct}) {
    const { selectedClient } = useContext(ClientContext);
    return (

        <div className="jumbotron card-container">
             <Row className="justify-content-md-center">
                <ClientCard />
             </Row>
            <Row className="justify-content-md-center">
                <QuoteHeaderText 
                    selectedProduct={selectedProduct}
                />
               
            </Row>
            <QuoteForm
                productDrop={productDrop}
                designDrop={designDrop}
                backingDrop={backingDrop}
                finishDrop={finishDrop}
                hardwareDrop={hardwareDrop}
                selectedProductPX={selectedProductPX}
                handleProductSelect={handleProductSelect}
                handleFeatureSelect={handleFeatureSelect}
                backingPrice={backingPrice}
                finishPrice={finishPrice}
                designPrice={designPrice}
                hardwarePrice={hardwarePrice}
                totalPrice={totalPrice}
                addProduct={addProduct}
            />
           

        </div>
    )
};

export default QuoteContainer;
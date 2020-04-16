import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import QuoteContainer from "../components/QuoteContainer";
import API from "../utils/API";


function Product() {

    const [products, setProducts] = useState([]);
    const [features, setFeatures] = useState({});
    const [currentProduct, setCurrentProduct] = useState();
    const [selectedProduct, setSelectedProduct] = useState();
    const [selectedProductPX, setSelectedProductPX] = useState();

   
    useEffect(() => {
        // Api call to get product and feature data //
        API.getProducts()
            .then(res => {
                console.log(res.data)

                // Set State for products
                setProducts(res.data)
                    console.log("test")
                    console.log(products)

            // Api call to get product feature data //
                API.getFeatures()
                    .then(res => {
                        setFeatures(res.data);
                    })
            })
            .catch(err => console.log(err))
    }, []);


    console.log(products);
    console.log(features);
    console.log(selectedProduct);
    console.log(selectedProductPX);



    // Function to pull product names/id's from products state and set to dropdown items //
    const renderProductDrop = (product) => {
        let ans;
            if (product.length === 0){
                ans = ""
            }else{
                 ans =  product.map((product)=>{
                        return <option
                                key={product._id}
                                className="dropdown-item"
                                value={product.products[0].type}
                                >
                                {product.products[0].type}
                                </option>
                        })
            }
            return ans;
        }
       
    const renderFeatureDrop = (featureState, featureType) => {
        console.log(featureState)
        let ans = [];
            if (featureState.length === 0) {
                ans = ""
            }else{
               for ( let i = 0; i < featureState.length; i++) {
                   if (featureState[i][featureType]) {
                       console.log(featureType)
                       ans.push( <option
                               key={featureState[i]._id}
                               className="dropdown-item"
                               value={featureState[i][featureType].type}
                               >
                                {featureState[i][featureType].type}
                               </option>)
                   } 
               }
            }
            return ans;
    }

    const handleProductSelect = event => {
       event.preventDefault();
       console.log("handleProductSelect is working")
       console.log(event.target.value)
       for ( let i = 0; i < products.length; i++) {
           console.log(products[0].products[0].type)
        if (event.target.value == products[i].products[0].type) {
            let curProd = event.target.value;
            setSelectedProduct(curProd);
            let curProdPX = products[i].products[0].price
            setSelectedProductPX(curProdPX);
            console.log(selectedProduct)
            console.log(selectedProductPX);
            }
           }
       }

    

       const handleFeatureSelect = function(event) {
        event.preventDefault();
        console.log(features[4].backing.type)
        
        console.log("handleFeatureSelect is working!");
        let featureSelected = event.target.value;
        console.log(featureSelected);
        console.log("#5 The selected size is " + selectedSize);
        let backingArray = []
        for( let i = 0; i < features.length; i++) {
           if(features[i].backing) {
               backingArray.push(features[i].backing);
               }
            
           } 
                
        }
        console.log(backingArray)

    


   
// if(((features[i].backing  || {}).type  || {}).featureSelected) {
//     console.log(features)        

    

    return (
        <Container>
            <Row className="justify-content-md-center">
                <h1 className="text-center">Signature IronWorks</h1>
            </Row>

            <QuoteContainer 
                productDrop={renderProductDrop(products)}
                designDrop={renderFeatureDrop(features, "design")}
                backingDrop={renderFeatureDrop(features, "backing")}
                finishDrop={renderFeatureDrop(features, "finish")}
                hardwareDrop={renderFeatureDrop(features, "hardware")}
                selectedProduct={selectedProduct}
                selectedProductPX={selectedProductPX}
                handleProductSelect={handleProductSelect}
                handleFeatureSelect={handleFeatureSelect}
            />

            <div>
                <Link to="/Login">Temp link back to Login page</Link>
                <br></br>
                <Link to="/Client">Temp link to client page</Link>
                <br></br>
                <Link to="/Home">Temp link to home page</Link>
                <br></br>
                <Link to="/Project">Temp link to project page</Link>
            </div>
        </Container>
    );
}

export default Product;


            

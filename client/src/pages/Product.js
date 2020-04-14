import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";

import Row from "react-bootstrap/Row";
import QuoteContainer from "../components/QuoteContainer";
import API from "../utils/API";


function Product() {

    const [products, setProducts] = useState([]);
    const [features, setFeatures] = useState({});
    const [currentProduct, setCurrentProduct] = useState();

    let buildProduct = {};
   
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
            }
            )
            .catch(err => console.log(err))
    }, []);


    console.log("below should be array of products object")
    console.log(products);
    console.log("below should be features object")
    console.log(features);



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
            return ans
        }
       
    const renderFeatureDrop = (featureState, featureType) => {
        console.log(featureState)
        let price;
        let ans = [];
            if (featureState.length === 0) {
                ans = ""
            }else{
               console.log("random")
               for ( let i = 0, j = 1; i < featureState.length; i++, j++) {
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

    const handleMenuSelect = event => {
    event.preventDefault();
       console.log("handleMenuSelect is working")
       console.log(event.target.value)
    }
            


    return (
        <Container>
            <Row className="justify-content-md-center">
                <h1 className="text-center">Product Estimate Page (temp text)</h1>
            </Row>

            <QuoteContainer 
                productDrop={renderProductDrop(products)}
                designDrop={renderFeatureDrop(features, "design")}
                backingDrop={renderFeatureDrop(features, "backing")}
                finishDrop={renderFeatureDrop(features, "finish")}
                hardwareDrop={renderFeatureDrop(features, "hardware")}
                handleMenuSelect={handleMenuSelect}

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


            
// for ( let i = 0; i < featureState.length; i++) {
//     if (featureState[i][featureType]) {
//         console.log(featureType)
//         ans.push( <a
//                 key={featureState[i]._id}
//                 className="dropdown-item"
//                 value={featureState[i][featureType].type}
//                 href="#">
//                     {featureState[i][featureType].type}
//                 </a>)
//     } 
// }
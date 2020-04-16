import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "../components/DropDown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import API from "../utils/API";
import Wrapper from '../components/Wrapper';


function Product() {

    const [products, setProducts] = useState([]);
    const [features, setFeatures] = useState({});

    
   
    let menuItems;
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
                        return <a
                                key={product._id}
                                className="dropdown-item"
                                href="#">
                                {product.products[0].type}
                            </a>
                        })
            }
            return ans
        }
       
    const renderFeatureDrop = (featureState, featureType) => {
        console.log(featureState)
        let ans = [];
            if (featureState.length === 0) {
                ans = ""
            }else{
               console.log("random")
               for ( let i = 0; i < featureState.length; i++) {
                   if (featureState[i][featureType]) {
                       console.log(featureType)
                       ans.push( <a
                               key={featureState[i]._id}
                               className="dropdown-item"
                               href="#">
                                   {featureState[i][featureType].type}
                               </a>)
                
                   }
               }
            }
            return ans;
    }
            


    return (
        <Wrapper>
        <Container>
            <Row className="justify-content-md-center">
                <h1 className="text-center">Product Estimate Page (temp text)</h1>
            </Row>

           
            <DropDown
               dropDownOpts={renderProductDrop(products)}
            />
             <DropDown
                dropDownOpts={renderFeatureDrop(features, "design")}
            />
            <DropDown
                dropDownOpts={renderFeatureDrop(features, "backing")}
            />
            <DropDown
                dropDownOpts={renderFeatureDrop(features, "finish")}
            />
            <DropDown
                dropDownOpts={renderFeatureDrop(features, "hardware")}
            />
            <br></br>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Container className="justify-content-md-center">
                <Container className="border border-secondary rounded-lg w-75">
                    <Row className="justify-content-md-center my-4">
                        <Col xs={3} md={3}>
                            <span>
                                Style Number Here
                </span>
                        </Col>
                        <Col xs={3} md={3}>
                            <span className="block-example border border-light p-2">
                                Base Price Here
                    </span>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center my-4">
                        <Col xs={3} md={3}>
                            <span>
                                Backing Choice Here
                    </span>
                        </Col>
                        <Col xs={3} md={3}>
                            <span className="block-example border border-light p-2">
                                $
                </span>
                        </Col>
                    </Row >
                    <Row className="justify-content-md-center my-4">
                        <Col xs={3} md={3}>
                            <span>
                                Finish Choice Here
                </span>
                        </Col>
                        <Col xs={3} md={3}>
                            <span className="block-example border border-light p-2">
                                $
                </span>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center mb-4">
                        <Col xs={3} md={3}>
                            <span>
                                Hardware Choice Here
                </span>
                        </Col>
                        <Col xs={3} md={3}>
                            <span className="block-example border border-light p-2">
                                $
                    </span>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center mb-4">
                        <Col xs={8} md={3}>
                            <span>
                                Total:
                </span>
                        </Col>

                    </Row >
                    <Row className="justify-content-md-center mb-4">
                        <Button variant="warning" size="lg" >Submit</Button>
                    </Row>
                </Container>

            </Container>




            {/* Columns are always 50% wide, on mobile and desktop */}



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

        </Wrapper>


    );
}

export default Product;



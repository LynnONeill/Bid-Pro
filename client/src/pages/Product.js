import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/DropDown";
import DropDown from "../components/DropDown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import API from "../utils/API";


function Product() {

    const [products, setProducts] = useState([]);
    const [featuresObj, setFeaturesObj] = useState({});
    const [productItems, setProductItems] = useState([])

    
   
                let menuItems;
    useEffect(() => {
        // Api call to get product and feature data //
        API.getProducts()
            .then(res => {
                console.log(res.data)

                // Set State for products
                setProducts(res.data)
                    console.log("testttt")
                    console.log(products)
                getMenuItems(products)
                setProductItems(menuItems)
                function getMenuItems(products) {
                    for( let i = 0, j = 0; i < products.length; i++ ){
                        console.log("testing")
                        console.log(products[i].products[j].type)
                        menuItems.push([{
                            label: products[i].products[j].type,
                            value: products[i].products[j].type
                        }]);
                        console.log(menuItems)
                }
                }

                getMenuItems(products)


            // Api call to get product feature data //
                API.getFeatures()
                    .then(res => {
                        setFeaturesObj(res);
                    })
            }
            )
            .catch(err => console.log(err))
           
    }, []);


    console.log("below should be array of products object")
    console.log(products);
    console.log("below should be features object")
    console.log(featuresObj);
    console.log(productItems);



    // This function will run the map (in jsx - products.map(renderDropDownItems)) but separates the two arrays ///
    // function renderDropDownItems(input, key) {
    //     console.log(products)
    //     let outputArray = [];
    //     for (let i = 0; i < input.length; i++)
    //         outputArray.push(input[i][key]);
    //     return outputArray
    // }
    // let productList = renderDropDownItems(products);
    // console.log(productList)
    // let productKey = renderDropDownItems(products, "_id");
    // console.log(productKey)



    // This function returns literal string in ui///     
    // const renderDrop1 = (product) => {
    //     console.log(product)
    //     for (let i = 0; i < product.length; i++)
    //         return (
    //         `<a 
    //         key=${product[i]._id} 
    //         className="dropdown-item" 
    //         href="#">
    //         ${product[i].type}
    //         </a>`
    //         )
    // }

    // This function will stop after first element (because of the return) and renders outside of dropdown ///
    const renderDrop2 = (product) => {
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
            
    
    function renderProductDrop(products) {
       

        for ( let i = 0; i < products.length; i++){
        console.log(products[i])
        return(
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a key={products[i].id} className="products.type" href="#">{products[i].products[0].type}</a>
            </div>
        )}
    }

    



    return (
        <Container>
            <Row className="justify-content-md-center">
                <h1 className="text-center">Product Estimate Page (temp text)</h1>
            </Row>

            <DropDown
               products={renderDrop2(products)}
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






    );
}

export default Product;



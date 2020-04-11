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
    const [productItems, setProductItems] = useState([{}])

    
   
    useEffect(() => {
        // Api call to get product and feature data //
        API.getProducts()
            .then(res => {
                console.log(res.data)
                // Convert api product data to array //
                // let productArray = []
                // for( let i = 0; i < res.data.length; i++){
                //     productArray.push(res.data[i].products)
                // }
                // console.log(productArray)

                // Set State for products
                setProducts(res.data);

                getMenuItems(products)


            // Api call to get product feature data //
                API.getFeatures()
                    .then(res => {
                        setFeaturesObj(res);
                    })
            }
            )
            .catch(err => console.log(err));

    }, []);


    console.log("below should be array of products object")
    console.log(products);
    console.log("below should be features object")
    console.log(featuresObj);
    console.log(productItems);

    function getMenuItems(products) {
        let menuItems;
        for( let i = 0, j = 0; i < products.length; i++ ){
            console.log("testing")
            console.log(products[i].products[j].type)
            menuItems = [{
                key: products[i].products[0]._id,
                label: products[i].products[j].type,
                value: products[i].products[j].type
            }];
            console.log(menuItems)
    }
    setProductItems(menuItems)
    }
    
    
        
       


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
        console.log(product)
        for (let i = 0; i < product.length; i++)
            return (
                <a
                    key={product[i]._id}
                    className="dropdown-item"
                    href="#">
                    {product[i].type}
                </a>
            )
    }
  

    function renderProductDrop(products) {
       console.log(products)
        console.log("productdrop test")
        for ( let i = 0; i < products.length; i++)
        console.log(products[i].products[0].type)
        return(
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            </Dropdown.Menu>
        )
    }

    



    return (
        <Container>
            <Row className="justify-content-md-center">
                <h1 className="text-center">Product Estimate Page (temp text)</h1>
            </Row>

            <DropDown
               products={products.map(renderProductDrop)}
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



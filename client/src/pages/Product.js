import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import QuoteContainer from "../components/QuoteContainer";
import API from "../utils/API";
import Wrapper from '../components/Wrapper';
import ClientContext from "../utils/GlobalState";


function Product() {

    const [products, setProducts] = useState([]);
    const [features, setFeatures] = useState({});
    const [selectedProduct, setSelectedProduct] = useState();
    const [selectedProductPX, setSelectedProductPX] = useState();
    const [selectedSize, setSelectedSize] = useState();
    const [selectedBacking, setSelectedBacking] = useState();
    const [selectedDesign, setSelectedDesign] = useState();
    const [selectedFinish, setSelectedFinish] = useState();
    const [selectedHardware, setSelectedHardware] = useState();
    const [backingPrice, setBackingPrice] = useState();
    const [finishPrice, setFinishPrice] = useState();
    const [designPrice, setDesignPrice] = useState();
    const [hardwarePrice, setHardwarePrice] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [defaultValue, setDefaultValue] = useState();

    const { selectedClient } = useContext(ClientContext);


    let newProduct = {

        project_id: {
            id: selectedClient.projectID
        },

        product:
        {
            name: selectedProduct,
            price: selectedProductPX
        },
        features: [
            {
                name: "design",
                type: selectedDesign,
                price: designPrice
            },
            {
                name: "backing",
                type: selectedBacking,
                price: backingPrice
            },
            {
                name: "finish",
                type: selectedFinish,
                price: finishPrice
            },
            {
                name: "hardware",
                type: selectedHardware,
                price: hardwarePrice,
            }
        ],
        total: {
            price: totalPrice
        },
    }

    useEffect(() => {
        // Api call to get product and feature data //
        API.getProducts()
            .then(res => {
                console.log(res.data)

                // Set State for products
                setProducts(res.data)
                console.log(products)

                // Api call to get product feature data //
                API.getFeatures()
                    .then(res => {
                        setFeatures(res.data);
                    })
            })
            .catch(err => console.log(err))

        setSelectedProductPX(0);
        setBackingPrice(0);
        setDesignPrice(0);
        setHardwarePrice(0);
        setFinishPrice(0);
        setTotalPrice(0);
        setDefaultValue("Select")

    }, []);


    // console.log(features);
    console.log(selectedProduct);
    console.log(selectedProductPX);
    console.log(selectedSize);
    console.log(backingPrice);



    // Function to pull product names/id's from products state and set to dropdown items //
    const renderProductDrop = (product) => {
        let ans;
        let selectValue = <option
            className="dropdown-item"
            value={defaultValue}
        >
            {defaultValue + " Product"}
        </option>
        if (product.length === 0) {
            ans = []
        } else {
            ans = product.map((product) => {
                return <option
                    key={product._id}
                    className="dropdown-item"
                    value={product.products[0].type}
                >
                    {product.products[0].type}
                </option>
            })
        }
        ans.unshift(selectValue)
        return ans;
    }
    // This function is called in JSX and will populate dropdown menus for feature options////   
    const renderFeatureDrop = (featureState, featureType) => {
        let ans = [];
        let selectValue = <option
            className="dropdown-item"
            value={defaultValue}
        >
            {defaultValue + " " + featureType + " type"}
        </option>
        if (featureState.length === 0) {
            ans = ""
        } else {
            for (let i = 0; i < featureState.length; i++) {
                if (featureState[i][featureType] && featureState[i][featureType].size === selectedSize) {
                    console.log(featureType)
                    ans.push(<option
                        key={featureState[i]._id}
                        className="dropdown-item"
                        value={featureState[i][featureType].type}
                    >
                        {featureState[i][featureType].type}
                    </option>)
                }
            }
        }
        ans.unshift(selectValue)
        return ans;
    }
    // Event listener for product dropdown = used to isolate base product name and price ////
    const handleProductSelect = event => {

        let sizeSelected;
        console.log("handleProductSelect is working")
        let curProd = event.target.value;
        console.log(curProd)
        setSelectedProduct(event.target.value)

        for (let i = 0; i < products.length; i++) {
            if (event.target.value === products[i].products[0].type) {
                let curProdPX = products[i].products[0].price;
                console.log(curProdPX);
                setSelectedProductPX(curProdPX);
                setTotalPrice(curProdPX + backingPrice + finishPrice + designPrice + hardwarePrice)
            }
        }
        if (curProd === "Single Security Door") {
            sizeSelected = "Single";
            setSelectedSize(sizeSelected);
        }
        if (curProd === "Double Security Door" || curProd === "French Security Door") {
            sizeSelected = "Double";
            setSelectedSize(sizeSelected);
        }
    }



    // Event listener to handle selection of product features///////////////////////////////////
    const handleFeatureSelect = function (event, type) {
        console.log(type);
        console.log("handleFeatureSelect is working!");
        let featureSelected = event.target.value;
        console.log(featureSelected);
        console.log("The selected size is " + selectedSize);

        let featureTypeArray = []
        let featurePriceArray = [];

        // This for loop will filter all of the options for the named features. ie all backings, all finishes, etc. ///
        for (let i = 0; i < features.length; i++) {
            if (features[i][type]) {
                featureTypeArray.push(features[i][type]);
            };
        }
        console.log(featureTypeArray)

        // for loop to determine if size is double or single and filter correct feature price ////////
        let featurePrice;
        for (let j = 0; j < featureTypeArray.length; j++) {
            if (featureTypeArray[j].type === featureSelected && selectedSize === "Double") {
                console.log(featureTypeArray[j]);
                featurePriceArray.push(featureTypeArray[j].price)
                console.log(featurePriceArray)
                featurePrice = Math.max.apply(Math, featurePriceArray);
            } else if (featureTypeArray[j].type === featureSelected && selectedSize === "Single") {
                console.log(featureTypeArray[j]);
                featurePriceArray.push(featureTypeArray[j].price)
                console.log(featurePriceArray)
                featurePrice = Math.min.apply(Math, featurePriceArray);
            }
            setTotalPrice(selectedProductPX + backingPrice + finishPrice + designPrice + hardwarePrice)
        }
        // Switch case used to determine which feature needs to be set ///
        switch (type) {
            case "backing":
                console.log("backing triggered")
                setBackingPrice(featurePrice);
                setSelectedBacking(featureSelected);
                break;
            case "finish":
                console.log("finish triggered")
                setFinishPrice(featurePrice);
                setSelectedFinish(featureSelected);
                break;
            case "hardware":
                console.log("hardware triggered")
                setHardwarePrice(featurePrice);
                setSelectedHardware(featureSelected);
                break;
            case "design":
                console.log("design triggered")
                setDesignPrice(featurePrice);
                setSelectedDesign(featureSelected);
                break;
        }
        setTotalPrice(selectedProductPX + backingPrice + finishPrice + designPrice + hardwarePrice)
    };


    // Event listener to add new product to existing project ///
    const addProduct = event => {
        console.log("add product has been clicked!")
        console.log(newProduct)


        API.addProduct(newProduct)
            .then(res => {
                console.log(res.data)
            })
    }



    return (
        <Wrapper>
            <Container>
                <Row className="justify-content-md-center">
                    <h1 className="text-center">Signature IronWorks</h1>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={8} md={8}>
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
                            backingPrice={backingPrice}
                            finishPrice={finishPrice}
                            designPrice={designPrice}
                            hardwarePrice={hardwarePrice}
                            totalPrice={totalPrice}
                            addProduct={addProduct}

                        />
                    </Col>


                </Row>


            </Container>

        </Wrapper>


    );
}

export default Product;




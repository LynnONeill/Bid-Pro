import React from "react";
import { Link } from "react-router-dom";
import DropDown from "../components/DropDown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import API from "../utils/API";

// const [baseProduct, setBaseProduct] = useState;

// useEffect() {

// }

function HandleDropDown(event) {
    console.log("dropdown clicked")
    API.getProducts([{}])
        .then(res => {
            console.log(res)
            console.log("is this thing on??")
        })
}



function Product() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <h1 className="text-center">Product Estimate Page (temp text)</h1>
            </Row>
        
            <DropDown
            HandleDropDown={HandleDropDown}
            />
         <br></br>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Container className="justify-content-md-center">
            <Container className="border border-secondary rounded-lg w-75">
            <Row className="justify-content-md-center my-4">
                <Col  xs={3} md={3}>
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
                <Col  xs={3} md={3}>
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
                <Col  xs={8} md={3}>
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



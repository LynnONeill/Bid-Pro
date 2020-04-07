import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Grid";
import DropDown from "../components/DropDown";

// const [baseProduct, setBaseProduct] = useState;

// useEffect() {
    
// }



function Product() {
    return (
        <Container>
            <h1 className="text-center">Product Estimate Page (temp text)</h1>
            <DropDown 
            />
          
         <br></br>

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



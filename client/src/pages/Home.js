import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
             <h1 className="text-center">Home Page(temp text)</h1>
             <Link to="/Project">Temp link to project page</Link>
             <br></br>
             <Link to="/Client">Temp link to client page</Link>
             <br></br>
             <Link to="/Login">Temp link back to Login page</Link>
             <br></br>
             <Link to="/Product">Temp link to Product Page</Link>
             <br></br>
             <Link to="/AddClient">Temp link to Add Client page</Link>
        </div>
       
    );
}

export default Home;
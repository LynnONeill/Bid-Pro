import React, { useEffect, useState, useContext } from "react";
import ClientContext from "../utils/GlobalState"
import { Link } from "react-router-dom";
import Container from "../components/Grid";
import ClientsProjects from "../components/ClientsProjects"
import API from "../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import QuoteSummary from "../components/QuoteSummary";


function Project(props) {
    const { selectedClient } = useContext(ClientContext)

    const [projects, setProjects] = useState([]);
    const [total, setTotal] = useState()
    useEffect(() => {
        console.log(selectedClient.projectID)
        // Api call to get product and feature data //
       setUp();
    }, []);
    function setUp(){
         
        API.getClientProducts(selectedClient.projectID)
            .then((res) => {
                console.log(res);
                let total = 0
                res.data.map(each => total += each.total.price)
                setProjects(res.data);
                console.log(total)
                setTotal(total)
            })
            .catch((err) => console.log(err));  
       }
       
    
       const queryProducts = event => {
        console.log("sendPDF click is working!")
        console.log(selectedClient);

        API.queryProducts(selectedClient.projectID, selectedClient)
            .then(res => {
                console.log(res.data)

                API.sendPDF(selectedClient.projectID, selectedClient)
                    .then(res => {
                        console.log(res.data)
                        alert("The estimate has been sent to the client!")
                    })
            })

    }

    return (
        <Container>
            <h1 className="text-center">Project Page (temp text)</h1>
            <div>
                <Row>
                    <Col xs={4} md={4}>
                        <div>
                            {projects.map(project => {
                                return (
                                    <ClientsProjects value={project} key={project._id} setUp={setUp} />
                                )
                            })}

                        </div>
                    </Col>
                    <Col xs={4} md={4}>
                        <div>
                            <QuoteSummary
                                queryProducts={queryProducts}
                                totalValue={total}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
            <Link to="/Product"><button>
                Add New product
                </button></Link>

        </Container >



    );
}

export default Project;
import { Link } from "react-router-dom";
import Container from "../components/Grid";
import { Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Wrapper from '../components/Wrapper';
import ClientContext from "../utils/GlobalState"
import API from "../utils/API";
import React, { useEffect, useState, useContext } from "react";
import ClientList from "../components/ClientList";
import ClientSearch from "../components/ClientSearch";

function Home(props) {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    // Api call to get product and feature data //
    API.getAllClients()
      .then((res) => {
        console.log(res);
        setClients(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function goToClient() {
    props.history.push("/AddClient");
  }

  return (
    <Wrapper>
      <Container fluid>
        <div>
          <form>
            <Row>
              <Col>
                <ClientSearch />
              </Col>
            <div style={{ textAlign: "right" }}>
              <button onClick={goToClient} style={{ background: "#6DAC64", padding: 10, color: "#fff", borderRadius: 5 }}>
                {" "}
                <FaPlus /> Client{" "}
              </button>
            </div>
            </Row>
            
            <label>
              {clients.map((client) => {
                return <ClientList value={client} key={client.id} />;
              })}
            </label>
          </form>
        </div>

        <div>
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
      </Container>
    </Wrapper>
  );
}
export default Home;

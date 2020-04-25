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
  const [permClients, setPermClients] = useState([])
  const [clients, setClients] = useState([]);




  useEffect(() => {
    // Api call to get product and feature data //
    API.getAllClients()
      .then((res) => {
        console.log(res);
        setClients(res.data);
        setPermClients(res.data);
        
      })
      .catch((err) => console.log(err));
  }, []);

  function goToClient() {
    props.history.push("/AddClient");
  }

  function handleSearchChange(event) {
    console.log("search initiated");
    const searchString = event.target.value.toLowerCase();
    console.log(searchString)
    let filteredClients = permClients.filter((client) => {
      return (
        client.name.toLowerCase().includes(searchString) || 
        client.address.toLowerCase().includes(searchString) ||
        client.city.toLowerCase().includes(searchString) ||
        client.email.toLowerCase().includes(searchString) ||
        client.phoneNumber.includes(searchString)
      );
    });
    console.log(filteredClients)
    setClients(filteredClients)
}






  return (
    <Wrapper>
      <Container fluid>
        <h1>Welcome</h1>
        <div>
        <button className="homeTopRight btn">
          <Link to="/AddClient"><FaPlus /> Add Client</Link>
        </button>
          <form>
            <h2>Search Clients</h2>
            <Row>
              <Col>
                <ClientSearch
                  handleSearchChange={handleSearchChange}
                />
              </Col>
            </Row>
            
            <label>
              {clients.map((client) => {
                return <ClientList value={client} key={client.id} setClients={setClients}/>;
              })}
            </label>
          </form>
        </div>
      </Container>
    </Wrapper>
  );
}
export default Home;

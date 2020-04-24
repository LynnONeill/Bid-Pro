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
  const [search, setSearch] =useState();

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

  function handleSearchChange(event) {
    console.log("search initiated");
    const newSearch = event.target.value;
    const lowerCaseSearch = newSearch.toLowerCase();
    setSearch(lowerCaseSearch);
    console.log(search);
    if(search !=="") {
      console.log("made it this far")
      console.log(clients)
      clients.forEach(clients => {
        for(let i = 0; i < clients.length; i++) {
          if(clients[i].name.toLowerCase() === search){
          console.log("must have a match")
          const filteredList = [];
          filteredList.push(clients);
          console.log(filteredList);
          setClients(filteredList);
          }
        }
        })
    }
    return;
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

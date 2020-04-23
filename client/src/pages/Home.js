import { Link } from "react-router-dom";
import Container from "../components/Grid";
import { Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import Wrapper from '../components/Wrapper';
import ClientContext from "../utils/GlobalState"
import API from "../utils/API";
import React, { useEffect, useState, useContext } from "react";
import ClientList from "../components/ClientList";

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
            <div style={{ textAlign: "right" }}>
              <button onClick={goToClient} style={{ background: "#6DAC64", padding: 10, color: "#fff", borderRadius: 5 }}>
                {" "}
                <FaPlus /> Client{" "}
              </button>
            </div>
            <label>
              {clients.map((client) => {
                return <ClientList value={client} key={client.id} />;
              })}
            </label>
          </form>
        </div>
      </Container>
    </Wrapper>
  );
}
export default Home;

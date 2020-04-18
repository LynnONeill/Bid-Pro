import { Link } from "react-router-dom";
import Container from "../components/Grid";
import {
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Checkbox,
  Radio,
  Button,
} from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import API from "../utils/API";
import React, { useEffect, useState } from "react";
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
    <Container fluid>
      <div>
        <form>
          <div style={{ textAlign: "right" }}>
            <button onClick={goToClient} style={{ background: "#6DAC64", padding:10, color:"#fff", borderRadius:5}}>
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
  );
}
export default Home;

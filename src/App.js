import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Axios from 'axios'

import MyCard from './MyCard'

const App = () => {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const response = await Axios.get('https://randomuser.me/api/');
    const data = response.data;
    const details = data.results[0];
    console.log("RESPONSE: ", details);
    setDetails(details);
  }

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col>
          <h2 className="text-center text-white title">Random User Generator Using API</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="offset-md-4">
          <MyCard details={details}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

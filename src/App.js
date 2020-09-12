import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import {Jumbotron, Button} from 'react-bootstrap';
import Jumbo from './components/Jumbo';
import CardUI from './components/CardUI';

function App() {
  return (
    <div className="App">
      {/* Navigation starts */}
            <Navigation />
      {/* Navigation Ends */}

      {/* Jumbotron starts */}
        <div className="container">
          <Jumbo />
        </div>  
      {/* Jumbotron ends */}

      {/* CardUI start */}
      <div className="container">
          <CardUI />
      </div >
      {/* CardUI ends */}
    </div>

  );
}

export default App;

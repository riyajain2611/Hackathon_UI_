import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

function Navigation(){
return (
    <div className="margin-t-b">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">DeDuplicate</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);
}

export default Navigation

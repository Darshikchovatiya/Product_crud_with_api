import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="/" style={{color: "white", textDecoration: "none", marginRight: 20}}>Add Products</NavLink>
                        <NavLink to="/view" style={{color: "white", textDecoration: "none"}}>View Products</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;
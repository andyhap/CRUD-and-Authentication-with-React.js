import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AppNavbar() {
const navigate = useNavigate();
const token = localStorage.getItem('token');

const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
};

return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
        <Navbar.Brand href="/">Latihan CRUD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            {token ? (
            <>
                <Nav.Link onClick={() => navigate('/dashboard')}>Dashboard</Nav.Link>
                <Button variant="outline-light" size="sm" onClick={handleLogout}>
                Logout
                </Button>
            </>
            ) : (
            <>
                <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
                <Nav.Link onClick={() => navigate('/register')}>Register</Nav.Link>
            </>
            )}
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
);
}

export default AppNavbar;

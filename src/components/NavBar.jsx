import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './style/NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Navbar variant="dark" bg="dark" expand="lg" className="nav-bar">
      <Container>
        <Link to="/" style={{ color: '#fff' }}>CryptoCurrencies</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {
              !(location.pathname === '/') && (
                <Button
                  variant="outline-secondary"
                  className="go-back-arrow"
                  onClick={goBack}
                >
                  &larr;
                </Button>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

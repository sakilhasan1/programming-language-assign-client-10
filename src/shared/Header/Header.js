import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">                <Container>
                <img src="../../assets/language.jpg" alt="" />
                {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                <Nav className="me-auto">

                    <Link className='text-white me-2 text-decoration-none' to="/">Home</Link>
                    <Link className='text-white me-2 text-decoration-none' to="/course">Course</Link>
                    <Link className='text-white me-2 text-decoration-none' to="/blog">Blog</Link>
                    <Link className='text-white me-2 text-decoration-none' to="/login">Login</Link>
                    <Link className='text-white me-2 text-decoration-none' to="/register">Register</Link>
                </Nav>
            </Container>
            </Navbar>

        </>
    );
};

export default Header;
import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mb-5'>
            <Navbar className='p-4' bg="primary" variant="dark">
                <Container>
                    <img src="../../assets/language.jpg" alt="" />
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto  ">

                        <div>
                            <Link className='text-white me-5 text-decoration-none' to="/">Home</Link>
                            <Link className='text-white me-5 text-decoration-none' to="/course">Course</Link>
                            <Link className='text-white me-5 text-decoration-none' to="/blog">Blog</Link>
                        </div>
                        <div>
                            <Link className='text-white me-5 text-decoration-none' to="/login">Login</Link>
                            <Link className='text-white me-5 text-decoration-none' to="/register">Register</Link>
                        </div>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;
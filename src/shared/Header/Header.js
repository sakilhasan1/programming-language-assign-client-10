import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className='mb-5'>
            <Navbar className='p-4' bg="primary" variant="dark">
                <Container>
                    <img src="../../assets/language.jpg" alt="" />
                    <Navbar.Brand className="me-auto  text-6xl text-secondary" ><h1>Programing</h1> </Navbar.Brand>
                    <Nav className="me-auto  ">
                        <Link className='text-white me-5 text-decoration-none' to="/">Home</Link>
                        <Link className='text-white me-5 text-decoration-none' to="/course">Course</Link>
                        <Link className='text-white me-5 text-decoration-none' to="/blog">Blog</Link>
                        <>
                            {user?.email ?
                                <button onClick={handleSignOut}>Sign Out</button>
                                :
                                <div>
                                    < Link className='text-white me-5 text-decoration-none' to="/login">Login</Link>
                                    <Link className='text-white me-5 text-decoration-none' to="/register">Register</Link>
                                </div>
                            }

                        </>


                        {user?.photoURL ?
                            <Image
                                style={{ height: '40px' }}
                                roundedCircle
                                src={user?.photoURL}></Image>
                            :
                            <FaUser></FaUser>
                        }

                    </Nav>
                    {/* {
                        user?.email ?
                            <button onClick={handleSignOut}>Sign Out</button>
                            : <Link to='/login'>Login</Link>
                    } */}
                </Container>
            </Navbar>

        </div >
    );
};

export default Header;
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    return (
        <div className='mt-6 ' onSubmit={handleLogin}>
            <h1 className='text-center mb-3  p-3 text-success'>Please Login hare</h1>
            <Form className='w-25 h-50 m-auto  border border-success p-4 rounded bg-dark' >

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p><small className='text-white'>New to this website? Please <Link to='/register'>Register</Link></small></p>

            </Form>
        </div>
    );
};

export default Login;
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';



const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [PasswordError, setPasswordError] = useState(' ');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (password.length < 6) {
            setPasswordError('Please provide at least 6 password')
            return;
        }
        setPasswordError(' ');

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                setSuccess(true);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div className='mt-6 ' onSubmit={handleLogin}>
            <h1 className='text-center mb-3  p-3 text-success'>Please Login now!</h1>
            <Form className='w-50 h-50 m-auto  border border-success p-4 rounded bg-dark' >

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <p>{PasswordError}</p>
                {success && <p>User is successfully</p>}

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p><small className='text-white'>New to this website? Please <Link to='/register'>Register</Link></small></p>

            </Form>
        </div>
    );
};

export default Login;
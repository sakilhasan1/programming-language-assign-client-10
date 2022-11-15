import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.config';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const auth = getAuth(app);

const Register = () => {
    const [PasswordError, setPasswordError] = useState(' ');
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState(' ');

    const { createUser, verifyEmail, signInWithGoogle, updateUserProfile } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const name = form.name.value;
        const PhotoURL = form.PhotoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, PhotoURL, email, password);

        if (password.length < 6) {
            setPasswordError('please at least provide 6 character')
            return;
        }
        setPasswordError(' ');

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setSuccess(true);
                handleUpdateUserProfile(name, PhotoURL)
                verifyEmail()
                    .then(() => {
                        alert('You email is not verified.check your email')
                    })
            })
            .catch(error => {
                console.error(error);
                setPasswordError(error.message)
            })
    }

    const handleEmailBlur = (event) => {

        const form = event.target;
        const email = form.value;
        setUserEmail(email);
        // console.log(email);

    }
    console.log(userEmail);
    const handleForgetPassword = () => {
        if (!userEmail) {
            alert('please enter your email address')
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('password reset email sent.please check your email')
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleUpdateUserProfile = (name, PhotoURL) => {
        const profile = {
            displayName: name,
            PhotoURL: PhotoURL,
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div onSubmit={handleRegister}>
            <h1 className='text-center mb-3  p-3 text-success'>Please Register now!</h1>
            <Form className='w-50 h-50 m-auto  border border-success p-4 rounded bg-dark' >

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='PhotoURL' placeholder="Enter photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{PasswordError}</p>
                {success && <p className='text-success'>User created successfully</p>}
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p><small className='text-white'>Already have an account? Please <Link onClick={handleForgetPassword} to='/login'>login</Link></small></p>
                <button className='bg-primary rounded' onClick={handleGoogleSignIn}>Login with Google</button>
            </Form>

        </div>
    );
};

export default Register;
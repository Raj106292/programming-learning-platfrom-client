import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Shared/Contexts/ContextsUser';

const Login = () => {

    const { userLogIn, userLogInWithGoogle, userLogInWithGithub } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const from = location.state?.from?.pathname || '/'

    const handleLogInForm = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        userLogIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };

    const handleGoogleLogIn = () => {
        userLogInWithGoogle(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };

    const handleGithubLogIn = () => {
        userLogInWithGithub(githubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };

    return (
        <div>
            <h2>Login To Your Account</h2>
            <Form onSubmit={handleLogInForm} className="w-50">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>Don't have an account? <Link to='/register' className='text-primary' style={{ textDecoration: 'none' }}>Please Register</Link></p>
            </Form>

            <div className='d-flex gap-2'>
                <hr className='w-25' />or<hr className='w-25' />
            </div>
            <div className='mb-3'>
                <button onClick={handleGoogleLogIn} className='w-50 p-2 rounded'>Google Log-in</button>
            </div>
            <div>
                <button onClick={handleGithubLogIn} className='w-50 p-2 rounded'>Github Log-in</button>
            </div>
        </div>
    );
};

export default Login;
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Shared/Contexts/ContextsUser';

const Login = () => {

    const {userLogIn} = useContext(AuthContext);
    const [error, setError] = useState('');

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
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          });
    }

    return (
        <div>
            <h2>This is log in page</h2>
            <Form onSubmit={handleLogInForm} className="w-50">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className='text-danger'>{error}</p>
            </Form>
        </div>
    );
};

export default Login;
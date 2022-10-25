import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Shared/Contexts/ContextsUser';

const Register = () => {

    const { createNewUser } = useContext(AuthContext);
    const [isCheck, setIsCheck] = useState(false);
    const [error, setError] = useState('');

    const handleRegisterForm = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setIsCheck(false);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });

    }

    const handleCheck = () => {
        setIsCheck(true);
    }

    return (
        <div>
            <h2>Register Your Account</h2>
            <Form onSubmit={handleRegisterForm} className='w-50'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                    <Form.Label>Your Photo URL</Form.Label>
                    <Form.Control type="text" name="photoURL" placeholder="Enter your photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleCheck} type="checkbox" label="Accept Terms and Conditions" />
                </Form.Group>
                <p className='danger'>{error}</p>
                <Button variant="primary" type="submit" disabled={!isCheck}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;
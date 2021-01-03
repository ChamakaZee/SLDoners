import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';

export default function HomeComponent() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios.get('http://localhost:4000/users/getUsers')
            .then(response => {
                console.log(response.data);
                console.log("Form User : " + email);
                console.log("From password : " + password);

                let registeredUser = false;
                const numbers = response.data;

                numbers.forEach(function (number) {
                    if (number.email == email && number.password == password) {
                        registeredUser = true;
                        console.log("User Founds : Already registered user : " + email); // => 
                        history.push("/donate");
                    }
                });

                console.log("User Status : " + registeredUser);
                if (!registeredUser) {
                    alert("Invalied User Name or Password");
                }
            });
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>Login</Button>
                <div>
                    <Link to="/register">Create New User</Link>
                </div>
            </Form>
        </div>
    );
}
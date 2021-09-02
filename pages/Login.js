import Link from 'next/link';
import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import NavCustom from '../components/NavCustom'
import { auth } from '../lib/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';

function login(email, password) {
    signInWithEmailAndPassword(auth, email, password).then( user => console.log)
}


export default function Login()
{
    const email = useRef()
    const password = useRef()
    function handleSubmit(e)
    {
        e.preventDefault();
        login(email.current.value, password.current.value)
    }
    return (
        <>
            <NavCustom />
            <div className="super">
                <div className="red"></div>
                <div className="wrapper">
                    <h1>Artx</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="group">
                            <Form.Control className="input" type="text" required ref={email}/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <Form.Label>E-mail</Form.Label>
                        </Form.Group>
                        <Form.Group className="group">
                            <Form.Control className="input" type="password" required ref={password}/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <Form.Label>Password</Form.Label>
                        </Form.Group>
                        <Button type="submit" style={{ margin: '1rem' }}>Log in</Button>
                        <Form.Text>Not a member? <Link href="/Signup">Sign Up</Link></Form.Text>
                    </Form>
                </div>
            </div>
        </>
    )
}

import Link from 'next/link';
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import NavCustom from '../components/NavCustom'

export default function Login()
{
    function handleSubmit(e)
    {
        e.preventDefault();
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
                            <Form.Control className="input" type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <Form.Label>E-mail</Form.Label>
                        </Form.Group>
                        <Form.Group className="group">
                            <Form.Control className="input" type="password" required />
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
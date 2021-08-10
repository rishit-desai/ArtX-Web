/* eslint-disable @next/next/link-passhref */
import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import Link from 'next/link'

export default function NavCustom()
{
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">ArtX</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Link href="/Login" passHref>
                            <Nav.Link>Log In</Nav.Link>
                        </Link>
                        <Link href="/Signup" passHref>
                            <Nav.Link>Sign Up</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
import React from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";


export default function Topbar() {

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <h3>Team-finder.pl</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Form>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                            />
                        </Form>
                    </Nav>
                    <Nav className="justify-content-center">
                        <Nav.Link href="#option1">Więcej</Nav.Link>
                        <Nav.Link eventKey={1} href="#option2">
                            Opcje
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
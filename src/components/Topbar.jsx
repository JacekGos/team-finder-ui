import React from "react";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";


export default function Topbar() {

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="position-absolute w-100 top-0 left-0">
            <div className="container-fluid">
                <Navbar.Brand className="mb-0" href="/">
                    <p className="brand-title">Team-Finder.pl</p>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Form>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </Form>
                </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav >
                        <Nav.Item>
                            <Nav.Link eventKey={1} href="#option1">
                                Wydarzenia
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={2} href="#option" >
                                <Button className="input-base">
                                    Zaloguj
                                </Button>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}
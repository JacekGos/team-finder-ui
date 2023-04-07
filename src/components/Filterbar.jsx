import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {BsSliders2} from "react-icons/bs";

export default function Topbar() {

    return (
        <Container style={{ position: "sticky" }}>
            <Row>
                <Col sm={2} style={{ display: 'flex', alignItems: 'center', justifyContent: "left" }} >
                    <Form>
                        <Form.Group>
                            <Form.Control placeholder="lokalizacja" style={{ color: 'gray', height: 35, borderRadius: 30 }} />
                        </Form.Group>
                    </Form>
                </Col>
                <Col sm={8} style={{ backgroundColor: 'red', height: 70, color: 'white' }}>
                    DISCIPLINES ICONS
                </Col>
                <Col sm={2} style={{ display: 'flex', alignItems: 'center', justifyContent: "right" }}>
                    <Button className="btn-base" style={{display: 'flex', alignItems: 'center'}}>
                        <BsSliders2  style={{marginRight: 5}}/>
                        Więcej filtrów
                    </Button>

                    
                </Col>
            </Row>
        </Container>
    )
}
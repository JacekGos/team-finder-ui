import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

export default function Topbar() {

    return (
        <Container style={{position: "sticky"}}>
            <Row>
                <Col sm={2} style={{display: 'flex', alignItems: 'center', justifyContent: "left"}} >
                    <Form>
                        <Form.Group>
                            <Form.Control placeholder="lokalizacja" style={{ color: 'gray', height: 35, borderRadius: 30}}/>
                        </Form.Group>
                    </Form>
                </Col>
                <Col sm={8} style={{backgroundColor: 'red', height: 70, color: 'white'}}>
                    DISCIPLINES ICONS
                </Col>
                <Col sm={2} style={{backgroundColor: 'blue', color: 'white'}}>
                    MORE
                </Col>
            </Row>
        </Container>
    )
}
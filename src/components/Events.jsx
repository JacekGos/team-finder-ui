import React from "react";
import '../styles/events.css';
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";

export default function Events() {

    return (
        <Container fluid className="p-0">
            {/* MOBILE VIEW */}
            <Tabs className="tabs d-flex d-lg-none">
                <Tab eventKey="events" title="Wydażenia" className="tab" style={{ backgroundColor: 'red' }}>
                </Tab>
                <Tab eventKey="map" title="Mapa">
                </Tab>
            </Tabs>

            <Row className="d-none d-lg-flex">
                <Col>
                    COL 1
                </Col>
                <Col>
                    COL 2
                </Col>
            </Row>
        </Container>
    )
}
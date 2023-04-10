import React from "react";
import '../styles/events.css';
import { Container, Row, Col, Badge } from "react-bootstrap";
import { BiFootball } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";


export default function EventTab(props) {

    return (
        <Container fluid className="mt-1" style={{ height: 80, backgroundColor: '#0E2237', borderRadius: 5}}>
            <Row className="h-100 p-1">
                <Col xs={3} className="d-flex align-items-center justify-content-center rounded" style={{ backgroundColor: '#0A1929' }}>
                    <BiFootball size={45} style={{ color: "white" }} />
                </Col>
                <Col xs={9} style={{ color: 'white' }}>
                    <Row className="h-50">
                        <Col className="d-flex align-items-center justify-content-start" style={{ fontSize: 15 }}>
                            {props.name}
                        </Col>
                        <Col className="d-flex align-items-center justify-content-end" style={{ fontSize: 13 }}>
                            <Badge bg='secondary'>
                                {props.price} PLN
                            </Badge>
                        </Col>
                    </Row>
                    <Row className="h-50">
                        <Col className="d-flex align-items-center justify-content-start" style={{ fontSize: 15 }}>
                            {props.date}
                        </Col>
                        <Col className="d-flex align-items-center justify-content-end" style={{ fontSize: 13 }}>
                            {props.location}
                            <HiOutlineLocationMarker size={15} style={{ color: 'white', marginLeft: 3 }} />
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Topbar() {

    return (
        <Container style={{position: "sticky"}}>
            <Row>
                <Col sm={3} style={{display: 'flex', alignItems: 'center'}} >
                    <Container style={{backgroundColor: 'white', color: 'gray', height: 35, borderRadius: 30}}>
                        
                    </Container>
                </Col>
                <Col sm={7} style={{backgroundColor: 'red', height: 70, color: 'white'}}>
                    DISCIPLINES ICONS
                </Col>
                <Col style={{backgroundColor: 'blue', color: 'white'}}>
                    MORE
                </Col>
            </Row>
        </Container>
    )
}
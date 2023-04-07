import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {BsSliders2} from "react-icons/bs";

export default function Topbar() {

    return (
        <div className="mx-3">
            <Row>
                <Col sm={2} style={{ display: 'flex', alignItems: 'center', justifyContent: "left" }} >
                    <Form>
                        <Form.Group>
                            <Form.Control placeholder="lokalizacja" className="input-base input-search" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col sm={8} style={{height: 70, color: 'white' }}>
                    {/* DISCIPLINES ICONS */}
                </Col>
                <Col sm={2} style={{ display: 'flex', alignItems: 'center', justifyContent: "right" }} className="d-none d-lg-flex">
                    <Button className="input-base flex-nowrap" style={{display: 'flex', alignItems: 'center'}}>
                        <BsSliders2  style={{marginRight: 5}}/>
                        Więcej filtrów
                    </Button>

                    
                </Col>
            </Row>
        </div>
    )
}
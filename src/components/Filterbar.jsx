import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { BsSliders2 } from "react-icons/bs";
import { BiFootball, BiTennisBall } from "react-icons/bi";
import { FaVolleyballBall, FaBasketballBall } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { SlMagnifier } from "react-icons/sl";

export default function Filterbar() {



    return (
        <Container fluid>
            <Row className="d-none d-lg-flex" style={{height: 90}}>
                <Col xs={2} sm={2} md={4} className="d-flex align-items-center justify-content-start ps-0" >
                    <Form>
                        <Form.Group>
                            <Form.Control placeholder="lokalizacja" className="input-base input-search" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs={3} sm={5} md={4} className="d-flex align-items-center justify-content-between">
                    <Button className="input-base rounded-circle" >
                        <h2><BiFootball style={{color: "white"}} /></h2>
                    </Button>
                    <Button className="input-base rounded-circle" >
                        <h2><FaVolleyballBall style={{color: "white"}}/></h2>
                    </Button>
                    <Button className="input-base rounded-circle" >
                        <h2><FaBasketballBall style={{color: "white"}}/></h2>
                    </Button>
                    <Button className="input-base rounded-circle" >
                        <h2><BiTennisBall style={{color: "white"}}/></h2>
                    </Button>
                    <Button className="input-base rounded-circle" >
                        <h2><IoIosBicycle style={{color: "white"}}/></h2>
                    </Button>
                    <Button className="input-base text-nowrap d-flex d-lg-none">
                        Dyscyplina
                    </Button>
                </Col>
                <Col xs={7} sm={5} md={4} className="d-flex align-items-center justify-content-end">
                    <Button className="input-base text-nowrap d-flex align-items-center" >
                        <BsSliders2 className="me-1 d-none d-lg-flex" />
                        Więcej filtrów
                    </Button>
                </Col>
            </Row>
            {/* MOBILE VIEW */}
            <Row className="d-flex d-lg-none" style={{ height: 70 }}>
                <Col className="d-flex align-items-center ps-0 overflow-scroll">
                    <Button className="input-base rounded-circle me-2" >
                        <SlMagnifier />
                    </Button>
                    <Button className="input-base text-nowrap d-flex align-items-center me-2" >
                        Dyscyplina
                    </Button>
                    <Button className="input-base text-nowrap d-flex align-items-center me-2" >
                        Więcej filtrów
                    </Button>
                    <Button className="input-base text-nowrap d-flex align-items-center me-2" >
                        Więcej filtrów
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
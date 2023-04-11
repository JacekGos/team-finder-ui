import React, { useState } from "react";
import '../styles/filter.css';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { BsSliders2 } from "react-icons/bs";
import { BiFootball, BiTennisBall } from "react-icons/bi";
import { FaVolleyballBall, FaBasketballBall } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { SlMagnifier } from "react-icons/sl";
import FilterModal from "./FilterModal";

export default function Filterbar() {

    const [show, setShow] = useState(false);
    const [isFullscreen, setFullscreen] = useState(true);
    const [type, setType] = useState('base');

    function handleModal(isFullscreen, type) {
        setFullscreen(isFullscreen);
        setShow(true);
        setType(type);
    }

    return (
        <>
            <Container fluid>
                {/* MOBILE VIEW */}
                <Row className="d-flex d-lg-none position-fixed w-100" style={{ height: 70, padding: '8px 30px 1px 10px', backgroundColor: '#0A1929', marginTop: -80 }}>
                    <Col className="d-flex align-items-center ps-0 overflow-scroll no-scrollbar">
                        <Button className="input-base rounded-circle me-2" onClick={() => handleModal(true, 'base')}>
                            <SlMagnifier />
                        </Button>
                        <Button className="input-base text-nowrap d-flex align-items-center me-2" onClick={() => handleModal(true, 'advanced')}>
                            Więcej filtrów
                        </Button>
                        <Button className="input-base text-nowrap d-flex align-items-center me-2" onClick={() => handleModal(true, 'advanced')}>
                            Więcej filtrów
                        </Button>
                        <Button className="input-base text-nowrap d-flex align-items-center me-2" onClick={() => handleModal(true, 'advanced')}>
                            Więcej filtrów
                        </Button>
                        <Button className="input-base text-nowrap d-flex align-items-center me-2" onClick={() => handleModal(true, 'advanced')}>
                            Więcej filtrów
                        </Button>
                        <Button className="input-base text-nowrap d-flex align-items-center me-2" onClick={() => handleModal(true, 'advanced')}>
                            Więcej filtrów
                        </Button>
                        <Button className="input-base text-nowrap d-flex align-items-center me-2" onClick={() => handleModal(true, 'advanced')}>
                            Więcej filtrów
                        </Button>
                    </Col>
                </Row>
                {/* DESKTOP VIEW */}
                <Row className="d-none d-lg-flex" style={{ height: 90, width: '100%', backgroundColor: '#0A1929' }}>
                    <Col xs={2} sm={2} md={4} className="d-flex align-items-center justify-content-start ps-0" >
                        <Form>
                            <Form.Group>
                                <Form.Control placeholder="lokalizacja" className="input-base input-search" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xs={3} sm={5} md={4} className="d-flex align-items-center justify-content-between">
                        <Button className="input-base rounded-circle" style={{ aspectRatio: '1/1' }}>
                            <BiFootball size={35} style={{ color: "white" }} />
                        </Button>
                        <Button className="input-base rounded-circle" style={{ aspectRatio: '1/1' }}>
                            <FaVolleyballBall size={35} style={{ color: "white" }} />
                        </Button>
                        <Button className="input-base rounded-circle" style={{ aspectRatio: '1/1' }}>
                            <FaBasketballBall size={35} style={{ color: "white" }} />
                        </Button>
                        <Button className="input-base rounded-circle" style={{ aspectRatio: '1/1' }}>
                            <BiTennisBall size={35} style={{ color: "white" }} />
                        </Button>
                        <Button className="input-base rounded-circle" style={{ aspectRatio: '1/1' }}>
                            <IoIosBicycle size={35} style={{ color: "white" }} />
                        </Button>

                    </Col>
                    <Col xs={7} sm={5} md={4} className="d-flex align-items-center justify-content-end">
                        <Button className="input-base text-nowrap d-flex align-items-center" onClick={() => handleModal(false, 'advanced')}>
                            <BsSliders2 className="me-1 d-none d-lg-flex" />
                            Więcej filtrów
                        </Button>
                    </Col>
                </Row>
            </Container>
            <FilterModal show={show} fullscreen={isFullscreen} type={type} handleClose={setShow} />
        </>
    )
}
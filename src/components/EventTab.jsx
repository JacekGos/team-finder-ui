import React from "react";
import '../styles/events.css';
import { Container, Row, Col, Badge } from "react-bootstrap";
import { BiFootball, BiTennisBall } from "react-icons/bi";
import { FaVolleyballBall, FaBasketballBall } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";


export default function EventTab(props) {

    let icon = (discipline) => {
        switch (discipline) {
            case "football":
                return <BiFootball size={45} style={{ color: "white" }} />;
            case 'volleyball':
                return <FaVolleyballBall size={45} style={{ color: "white" }} />;
            case 'basketball':
                return <FaBasketballBall size={45} style={{ color: "white" }} />;
            case 'tennis':
                return <BiTennisBall size={45} style={{ color: "white" }} />;
            case 'bicycle':
            return <IoIosBicycle size={45} style={{ color: "white" }} />;
            default:
                return <FaBasketballBall size={45} style={{ color: "white" }} />;
        }
    }

    return (
        <Container fluid className="mt-1" style={{ height: 80, backgroundColor: '#0E2237', borderRadius: 5 }}>
            <Row className="h-100 p-1">
                <Col xs={3} className="d-flex align-items-center justify-content-center rounded" style={{ backgroundColor: '#0A1929' }}>
                    {icon(props.discipline)}
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
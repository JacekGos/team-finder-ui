import React from "react";
import '../styles/events.css';
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import EventTab from "./EventTab";

export default function Events() {

    let events = [
        {
            name: 'Gierka',
            price: 10,
            date: '09.04 14:00',
            location: 'Kielce, Krakowska 15'
        },
        {
            name: 'Gierka',
            price: 10,
            date: '09.04 14:00',
            location: 'Kielce, Krakowska 15'
        },
        {
            name: 'Gierka',
            price: 10,
            date: '09.04 14:00',
            location: 'Kielce, Krakowska 15'
        },
        {
            name: 'Gierka',
            price: 10,
            date: '09.04 14:00',
            location: 'Kielce, Krakowska 15'
        },
        {
            name: 'Gierka',
            price: 10,
            date: '09.04 14:00',
            location: 'Kielce, Krakowska 15'
        },
        {
            name: 'Gierka',
            price: 10,
            date: '09.04 14:00',
            location: 'Kielce, Krakowska 15'
        },
        {
            name: 'Gierka',
            price: 10,
            date: '09.04 14:00',
            location: 'Kielce, Krakowska 15'
        },
        {
            name: 'Gierka',
            price: 10,
            date: '09.04 14:00',
            location: 'Kielce, Krakowska 15'
        },
        {
            name: 'Gierka',
            price: 10,
            date: '09.04 14:00',
            location: 'Kielce, Krakowska 15'
        },
        {
            name: 'Gierka',
            price: 10,
            date: '09.04 14:00',
            location: 'Kielce, Krakowska 15'
        },
        {
            name: 'Gierka',
            price: 10,
            date: '09.04 14:00',
            location: 'Kielce, Krakowska 15'
        },
    ]

    return (
        <Container fluid className="p-0 d-inline d-lg-none">
            {/* MOBILE VIEW */}
            <Tabs className="tabs ">
                <Tab eventKey="events" title="Wydażenia">
                    {events.map((data, key) => {
                        return <EventTab key={key} name={data.name} price={data.price} date={data.date} location={data.location}/>
                    })}
                </Tab>
                <Tab eventKey="map" title="Mapa">
                </Tab>
            </Tabs>
            
            {/* DESKTOP VIEW */}
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
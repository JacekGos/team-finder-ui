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
        <>
            {/* MOBILE VIEW */}
            <Container fluid className="p-0 d-inline d-lg-none " >
                <Tabs className="tabs " style={{marginTop: 150}}>
                    <Tab eventKey="events" title="Wydarzenia" style={{overflowY: 'scroll', maxHeight: '480px'}}>
                        {events.map((data, key) => {
                            return <EventTab key={key} name={data.name} price={data.price} date={data.date} location={data.location} />
                        })}
                    </Tab>
                    <Tab eventKey="map" title="Mapa" >
                    </Tab>
                </Tabs>
            </Container>
            {/* DESKTOP VIEW */}
            <Container fluid className="p-0 d-none d-lg-block">
                <Row className="d-none d-lg-flex">
                    <Col style={{overflowY: 'scroll', maxHeight: '700px'}}>
                        {events.map((data, key) => {
                            return <EventTab key={key} name={data.name} price={data.price} date={data.date} location={data.location} />
                        })}
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
import React, { useCallback, useMemo, useRef } from "react";
import '../styles/events.css';
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import EventTab from "./EventTab";
import events from "../tmpData/events";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

export default function Events() {

    const mapRef = useRef();
    const center = useMemo(() => ({ lat: 52.52245662560353, lng: 19.341419774433 }), []);
    const options = useMemo(() => ({
        mapId: "c3f5f9d1cc7c834c",
        disableDefaultUI: true,
        clickableIcons: false
    }), []);
    const zoom = 7;

    const onLoad = useCallback((map) => (mapRef.current = map), []);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        version: "weekly"
    });



    return (
        <>
            {/* MOBILE VIEW */}
            <Container fluid className="p-0 d-inline d-lg-none " >
                <Tabs className="tabs " style={{ marginTop: 150 }}>
                    <Tab eventKey="events" title="Wydarzenia" style={{ overflowY: 'scroll', maxHeight: '70vh' }}>
                        {events.map((data, key) => {
                            return <EventTab key={key} name={data.name} price={data.price} date={data.date} location={data.location} discipline={data.discipline} />
                        })}
                    </Tab>
                    <Tab eventKey="map" title="Mapa" >
                        {!isLoaded ?
                            <div style={{ color: 'white' }}>Ładowanie mapy...</div>
                            : <GoogleMap
                                zoom={zoom}
                                center={center}
                                options={options}
                                onLoad={onLoad}
                                mapContainerClassName="map-container"></GoogleMap>
                        }
                    </Tab>
                </Tabs>
            </Container>
            {/* DESKTOP VIEW */}
            <Container fluid className="p-0 d-none d-lg-block">
                <Row className="d-none d-lg-flex">
                    <Col style={{ overflowY: 'scroll', maxHeight: '80vh' }}>
                        {events.map((data, key) => {
                            return <EventTab key={key} name={data.name} price={data.price} date={data.date} location={data.location} discipline={data.discipline} />
                        })}
                    </Col>
                    <Col>
                        {!isLoaded ?
                            <div style={{ color: 'white' }}>Ładowanie mapy...</div>
                            : <GoogleMap
                                zoom={zoom}
                                center={center}
                                options={options}
                                onLoad={onLoad}
                                mapContainerClassName="map-container"></GoogleMap>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}
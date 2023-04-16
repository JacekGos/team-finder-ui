import React, { useCallback, useMemo, useRef } from "react";
import '../styles/events.css';
import football from '../images/football.svg';
import MediaQuery from 'react-responsive'
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { BiFootball, BiTennisBall } from "react-icons/bi";
import EventTab from "./EventTab";
import events from "../tmpData/events";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

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

    const eventsData = useMemo(() => (events.map((data, key) => {
        console.log('data');
        return <EventTab key={key} name={data.name} price={data.price} date={data.date} location={data.location} discipline={data.discipline} />
    })), []);


    (g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = { }); var d = b.maps || (b.maps = { }), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => {await(a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })({
            key: "YOUR_API_KEY_HERE",
      // Add other bootstrap parameters as needed, using camel case.
      // Use the 'v' parameter to indicate the version to load (alpha, beta, weekly, etc.)
    });

    return (
        <>
            {/* MOBILE VIEW */}
            <MediaQuery maxWidth={992}>
                <Container fluid className="p-0">
                    <Tabs className="tabs " style={{ marginTop: 150 }}>
                        <Tab eventKey="events" title="Wydarzenia" style={{ overflowY: 'scroll', maxHeight: '70vh' }}>
                            {eventsData}
                        </Tab>
                        <Tab eventKey="map" title="Mapa" >
                            {/* {map()} */}
                            {!isLoaded ?
                                <div style={{ color: 'white' }}>Ładowanie mapy...</div>
                                : <GoogleMap
                                    zoom={zoom}
                                    center={center}
                                    options={options}
                                    onLoad={onLoad}
                                    mapContainerClassName="map-container"></GoogleMap>}
                        </Tab>
                    </Tabs>
                </Container>
            </MediaQuery>

            {/* BIG SCREEN VIEW */}
            <MediaQuery minWidth={992}>
                <Container fluid className="p-0 d-none d-lg-block">
                    <Row className="d-none d-lg-flex">
                        <Col style={{ overflowY: 'scroll', maxHeight: '80vh' }}>
                            {/* <img src={footbal} alt='logo'/> */}
                            {eventsData}
                        </Col>
                        <Col>
                            {/* {map()} */}
                            {!isLoaded ?
                                <div style={{ color: 'white' }}>Ładowanie mapy...</div>
                                : <GoogleMap
                                    zoom={zoom}
                                    center={center}
                                    options={options}
                                    onLoad={onLoad}
                                    mapContainerClassName="map-container">
                                    <Marker
                                        position={{ lat: 52.52, lng: 19.34 }}
                                    />
                                </GoogleMap>}
                        </Col>
                    </Row>
                </Container>
            </MediaQuery>
        </>
    )
}
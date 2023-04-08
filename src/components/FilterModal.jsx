import React from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { TfiClose } from "react-icons/tfi";
import { BiFootball, BiTennisBall } from "react-icons/bi";
import { FaVolleyballBall, FaBasketballBall } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";

export default function FilterModal(props) {

    return (
        <Modal show={props.show} fullscreen={props.fullscreen}
            style={{ zIndex: 1100 }}
        >
            <Modal.Header className="modal-base" style={{ borderBottom: '1px solid #103861' }}>
                <Modal.Title>Wyszukaj</Modal.Title>
                <Button className="input-base rounded-circle d-flex align-items-center p-2" onClick={() => props.handleClose(false)}>
                    <TfiClose />
                </Button>
            </Modal.Header >
            <Modal.Body className="modal-base p-0">
                <Form>
                    <Form.Group className="position-fixed d-flex align-items-center w-100" style={{ padding: '8px 30px 1px 10px', backgroundColor: '#0A1929' }}>
                        <Form.Control placeholder="lokalizacja" className="input-base input-search mb-3" />
                    </Form.Group>
                    <Form.Group className="d-flex flex-column align-items-start gap-3 ps-2">
                        <div className="d-flex align-items-center" style={{ marginTop: 70 }}>
                            <Button className="input-base rounded-circle" >
                                <h2><BiFootball style={{ color: "white" }} className="p-0 m-0" /></h2>
                            </Button>
                            <p className="p-0 m-0 ms-3 fs-5">Piłka nożna</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <Button className="input-base rounded-circle" >
                                <h2><FaVolleyballBall style={{ color: "white" }} /></h2>
                            </Button>
                            <p className="p-0 m-0 ms-3 fs-5">Siatkówka</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <Button className="input-base rounded-circle" >
                                <h2><FaBasketballBall style={{ color: "white" }} /></h2>
                            </Button>
                            <p className="p-0 m-0 ms-3 fs-5">Koszykówka</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <Button className="input-base rounded-circle" >
                                <h2><BiTennisBall style={{ color: "white" }} /></h2>
                            </Button>
                            <p className="p-0 m-0 ms-3 fs-5">Tenis</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <Button className="input-base rounded-circle" >
                                <h2><IoIosBicycle style={{ color: "white" }} /></h2>
                            </Button>
                            <p className="p-0 m-0 ms-3 fs-5">Rower</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <Button className="input-base rounded-circle" >
                                <h2><IoIosBicycle style={{ color: "white" }} /></h2>
                            </Button>
                            <p className="p-0 m-0 ms-3 fs-5">Rower</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <Button className="input-base rounded-circle" >
                                <h2><IoIosBicycle style={{ color: "white" }} /></h2>
                            </Button>
                            <p className="p-0 m-0 ms-3 fs-5">Rower</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <Button className="input-base rounded-circle" >
                                <h2><IoIosBicycle style={{ color: "white" }} /></h2>
                            </Button>
                            <p className="p-0 m-0 ms-3 fs-5">Rower</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <Button className="input-base rounded-circle" >
                                <h2><IoIosBicycle style={{ color: "white" }} /></h2>
                            </Button>
                            <p className="p-0 m-0 ms-3 fs-5">Rower</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <Button className="input-base rounded-circle" >
                                <h2><IoIosBicycle style={{ color: "white" }} /></h2>
                            </Button>
                            <p className="p-0 m-0 ms-3 fs-5">Rower</p>
                        </div>
                    </Form.Group>
                    <Container className="position-fixed position-absolute bottom-0 end-0 d-flex align-items-center justify-content-center w-100"
                        style={{ padding: '5px 0px 5px 10px', backgroundColor: '#0A1929' , height: 70, borderTop: '1px solid #103861'}}>
                        <Button className="input-base ">
                            Pokaż wydażenia
                        </Button>
                    </Container>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
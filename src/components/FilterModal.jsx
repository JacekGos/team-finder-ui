import React from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { TfiClose } from "react-icons/tfi";
import { BiFootball, BiTennisBall } from "react-icons/bi";
import { FaVolleyballBall, FaBasketballBall } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";

export default function FilterModal(props) {

    let icons = [
        {
            icon: <BiFootball size={24} style={{ color: "white" }} />,
            name: "Piłka nozna"
        },
        {
            icon: <FaVolleyballBall size={24} style={{ color: "white" }} />,
            name: "Siatkówka"
        },
        {
            icon: <FaBasketballBall size={24} style={{ color: "white" }} />,
            name: "Koszykówka"
        },
        {
            icon: <BiTennisBall size={24} style={{ color: "white" }} />,
            name: "Tenis"
        },
        {
            icon: <IoIosBicycle size={24} style={{ color: "white" }} />,
            name: "Rower"
        },
    ];

    function modal() {

        switch (props.type) {
            case 'base':
                return (
                    <>
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
                                    <div style={{ marginTop: 70 }}></div>
                                    {icons.map((data, key) => {
                                        return (
                                            <div className="d-flex align-items-center" key={key}>
                                                <Button className="input-base rounded-circle" style={{ aspectRatio: '1/1' }}>
                                                    {data.icon}
                                                </Button>
                                                <p className="p-0 m-0 ms-3 fs-5">{data.name}</p>
                                            </div>
                                        )
                                    })}
                                    <div style={{ marginTop: 70 }}></div>
                                </Form.Group>
                                <Container className="position-fixed position-absolute bottom-0 end-0 d-flex align-items-center justify-content-center w-100"
                                    style={{ padding: '5px 0px 5px 10px', backgroundColor: '#0A1929', height: 70, borderTop: '1px solid #103861' }}>
                                    <Button className="input-base ">
                                        Pokaż wydażenia
                                    </Button>
                                </Container>
                            </Form>
                        </Modal.Body>
                    </>
                )
            case 'advanced':
                return (
                    <>
                        <Modal.Header className="modal-base" style={{ borderBottom: '1px solid #103861' }}>
                            <Modal.Title>Więcej filtrów</Modal.Title>
                            <Button className="input-base rounded-circle d-flex align-items-center p-2" onClick={() => props.handleClose(false)}>
                                <TfiClose />
                            </Button>
                        </Modal.Header >
                        <Modal.Body className="modal-base">
                            <Form>
                                <Form.Group style={{ borderBottom: 'solid 1px #103861' }}>
                                    <Form.Label>
                                        Zasięg
                                    </Form.Label>
                                    <Form.Range min={1} max={15} step={1} />
                                    <div className="d-flex align-items-center justify-content-center">
                                        <Form.Control type="number" placeholder="5km" className="input-base input-search mb-3 w-50" />
                                    </div>
                                </Form.Group>
                                <Form.Group style={{ borderBottom: 'solid 1px #103861' }}>
                                    <Form.Label>
                                        Cena
                                    </Form.Label>
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex flex-column align-items-center ps-3 pe-3">
                                            <Form.Text >min.</Form.Text>
                                            <Form.Control type="number" placeholder="0" className="input-base input-search mb-3 w-100" />
                                        </div>
                                        <div className="d-flex flex-column align-items-center ps-3 pe-3">
                                            <Form.Text >max.</Form.Text>
                                            <Form.Control type="number" placeholder="25" className="input-base input-search mb-3 w-100" />
                                        </div>
                                    </div>
                                </Form.Group>
                                <Form.Group style={{ borderBottom: 'solid 1px #103861' }}>
                                    <Form.Label>
                                        Gracze
                                    </Form.Label>
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex flex-column align-items-center ps-3 pe-3">
                                            <Form.Text >min.</Form.Text>
                                            <Form.Control type="number" placeholder="0" className="input-base input-search mb-3 w-100" />
                                        </div>
                                        <div className="d-flex flex-column align-items-center ps-3 pe-3">
                                            <Form.Text >max.</Form.Text>
                                            <Form.Control type="number" placeholder="25" className="input-base input-search mb-3 w-100" />
                                        </div>
                                    </div>
                                </Form.Group>
                                <Form.Group style={{ borderBottom: 'solid 1px #103861' }}>
                                    <Form.Label>
                                        Data
                                    </Form.Label>
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex flex-column align-items-center ps-3 pe-3">
                                            <Form.Text >od</Form.Text>
                                            <Form.Control type="date" defaultValue={'10.04.2023'} className="input-base input-search mb-3 w-100" />
                                        </div>
                                        <div className="d-flex flex-column align-items-center ps-3 pe-3">
                                            <Form.Text >do</Form.Text>
                                            <Form.Control type="date"  className="input-base input-search mb-3 w-100" />
                                        </div>
                                    </div>
                                </Form.Group>
                                <Container className="position-fixed position-absolute bottom-0 end-0 d-flex align-items-center justify-content-center w-100"
                                    style={{ padding: '5px 0px 5px 10px', backgroundColor: '#0A1929', height: 70, borderTop: '1px solid #103861' }}>
                                    <Button className="input-base ">
                                        Pokaż wydażenia
                                    </Button>
                                </Container>
                            </Form>
                        </Modal.Body>
                    </>
                )
            default:
                return <>
                </>
        }
    }

    return (
        <Modal show={props.show} fullscreen={props.fullscreen}
            style={{ zIndex: 1100 }}
        >
            {modal()}
        </Modal>
    );
}
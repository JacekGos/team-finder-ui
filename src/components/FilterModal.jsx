import React from "react";
import { Modal, Button } from "react-bootstrap";
import { TfiClose } from "react-icons/tfi";

export default function FilterModal(props) {

    return (
        <Modal show={props.show} fullscreen={props.fullscreen}
            style={{ zIndex: 1100 }}
        >
            <Modal.Header className="modal-base">
                <Modal.Title>Wyszukaj</Modal.Title>
                <Button className="input-base rounded-circle d-flex align-items-center p-2" onClick={() => props.handleClose(false)}>
                    <TfiClose/>
                </Button>
            </Modal.Header >
            <Modal.Body className="modal-base">Modal body content</Modal.Body>
        </Modal>
    )
}
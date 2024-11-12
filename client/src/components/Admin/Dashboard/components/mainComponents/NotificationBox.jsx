import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function NotificationModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onClick={handleShow} style={{ background: "#909090", color: "white", border: "none", marginTop: ".5rem", fontWeight: "600", padding: ".5rem 0" }} className=" " >
                Send Notification
            </Button>

            <Modal show={show} onHide={handleClose}  >
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontWeight: 'bold' }}>Send Notification</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label>Enter the Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter the Title" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formDate">
                            <Form.Label>Enter the date</Form.Label>
                            <div className="d-flex align-items-center">
                                <Form.Control type="date" />
                                <span style={{ marginLeft: '5px', cursor: 'pointer' }}>📅</span>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Type here ..." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCheckbox">
                            <Form.Check type="checkbox" label="" />
                        </Form.Group>

                        <Button
                            variant="dark"
                            type="submit"
                            className="w-100"
                            style={{ height: '40px', fontSize: '16px' }}
                        >
                            Send Notification
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

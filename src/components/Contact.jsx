import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';


const Contact = () => {
    return (
            <section className="pb-5 mb-5 py-3 py-md-5 py-xl-8">
            <Container>
                <Row>
                <Col xs={12} md={10} lg={8}>
                    <h3 className="fs-5 mb-2 text-secondary text-uppercase">Contact</h3>
                    <h2 className="display-5 mb-4 mb-md-5 mb-xl-8">
                    We're always on the lookout to work with new clients. Please get in touch in one of the following ways.
                    </h2>
                </Col>
                </Row>
            </Container>

            <Container>
                <Row className="gy-4 gy-md-5 gy-lg-0 align-items-md-center">
                <Col xs={12} lg={6}>
                    <div className="border overflow-hidden">
                    <Form action="#!">
                        <Row className="gy-4 gy-xl-5 p-4 p-xl-5">
                        <Col xs={12}>
                            <Form.Group controlId="fullname">
                            <Form.Label>Full Name <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" required />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Group controlId="email">
                            <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                            <InputGroup>
                                <InputGroup.Text></InputGroup.Text>
                                <Form.Control type="email" required />
                            </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Group controlId="phone">
                            <Form.Label>Phone Number</Form.Label>
                            <InputGroup>
                                <InputGroup.Text></InputGroup.Text>
                                <Form.Control type="tel" />
                            </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Form.Group controlId="subject">
                            <Form.Label>Subject <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" required />
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Form.Group controlId="message">
                            <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                            <Form.Control as="textarea" rows={3} required />
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Button variant="primary" size="lg" type="submit" className="w-100">Send Message</Button>
                        </Col>
                        </Row>
                    </Form>
                    </div>
                </Col>
                <Col xs={12} lg={6}>
                    <Row className="justify-content-xl-center">
                    <Col xs={12} xl={11}>
                        <div className="mb-4 mb-md-5">
                        <div className="mb-3 text-primary">
                        </div>
                        <div>
                            <h4 className="mb-2">Office</h4>
                            <p className="mb-2">Please visit us to have a discussion.</p>
                            <hr className="w-50 mb-3 border-dark-subtle" />
                            <address className="m-0 text-secondary">8014 Edith Blvd NE, Albuquerque, New York, United States</address>
                        </div>
                        </div>
                        <Row className="mb-sm-4 mb-md-5">
                        <Col xs={12} sm={6}>
                            <div className="mb-4 mb-sm-0">
                            <div className="mb-3 text-primary">
                            </div>
                            <div>
                                <h4 className="mb-2">Phone</h4>
                                <p className="mb-2">Please speak with us directly.</p>
                                <hr className="w-75 mb-3 border-dark-subtle" />
                                <p className="mb-0">
                                <a className="link-secondary text-decoration-none" href="tel:+15057922430">(505) 792-2430</a>
                                </p>
                            </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6}>
                            <div className="mb-4 mb-sm-0">
                            <div className="mb-3 text-primary">
                            </div>
                            <div>
                                <h4 className="mb-2">Email</h4>
                                <p className="mb-2">Please write to us directly.</p>
                                <hr className="w-75 mb-3 border-dark-subtle" />
                                <p className="mb-0">
                                <a className="link-secondary text-decoration-none" href="mailto:demo@yourdomain.com">demo@yourdomain.com</a>
                                </p>
                            </div>
                            </div>
                        </Col>
                        </Row>
                        <div>
                        <div className="mb-3 text-primary">
                        </div>
                        <div>
                            <h4 className="mb-2">Opening Hours</h4>
                            <p className="mb-2">Explore our business opening hours.</p>
                            <hr className="w-50 mb-3 border-dark-subtle" />
                            <div className="d-flex mb-1">
                            <p className="text-secondary fw-bold mb-0 me-5">Mon - Fri</p>
                            <p className="text-secondary mb-0">9am - 5pm</p>
                            </div>
                            <div className="d-flex">
                            <p className="text-secondary fw-bold mb-0 me-5">Sat - Sun</p>
                            <p className="text-secondary mb-0">9am - 2pm</p>
                            </div>
                        </div>
                        </div>
                    </Col>
                    </Row>
                </Col>
                </Row>
            </Container>
            </section>
    );
};

export default Contact;
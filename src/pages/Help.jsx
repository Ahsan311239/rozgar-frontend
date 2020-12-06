import React from "react";
import { Navbar, Nav, Accordion, Card, Button } from "react-bootstrap";



const PrivacyPolicy = () => {
    return(
        <div className="help-page">
            <div className="container">
                <Navbar bg="light" variant="light" className="bg-transparent">
                    <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Location</Nav.Link>
                        <Nav.Link href="#features">Service</Nav.Link>
                        <Nav.Link href="#pricing">Login</Nav.Link>
                        <Nav.Link href="#new">Signup</Nav.Link>
                        <Nav.Link href="#pricing" className="btn header-btn rounded-0 rounded px-3">
                        Become a Worker
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </div>

            <div className="container my-5 py-4 px-3 border">
                <h3>TaskRabbit Global Privacy Policy</h3>
                <p>Last Updated: December 18, 2019</p>

                <Accordion defaultActiveKey="0">

                    <Card>
                        <Card.Header>
                        <p className="mb-0 text-white pt-2">Lorem ipsum dolor sit amet.</p>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            +
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus culpa perferendis dicta consequuntur adipisci cumque!</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Card.Header>
                        <p className="mb-0 text-white pt-2">Lorem ipsum dolor sit amet.</p>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            +
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus culpa perferendis dicta consequuntur adipisci cumque!</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Card.Header>
                        <p className="mb-0 text-white pt-2">Lorem ipsum dolor sit amet.</p>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            +
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus culpa perferendis dicta consequuntur adipisci cumque!</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Card.Header>
                        <p className="mb-0 text-white pt-2">Lorem ipsum dolor sit amet.</p>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            +
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus culpa perferendis dicta consequuntur adipisci cumque!</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    

                </Accordion>

            </div>
        </div>
    )
}
export default PrivacyPolicy;
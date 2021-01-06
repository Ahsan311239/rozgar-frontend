import React from "react";
import { Navbar, Nav, Accordion, Card, Button } from "react-bootstrap";



const PrivacyPolicy = () => {
    return(
        <div className="help-page">
            
            <div className="container my-5 py-4 px-3 border">
                <h3>Rozgaar Privacy Policy</h3>
                

                <Accordion defaultActiveKey="0">

                    <Card>
                        <Card.Header>
                        <p className="mb-0 text-white pt-2">Lorem ipsum dolor sit amet.</p>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            +
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body> 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus culpa perferendis dicta consequuntur adipisci cumque!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus culpa perferendis dicta consequuntur adipisci cumque!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus culpa perferendis dicta consequuntur adipisci cumque!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus culpa perferendis dicta consequuntur adipisci cumque!
                        </Card.Body>
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
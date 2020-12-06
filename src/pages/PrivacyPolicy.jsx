import React from "react";
import { Navbar, Nav } from "react-bootstrap";



const PrivacyPolicy = () => {
    return(
        <div className="policy-page">
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

                <div className="mt-4">
                    <h4>1. Introduction</h4>
                    <p>This Global Privacy Policy (“Privacy Policy”) describes how TaskRabbit, Inc. will gather, use, and maintain your Personal Information on the <span className="text-pri">TaskRabbit Platform</span>. It will also explain your legal rights with respect to that information.</p>
                    <p>By using the TaskRabbit Platform, you confirm that you have read and understand this Privacy Policy, and our Global Terms of Service (together referred to herein as the “Agreement”). The Agreement governs the use of the TaskRabbit Platform. TaskRabbit will collect, use, and maintain information consistent with the Agreement.</p>
                    <p>If you are a California resident or data subject in Europe, please see the “Additional Disclosures for California Residents” and “Additional Disclosures for Data Subjects in the European Economic Area (EEA) and Switzerland” sections, respectively. If you have any questions or wish to exercise your rights and choices, please contact us as set out in the “Contact Us” section below.</p>
            
                </div>

                <div className="mt-4">
                    <h4>2. General Terms</h4>
                    <p>In this Privacy Policy:</p>
                    <ul className="square-list">
                        <li>TaskRabbit, Inc. may be referred to as "TaskRabbit," “we,” “our,” or “us.”</li>
                        <li>We call a user of the TaskRabbit Platform “User,” “Users,” “you,” “your,” or “Client” and “Tasker,” as appropriate.</li>
                        <li>The community platform that we offer at our website (www.taskrabbit.com and local variants, including www.taskrabbit.co.uk, www.taskrabbit.ca, and www.taskrabbit.fr, and www.taskrabbit.de) is referred to as the “Site(s).”</li>
                        <li>The mobile applications (whether on iOS or Android) are referred to as the “Apps.”</li>
                        <li>TaskRabbit’s Sites, Apps and related services, information and communications are collectively referred to as the “TaskRabbit Platform.”</li>
                        <li>TaskRabbit’s Sites, Apps and related services, information and communications are collectively referred to as the “TaskRabbit Platform.”</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h4>3. Introduction</h4>
                    <p>This Global Privacy Policy (“Privacy Policy”) describes how TaskRabbit, Inc. will gather, use, and maintain your Personal Information on the <span className="text-pri">TaskRabbit Platform</span>. It will also explain your legal rights with respect to that information.</p>
                    <p>By using the TaskRabbit Platform, you confirm that you have read and understand this Privacy Policy, and our Global Terms of Service (together referred to herein as the “Agreement”). The Agreement governs the use of the TaskRabbit Platform. TaskRabbit will collect, use, and maintain information consistent with the Agreement.</p>
                    <p>If you are a California resident or data subject in Europe, please see the “Additional Disclosures for California Residents” and “Additional Disclosures for Data Subjects in the European Economic Area (EEA) and Switzerland” sections, respectively. If you have any questions or wish to exercise your rights and choices, please contact us as set out in the “Contact Us” section below.</p>            
                </div>

            </div>
        </div>
    )
}
export default PrivacyPolicy;
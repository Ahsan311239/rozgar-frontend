import React from "react";
import { Navbar, Nav, Carousel } from "react-bootstrap";
import Banngerimg1 from "./../assets/img/body-bg.jpg";
import LightBackImg from "./../assets/img/light_back.jpg";
import WorkerImg from "./../assets/img/worker.jpg";

function Service() {
  return (
    <div className="contact-page">
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

        <div className="sec-1-contact">
            <div className="container-fluid px-0">
                <div className="vh-100 back_grad">
                    <div className="row pt-5  w-100">
                        <div className="col-md-6 text-white">

                        </div>
                        <div className="col-md-5">
                            <div className="contact-form bg-white p5">
                                <form action="" className="p-4 py-5">
                                    <label className="mb-0">Username: </label>
                                    <input type="text" className="form-control mb-3 rounded-0" placeholder="Enter Email" ></input>
                                    <label className="mb-0">Message: </label>
                                    <input type="password" className="form-control mb-3 rounded-0" placeholder="Enter message" ></input>
                                    <label className="mb-0">Textarea: </label>
                                    <textarea type="text" rows="4" className="form-control mb-3 rounded-0"  ></textarea>
                                    <input type="Submit" className="form-control mb-3 rounded-0 btn btn-block bg-pri text-white" placeholder="Enter password" ></input>
                                </form>
                            </div>    
                        </div>
                        {/* <div className="col-md-1"></div> */}
                    </div>
                </div>
            </div>
        </div>


    </div>
  );
}

export default Service;

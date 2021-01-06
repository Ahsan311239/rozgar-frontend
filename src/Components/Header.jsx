import React from "react";

import safetyImg from "./../assets/img/download.svg";
import bannerImg from "./../assets/img/banner_home.jpg";
import productImg from "./../assets/img/product.jpg";
import workerImg from "./../assets/img/worker.jpg";
import becomeWorkerImg from "./../assets/img/become_worker.png";
import signupImg from "./../assets/img/signup.png";

import { Navbar, Nav} from "react-bootstrap";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";



function Header() {  

  const [loginShow, setLoginShow] = React.useState(false);
  const [signupShow, setSignupShow] = React.useState(false);

  return (
    <div>

        <div className="position-fixed" >
          <a className=" rounded-pill py-1 px-4 btn text-white  bg-pri " >Help?</a>
        </div>

        <div className="container">

            <Navbar bg="light" variant="light" className="bg-transparent">
              <Navbar.Brand href="#home">LOGO</Navbar.Brand>
              <Nav className="ml-auto">
                <Nav.Link> <Link to="/" className="text-secondary">  Home</Link> </Nav.Link>
                <Nav.Link> <Link to="/services" className="text-secondary" > Services</Link> </Nav.Link>
                <Nav.Link href="#pricing" className="text-secondary"   onClick={() => setLoginShow(true)} >Login</Nav.Link>
                <Nav.Link href="#new"  className="text-secondary" onClick={() => setSignupShow(true)} >Signup</Nav.Link>
                <Nav.Link> <Link to="/create-worker" className="btn header-btn rounded-0 rounded px-3" >Become a Worker </Link> </Nav.Link>
              </Nav>
            </Navbar>

        </div>


        <Modal
          size="md"
          show={loginShow}
          onHide={() => setLoginShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <div></div>
            <Modal.Title id="example-modal-sizes-title-sm text-center">
              Login
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label className="mb-0">Username: </label>
              <input type="text" className="form-control mb-3 rounded-3" placeholder="Enter Email" ></input>
              <label className="mb-0">Password: </label>
              <input type="password" className="form-control mb-3 rounded-3" placeholder="Enter password" ></input>
              <input type="Submit" className="form-control mb-3 rounded-3 btn btn-block bg-pri text-white" placeholder="Enter password" ></input>
              <hr></hr>
            </form>
            <a className="rounded-3 btn mb-0 mt-3 btn-block py-2 bg-danger text-white" >Signin Google</a>
            <a className="rounded-3 btn mt-1 btn-block bg-primary py-2 text-white" >Signin Facebook</a>
          </Modal.Body>
      </Modal>
      
      <Modal
        size="md"
        show={signupShow}
        onHide={() => setSignupShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            User Signup
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label className="mb-0">Username: </label>
            <input type="text" className="form-control mb-3 rounded-3" placeholder="Enter Email" ></input>
            <label className="mb-0">Password: </label>
            <input type="password" className="form-control mb-3 rounded-3" placeholder="Enter password" ></input>
            <label className="mb-0">Email: </label>
            <input type="text" className="form-control mb-3 rounded-3" placeholder="Enter Email" ></input>
            <label className="mb-0">CNIC: </label>
            <input type="text" className="form-control mb-3 rounded-3" placeholder="Enter cnic" ></input>
            <input type="Submit" className="form-control mb-3 rounded-3 btn btn-block bg-pri text-white" placeholder="Enter password" ></input>
              <hr></hr>
            </form>
            <a className="rounded-0 btn mb-0 mt-3 btn-block py-2 bg-danger text-white" >Signup Google</a>
            <a className="rounded-0 btn mt-1 btn-block bg-primary py-2 text-white" >Signup Facebook</a>
        </Modal.Body>
      </Modal>

    </div>
  );
}

export default Header;

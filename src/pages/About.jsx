import React from "react";
import { Navbar, Nav, Carousel } from "react-bootstrap";
import Banngerimg1 from "./../assets/img/body-bg.jpg";
import LightBackImg from "./../assets/img/light_back.jpg";
import WorkerImg from "./../assets/img/worker.jpg";

function Service() {
  return (
    <div className="about-page">
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

      <div className="sec-1-about">
        <div className="container-fluid px-0">
          <div className="back_img" style={{ backgroundImage: `url(${Banngerimg1})` }}>
            <div className="overlay h-100 w-100">
              <div className="p-abs">
                <h1 className="text-white ">Revolutionizing Everyday Work</h1>
                <p className="lead text-center text-white">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec-2-about pt-5">
        <div className="container text-center">
          <div className=" mb-4">
            <p>LOGO</p>
          </div>
          <h1 className="mb-3">Get More Done in Less Time</h1>
          <p className="lead">Our same-day service platform instantly connects you with skilled Taskers to help with odd-jobs and errands, so you can be more productive, every day</p>
        </div>
      </div>

      <div className="sec-3-about pt-5">
        <div className="container-fluid px-0">
          <div className="back_img" style={{ backgroundImage: `url(${LightBackImg})` }}>
            <div className="container h-100">
              <div className="row h-100  justify-content-center align-items-center">
                <div className="col-md-4 text-center">
                  <h4>12000</h4>
                  <p className="lead">Workers</p>
                </div>
                <div className="col-md-4 text-center">
                  <h4>12000</h4>
                  <p className="lead">Workers</p>
                </div>
                <div className="col-md-4 text-center">
                  <h4>12000</h4>
                  <p className="lead">Workers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="sec-4-about pt-5">
        <div className="container text-center">
            <div className="row">
                <div className="col-md-4">
                    <div className="text-center">
                        <div  style={{ backgroundImage: `url(${WorkerImg})` }} className="back_img m-auto mb-3 rounded-circle" alt=""></div>
                        <h5 className="font-weight-bold text-center mt-3">Abdullah </h5>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center">
                        <div  style={{ backgroundImage: `url(${WorkerImg})` }} className="back_img m-auto mb-3 rounded-circle" alt=""></div>
                        <h5 className="font-weight-bold text-center mt-3">Abdullah </h5>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center">
                        <div  style={{ backgroundImage: `url(${WorkerImg})` }} className="back_img m-auto mb-3 rounded-circle" alt=""></div>
                        <h5 className="font-weight-bold text-center mt-3">Abdullah </h5>
                    </div>
                </div>
            </div>  
        </div>
      </div>


      <div className="sec-5-about pt-5">
          <div className="container-fluid px-0">
            <div className="back_img" style={{backgroundImage: `url(${Banngerimg1})`}} >
                <div className="p-abs p-5 bg-white rounded">
                    <h4 className="mb-3">Join Our Team</h4>
                    <p className="lead mb-4">Want to work for the company that’s revolutionizing everyday work</p>
                    <a className="btn header-btn rounded-0 rounded px-3">
                        Become one of us
                    </a>
                </div>
            </div>
          </div>
      </div>


    </div>
  );
}

export default Service;

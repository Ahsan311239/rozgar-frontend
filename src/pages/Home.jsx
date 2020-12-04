import React from "react";

import safetyImg from "./../assets/img/download.svg";
import bannerImg from "./../assets/img/banner_home.jpg";
import productImg from "./../assets/img/product.jpg";
import workerImg from "./../assets/img/worker.jpg";
import becomeWorkerImg from "./../assets/img/become_worker.png";
import signupImg from "./../assets/img/signup.png";

import { Navbar, Nav } from "react-bootstrap";
import { Button, Modal } from "react-bootstrap";

function Home() {  

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
                <Nav.Link href="#home">Location</Nav.Link>
                <Nav.Link href="#features">Service</Nav.Link>
                <Nav.Link href="#pricing"   onClick={() => setLoginShow(true)} >Login</Nav.Link>
                <Nav.Link href="#new"   onClick={() => setSignupShow(true)} >Signup</Nav.Link>
                <Nav.Link href="#pricing" className="btn header-btn rounded-0 rounded px-3" >Become a Worker</Nav.Link>
              </Nav>
            </Navbar>

            <div>
              <p className="h3 text-center py-4" >
                <img src={safetyImg} className="img img-fluid mr-1" style={{ width: 50 }} ></img>
                See the latest on our response to COVID-19
              </p>
            </div>

        </div>

        <div className="sec-1">
          <div className="container-fluid px-0">
            <div className="back_img" style={{ backgroundImage: `url(${bannerImg})` }}>
              <div className="p-abs text-center bg-white p-4 py-5">
                <h3 className="mb-3">Help when you need it, at your fingertips</h3>
                <p className="mb-3">Get help from thousands of trusted Worker for everything from errands to contactless deliveries.</p>
                <div className="form-inline d-flex justify-content-center">
                  <input className="form-control rounded-0" placeholder="Enter name" type="text"  ></input>
                  <button className="btn bg-pri px-4 rounded-0 text-white">  Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="sec-2 pt-5">
          <div className="container">
            <h3 className="mb-3" >Popular projects in your area</h3>
            <div className="row">
              <div className="col-md-3 mb-4" >
                <div className="mini-card rounded shadow ">
                  <img src={productImg} className="img img-fluid" />
                  <div className="text text-center">
                      <p className="mb-0 mt-2">Assamble desk</p>
                      <p className="text-secondary"> Avg -price Rs500-Rs2000 </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-4" >
                <div className="mini-card rounded shadow">
                  <img src={productImg} className="img img-fluid" />
                  <div className="text text-center">
                      <p className="mb-0 mt-2">Assamble desk</p>
                      <p className="text-secondary"> Avg -price Rs500-Rs2000 </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-4" >
                <div className="mini-card rounded shadow">
                  <img src={productImg} className="img img-fluid" />
                  <div className="text text-center">
                      <p className="mb-0 mt-2">Assamble desk</p>
                      <p className="text-secondary"> Avg -price Rs500-Rs2000 </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-4" >
                <div className="mini-card rounded shadow">
                  <img src={productImg} className="img img-fluid" />
                  <div className="text text-center">
                      <p className="mb-0 mt-2">Assamble desk</p>
                      <p className="text-secondary"> Avg -price Rs500-Rs2000 </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-4" >
                <div className="mini-card rounded shadow">
                  <img src={productImg} className="img img-fluid" />
                  <div className="text text-center">
                      <p className="mb-0 mt-2">Assamble desk</p>
                      <p className="text-secondary"> Avg -price Rs500-Rs2000 </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-4" >
                <div className="mini-card rounded shadow">
                  <img src={productImg} className="img img-fluid" />
                  <div className="text text-center">
                      <p className="mb-0 mt-2">Assamble desk</p>
                      <p className="text-secondary"> Avg -price Rs500-Rs2000 </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-4" >
                <div className="mini-card rounded shadow">
                  <img src={productImg} className="img img-fluid" />
                  <div className="text text-center">
                      <p className="mb-0 mt-2">Assamble desk</p>
                      <p className="text-secondary"> Avg -price Rs500-Rs2000 </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-4" >
                <div className="mini-card rounded shadow">
                  <img src={productImg} className="img img-fluid" />
                  <div className="text text-center">
                      <p className="mb-0 mt-2">Assamble desk</p>
                      <p className="text-secondary"> Avg -price Rs500-Rs2000 </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


        <div className="sec-3 pt-5">
          <div className="container">
            <div className="row" >
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="">
                  <h2 className="">Everyday life made easier</h2>
                  <p className="">When life gets busy, you don’t have to tackle it alone. Get time back for what you love without breaking the bank.</p>
                  <ul className="">
                    <li>Choose your Worker by reviews, skills, and price</li>
                    <li>Choose your Worker by reviews, skills, and price</li>
                    <li>Choose your Worker by reviews, skills, and price</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <img src={workerImg} className="img img-fluid" ></img>
              </div>
            </div>
          </div>
        </div>


      <div className="section-worker-card pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
                <div className="worker-card shadow p-3 py-4 rounded">
                    <div className="one d-flex justify-content-start align-items-center mb-3">
                        <div className="backImg mb-2" style={{ backgroundImage: `url(${workerImg})` }}>
                        </div>
                        <div>
                          <p className="pl-3 mb-0">Ali Raza</p>
                          <p className="pl-3 text-secondary">Developer</p>
                        </div>
                    </div>
                    <div className="two mt-2 mb-4">
                      <p className="font-weight-bold mb-1">Pricing</p>
                        <div className="d-flex justify-content-between mb-0">
                          <p className=" mb-0">1 day</p>
                          <p className="mb-0 text-secondary">Rs 5000</p>
                        </div>
                        <div className="d-flex justify-content-between mb-0">
                          <p className=" mb-0">2 days</p>
                          <p className="mb-0 text-secondary">Rs 10000</p>
                        </div>

                    </div>
                    <div className="three mt-2 mb-3">
                      <p className="font-weight-bold mb-0">Bio</p>
                      <p className="mt-1"> <span className="font-weight-bold">I'm the right person for the job:</span> I have supplies and resources available for helping you with your move ins, move outs and move aroun </p>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="worker-card shadow p-3 py-4 rounded">
                    <div className="one d-flex justify-content-start align-items-center mb-3">
                        <div className="backImg mb-2" style={{ backgroundImage: `url(${workerImg})` }}>
                        </div>
                        <div>
                          <p className="pl-3 mb-0">Ali Raza</p>
                          <p className="pl-3 text-secondary">Developer</p>
                        </div>
                    </div>
                    <div className="two mt-2 mb-4">
                      <p className="font-weight-bold mb-1">Pricing</p>
                        <div className="d-flex justify-content-between mb-0">
                          <p className=" mb-0">1 day</p>
                          <p className="mb-0 text-secondary">Rs 5000</p>
                        </div>
                        <div className="d-flex justify-content-between mb-0">
                          <p className=" mb-0">2 days</p>
                          <p className="mb-0 text-secondary">Rs 10000</p>
                        </div>

                    </div>
                    <div className="three mt-2 mb-3">
                      <p className="font-weight-bold mb-0">Bio</p>
                      <p className="mt-1"> <span className="font-weight-bold">I'm the right person for the job:</span> I have supplies and resources available for helping you with your move ins, move outs and move aroun </p>
                    </div>
                </div>
            </div>


            <div className="col-md-4">
                <div className="worker-card shadow p-3 py-4 rounded">
                    <div className="one d-flex justify-content-start align-items-center mb-3">
                        <div className="backImg mb-2" style={{ backgroundImage: `url(${workerImg})` }}>
                        </div>
                        <div>
                          <p className="pl-3 mb-0">Ali Raza</p>
                          <p className="pl-3 text-secondary">Developer</p>
                        </div>
                    </div>
                    <div className="two mt-2 mb-4">
                      <p className="font-weight-bold mb-1">Pricing</p>
                        <div className="d-flex justify-content-between mb-0">
                          <p className=" mb-0">1 day</p>
                          <p className="mb-0 text-secondary">Rs 5000</p>
                        </div>
                        <div className="d-flex justify-content-between mb-0">
                          <p className=" mb-0">2 days</p>
                          <p className="mb-0 text-secondary">Rs 10000</p>
                        </div>

                    </div>
                    <div className="three mt-2 mb-3">
                      <p className="font-weight-bold mb-0">Bio</p>
                      <p className="mt-1"> <span className="font-weight-bold">I'm the right person for the job:</span> I have supplies and resources available for helping you with your move ins, move outs and move aroun </p>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>

        <div className="sec-3 pt-5">
          <div className="container">
            <div className="row" >
            <div className="col-md-6">
                <img src={workerImg} className="img img-fluid" ></img>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="">
                  <h2 className="">Everyday life made easier</h2>
                  <p className="">When life gets busy, you don’t have to tackle it alone. Get time back for what you love without breaking the bank.</p>
                  <ul className="">
                    <li>Choose your Worker by reviews, skills, and price</li>
                    <li>Choose your Worker by reviews, skills, and price</li>
                    <li>Choose your Worker by reviews, skills, and price</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="sec-4 pt-5">
          <div className="container">
            <div className="row">

              <div className="col-md-6" style={{ borderRight: `1px solid 	#F0F0F0` }}>
                <div className="h-100 d-flex justify-content-center align-items-center">
                   <div className="text-center">
                    <img  src={signupImg} className="img img-fluid m-auto" style={{ display: "block" }} ></img> 
                    <p className="mt-3">Hear that? The sweet sigh of relief. Start getting more done.</p>
                    <a className="py-2 px-5 mt-4 rounded-0 text-white btn bg-pri" >Signup</a>
                   </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="h-100 d-flex justify-content-center align-items-center">
                    <div className="text-center">
                      <img  src={becomeWorkerImg} className="img img-fluid  m-auto" style={{ display: "block" }} ></img> 
                      <p className="mt-3">Grow your own business while saving the day for busy neighbors.</p>
                      <a className="py-2 px-5 mt-3 rounded-0 text-white btn bg-pri" >Become Worker</a>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="sec-5">
          <div className="container">
            <h2> Featured Tasks </h2>
              <div className="btn-container ">
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>
                <a className=" px-4 py-2 mb-3 rounded-0 btn btn-new " >Help Moving</a>

              </div>
          </div>
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
              <input type="text" className="form-control mb-3 rounded-0" placeholder="Enter Email" ></input>
              <label className="mb-0">Password: </label>
              <input type="password" className="form-control mb-3 rounded-0" placeholder="Enter password" ></input>
              <input type="Submit" className="form-control mb-3 rounded-0 btn btn-block bg-pri text-white" placeholder="Enter password" ></input>
              <hr></hr>
            </form>
            <a className="rounded-0 btn mb-0 mt-3 btn-block py-2 bg-danger text-white" >Signin Google</a>
            <a className="rounded-0 btn mt-1 btn-block bg-primary py-2 text-white" >Signin Facebook</a>
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
            <input type="text" className="form-control mb-3 rounded-0" placeholder="Enter Email" ></input>
            <label className="mb-0">Password: </label>
            <input type="password" className="form-control mb-3 rounded-0" placeholder="Enter password" ></input>
            <label className="mb-0">Email: </label>
            <input type="text" className="form-control mb-3 rounded-0" placeholder="Enter Email" ></input>
            <label className="mb-0">CNIC: </label>
            <input type="text" className="form-control mb-3 rounded-0" placeholder="Enter cnic" ></input>
            <input type="Submit" className="form-control mb-3 rounded-0 btn btn-block bg-pri text-white" placeholder="Enter password" ></input>
              <hr></hr>
            </form>
            <a className="rounded-0 btn mb-0 mt-3 btn-block py-2 bg-danger text-white" >Signup Google</a>
            <a className="rounded-0 btn mt-1 btn-block bg-primary py-2 text-white" >Signup Facebook</a>
        </Modal.Body>
      </Modal>


    </div>
  );
}

export default Home;

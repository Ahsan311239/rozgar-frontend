import React from "react";
import { Navbar, Nav } from "react-bootstrap";


function AddBid(){
    return(
        <div className="addbid-page">
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
            
            <div className="sec-div pt-5">
                <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4>What Service Are You Looking For?</h4>
                        <form  className=" py-4 text-white">
                            <p className="font-weight-bold">Describe the service you're looking to purchase - please be as detailed as possible:</p>
                            <textarea name="addbid-name" placeholder="i am looking for" id="" className="form-control mb-3" rows="5"></textarea>
                            <input type="file" className="form-control mb-3" />
                            
                            <p className="font-weight-bold mb-3">Describe the service you're looking to purchase - please be as detailed as possible:</p>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <select name="" className="form-control" id="">
                                        <option >Select</option>
                                        <option >Select</option>
                                        <option >Select</option>
                                        <option >Select</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <select name="" className="form-control" id="">
                                        <option >Select</option>
                                        <option >Select</option>
                                        <option >Select</option>
                                        <option >Select</option>
                                    </select>
                                </div>
                            </div>

                            <p className="font-weight-bold">What is yout Budget for this service</p>
                            <input type="text" className="form-control mb-3 w-25" />   

                            <a href="" className="btn btn-block rounded-0 bg-pri text-white">Create Worker</a>

                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="form-video mb-4">
                            <iframe width="100%" height="350" src="https://www.youtube.com/embed/35lXWvCuM8o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </div>
    )
}

export default AddBid;
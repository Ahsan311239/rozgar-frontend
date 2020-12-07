import React from "react";
import { Navbar, Nav, Carousel } from "react-bootstrap";
import Banngerimg1 from "./../assets/img/createWorker.jpg";
import Banngerimg2 from "./../assets/img/worker.jpg";


function Service() {  

  return (
    <div className="service-page">
            <div className="container">
                <Navbar bg="light" variant="light" className="bg-transparent">
                    <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Location</Nav.Link>
                        <Nav.Link href="#features">Service</Nav.Link>
                        <Nav.Link href="#pricing" >Login</Nav.Link>
                        <Nav.Link href="#new" >Signup</Nav.Link>
                        <Nav.Link href="#pricing" className="btn header-btn rounded-0 rounded px-3" >Become a Worker</Nav.Link>
                    </Nav>
                </Navbar>

                <div className="row pt-5">
                    <div className="col-md-8">
                    <Carousel>
                        <Carousel.Item>
                            <div className="back_img" style={{backgroundImage: `url(${Banngerimg1})`}}></div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="back_img" style={{backgroundImage: `url(${Banngerimg2})`}}></div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="back_img" style={{backgroundImage: `url(${Banngerimg1})`}}></div>
                        </Carousel.Item>
                    </Carousel>
                    {/* details */}
                    <div className="border">
                    <h5 className="font-weight-bold mt-4">Details</h5>
                    <h5 className="font-weight-bold mt-2">Title: Abdullah Fucker</h5>
                    <h5 className="font-weight-bold mt-2">Description</h5>
                    <p>Make the most of your purchase with this opportunity. The 4 Marla property you are looking for is now here. The prime location of Adiala Road - Rawalpindi will also ensure that your real estate asset will have great market value. If Rawalpindi is the destination of your dreams, here is a property to get you started! You are not going to find a better property option anywhere in the city for as low as Rs 25,000,000. You can now purchase your Building at an amazing price. We are just a call away.</p>
                    </div>

                    </div>
                    <div className="col-md-4">
                        <div className="border mb-1 p-1">
                            <h5 className="font-weight-bold mt-2">$2500</h5>
                            <p className="text-secondary">Commercial Unit Available For Sale, Near Snober City Rawalpindi</p>
                            <p>Adiala Road, Rawalpindi, Punjab</p>
                        </div>

                        <div className="border mb-1 p-1">
                            <h5 className="font-weight-bold mt-2">Sellar Description</h5>
                            <p className="text-secondary">Commercial Unit Available For Sale, Near Snober City Rawalpindi</p>
                            <p>Adiala Road, Rawalpindi, Punjab</p>
                        </div>


                        <div className="border p-1">
                            <h5 className="font-weight-bold mt-2">Map</h5>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.2365238903717!2d73.06160471473777!3d33.62510874756616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df94e81a49a0b7%3A0xf47af207df29ec89!2sKartar%20Pura%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1607192333697!5m2!1sen!2s" width="100%" height="250" frameborder="0" title="aotiw4jtw" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>

                    </div>
                </div>
            </div>

    </div>
  );
}

export default Service;

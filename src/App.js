import logo from './logo.svg';
import "./assets/style/bootstrap.min.css";
import './App.css';
import "./assets/style/style.scss";
import { Navbar, Nav } from "react-bootstrap";
import safetyImg from "./assets/img/download.svg";
import bannerImg from "./assets/img/banner_home.jpg";
import productImg from "./assets/img/product.jpg";
import workerImg from "./assets/img/worker.jpg";

function App() {  
  return (
    <div>
        <div className="container">
            <Navbar bg="light" variant="light" className="bg-transparent">
              <Navbar.Brand href="#home">LOGO</Navbar.Brand>

              <Nav className="ml-auto">
                <Nav.Link href="#home">Location</Nav.Link>
                <Nav.Link href="#features">Service</Nav.Link>
                <Nav.Link href="#pricing">Login</Nav.Link>
                <Nav.Link href="#pricing" className="btn header-btn rounded px-3" >Become a Tasker</Nav.Link>
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
                  <input className="form-control" placeholder="Enter name" type="text"  ></input>
                  <button className="btn bg-pri px-4 text-white">  Search</button>
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

    </div>
  );
}

export default App;

import React from "react";
import "./assets/style/bootstrap.min.css";
import "./assets/style/style.scss";

import Home from "./pages/Home";
import CreateWorker from "./pages/CreateWorker";
import Services from "./pages/Services";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Help from "./pages/Help";
import AddBid from "./pages/AddBid";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import { BrowserRouter, Route,  Switch, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";


function App() {  

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create-worker" component={CreateWorker} />
          <Route path="/services" component={Services} />
          <Route path="/service" component={Service} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/help" component={Help} />
          <Route path="/add-bid" component={AddBid} />
        </Switch>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;

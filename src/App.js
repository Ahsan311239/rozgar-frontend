import React from "react";
import "./assets/style/bootstrap.min.css";
import './App.css';
import "./assets/style/style.scss";

import Home from "./pages/Home";
import CreateWorker from "./pages/CreateWorker";
import Services from "./pages/Services";

function App() {  

  return (
    <div>

      {/* <Home /> */}

      <CreateWorker />

      {/* <Services /> */}

    </div>
  );
}

export default App;

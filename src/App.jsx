
import React from "react";
import ReactDOM from "react-dom";
import SafeComponent from "./SafeComponent";

import "./index.css";

import Footer from "home/Footer";
 
import Header from "home/Header";


const App = () => (
  <div className="containerr"> 
  {/* <SafeComponent> */}
      <Header />

    {/* </SafeComponent> */}
    details section
    <Footer />

  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));

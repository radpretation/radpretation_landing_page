import React from "react";
import "../styles/HeroSection.css";
import Header from "./Header";


function Hero() {
  return (
    <div className="hero-section">
      {/* <nav className="navbar">
        <div className="logo">
          <div className="imgg">
              <img src="/images/logo.png" alt="Logo" className="logoImg" />
          </div>
          <div>
            <h6 className="brand-tagline">IMAGING SIMPLIFIED</h6>
          </div>
        </div>
        <div className="menu">
          <a href="#home">Home</a>
          <a href="#product">Products</a>
          <a href="#Solutions">Solutions</a>
          <a href="#Contact">Contact</a>
        </div>
      </nav> */}
      <Header />

      <div className="hero-content">
        <div className="hero-text">
          <h1>Transform Radiology Workflows with AI-Powered Intelligence</h1>
          <p>
            Reduce report turnaround time by 60% while improving accuracy
            through advanced AI assistance and seamless teleradiology
            integration.
          </p>
          <div className="hero-buttons">
            <button className="bg-[#9e4cc1] rounded-[35px] min-w-[140px] h-12 text-white">Book a Demo</button>
            <button className="bg-[#f1f1f1] rounded-[35px] min-w-[140px] h-12 text-[#4d4d4d] hover:bg-[#e2e2e2]">View Solutions</button>
          </div>
        </div>
        <div className="lg:w-[60vw] w-[100vw]">
          <img
            src="/images/image.png"
            alt="Radiology workflow"
            className="workflow-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;


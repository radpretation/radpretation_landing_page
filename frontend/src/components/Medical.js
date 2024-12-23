import React from "react";
import "../styles/Medical.css";

function Medical() {
  return (
    <div className="medical-section">
      <div className="medical-content">
        <h1 className="lg:w-[40vw] xs:w-[600px] text-[#4b4b4b] font-[2rem]">Revolutionizing Medical Image Segmentation</h1>
        <p className="lg:w-[40vw]  xs:w-full text-justify">
          Experience precision annotation with MedSAM, a state-of-the-art
          foundation model designed for universal medical image segmentation.
          Built on over 1.5 million image-mask pairs across 10 imaging
          modalities and 30+ cancer types, MedSAM delivers unparalleled
          accuracy and versatility for medical imaging needs.
        </p>
        <div className="grid place-items-center lg:place-items-start">
        <button className="bg-[#9e4cc1] rounded-[35px] min-w-[140px] h-12 text-white mt-4" >Know more</button>
        </div>
      </div>
      <div className="medical-image grid place-items-center">
        <img
          src="/images/medicalImg.jpg" 
          alt="Medical imaging"
        />
      </div>
    </div>
  );
}

export default Medical;

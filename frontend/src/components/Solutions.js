import React from "react";
import "../styles/Solutions.css";

function Solutions() {
  return (
    <div className="advanced-tech" id="Solutions">
      <h2 className="title mt-4">
        Making Radiologists' Lives Simpler with Advanced Technology Solutions
      </h2>

      <div className="tech-section">
        {/* Section 1 */}
        <div className="tech-item">
          <div className="icon-container">
            <img
              src="/images/circle1.png" // Replace with your icon URL
              alt="Vision Transformer Icon"
              className="lg:w-[80px] lg:h-[80px] ml-6"
            />
          </div>
          <div className="content">
            <h3>
              Elevating Image Classification with Precision and Speed – Vision Transformer
            </h3>
            <p>
            • Patch-Based Precision
             • Accurate Classification
             • Speed & Diagnosis
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="tech-item">
          <div className="icon-container">
            <img
              src="/images/circle2.png" // Replace with your icon URL
              alt="SegFormer Icon"
              className="lg:w-[80px] lg:h-[80px] ml-6"
            />
          </div>
          <div className="content">
            <h3>
              Next-Generation Image Segmentation for Enhanced Detail – SegFormer
            </h3>
            <p>
            • Transformer-MLP Fusion
            • Detailed & Scalable
            • Optimized for Accuracy
            </p>
          </div>
        </div>


        {/* Section 3 */}
        <div className="tech-item">
          <div className="icon-container">
            <img
              src="/images/circle3.png" // Replace with your icon URL
              alt="Custom Workflows Icon"
              className="lg:w-[80px] lg:h-[80px] ml-6"
            />
          </div>
          <div className="content">
            <h3>Customizable Workflows for Enhanced Flexibility</h3>
            <p>
            • Promptable Versatility
            • Expansive Training
            • Unmatched Adaptability
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;

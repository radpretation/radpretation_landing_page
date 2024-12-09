import React from "react";
import "../styles/Accuracy.css";

function BenefitsSection() {
  return (
    <div className="benefits-section grid md:grid-cols-3  xs:grid-cols-1 place-items-center">
      <div className="benefit">
        <h1 className="font-semibold text-[#9E4CC1] text-[1.2rem] lg:text-[2rem]">60% <span className="text-[#4b4b4b]"><br/>Faster reporting</span></h1>
        {/* <p>
          Streamline the reporting process to reduce turnaround times and enable
          radiologists to deliver insights faster.
        </p> */}
      </div>
      <div className="benefit">
      <h1 className="font-semibold text-[#9E4CC1] text-[1.2rem] lg:text-[2rem]">95% <span className="text-[#4b4b4b]"><br/>AI <br/>accuracy</span></h1>
        {/* <p>
          Ensure diagnostic precision and reliability through AI-driven tools,
          providing radiologists with highly accurate support in identifying
          critical findings.
        </p> */}
      </div>
      <div className="benefit">
      <h1 className="font-semibold text-[#9E4CC1] text-[1.2rem] lg:text-[2rem]">40% <span className="text-[#4b4b4b]"><br/>Cost <br/>reduction </span></h1>
        {/* <p>
          Lower operational costs associated with diagnostic processes,
          allowing healthcare providers to optimize budgets while maintaining
          high-quality care.
        </p> */}
      </div>
    </div>
  );
}

export default BenefitsSection;

import React from "react";
import icon from "../images/icon.png";

export default function intro() {
  return (
    <>
      <div className="grid place-items-center md:grid-cols-1 text-center h-[100vh]">
        <div className="lg:pt-[0px] grid place-items-center ">
          <div className="lg:w-full  pt-[100px]">
            {/* <p className="text-slate-400 lg:text-[25px] text-[20px] backdrop-blur-sm z-10 font-mono">
              Introducing
            </p> */}
            <div className="grid place-items-center z-10">
              <img src={icon} alt="icon" className="lg:w-60 w-40 p-4" />
            </div>

            <p className="text-[#6e6e6e] lg:text-[80px] md:text-[50px] text-[40px] font-[500] bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-teal-200 to-cyan-400 z-10 backdrop-blur-sm">
              RADPRETATION.ai
            </p>
            <p className="text-[#FFA500] font-medium lg:text-[20px] lg:tracking-[10px] tracking-[5px] -mt-2 backdrop-blur-sm">
              HEALTHCARE SIMPLIFIED
            </p>
            <p className="text-slate-200 font-light lg:text-[20px] text-[14px] m-8 mb-2 tracking-[2px]">
              Revolutionizing healthcare with power of AI
            </p>
          </div>
          <div className="border-2 border-cyan-900 text-white w-[150px] rounded-full p-2 text-center mt-4 bg-gradient-to-r from-[#16a69c] to-cyan-600 hover:drop-shadow-2xl hover:drop-shadow-white backdrop-blur-sm">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdAnGuSIoiKqMG1vMtRc1K65hhMDNB47jlnnfHWw5EH64N9tQ/viewform?usp=sf_link"
              target="_blank"
              rel="noopener"
            >
              Join the Beta
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-max">
            <p className="border-r-4 border-r-white pr-5 animate-typing overflow-hidden whitespace-nowrap text-xl text-teal-200 font-mono backdrop-blur-sm">
              Launching Soon...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

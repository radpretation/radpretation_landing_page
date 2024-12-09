import React from "react";
import "../styles/Aiworks.css";

const data = [
  {
    id: 1,
    title: "Radiology Information System",
    description: "Comprehensive Dashboard for Seamless Workflow Management",
    image: "/images/sectionImg1.webp",
    sections: [
      {
        heading: "Unified Dashboard",
        content: `A centralized hub where radiologists, admins, 
                  and patients can view pertinent information, 
                  track case statuses, and monitor workflow.`,
      },
      {
        heading: "Seamless Collaboration",
        content: `Streamlined tools to foster collaboration among 
                  healthcare professionals for better outcomes.`,
      },
      {
        heading: "Patient Engagement",
        content: `Empower patients with real-time access to their 
                  reports and status updates.`,
      },
    ],
  },
  {
    id: 2,
    title: "AI-Driven Diagnosis",
    description: "Harness the Power of AI for Faster, Accurate Results",
    image: "/images/sectionImg2.jpg",
    sections: [
      {
        heading: "AI-Powered Insights",
        content: `Leverage machine learning to enhance diagnostic 
                  accuracy and speed.`,
      },
      {
        heading: "Advanced Imaging Tools",
        content: `Cutting-edge tools to visualize and analyze complex cases 
                  efficiently.`,
      },
      {
        heading: "Automated Workflow",
        content: `Reduce manual errors and improve efficiency with automation.`,
      },
    ],
  },
  {
    id: 3,
    title: "Secure Cloud Storage",
    description: "Reliable and Accessible Data for Every Need",
    image: "/images/sectionImg3.jpg",
    sections: [
      {
        heading: "End-to-End Encryption",
        content: `Ensure sensitive data is protected at every step.`,
      },
      {
        heading: "Scalable Solutions",
        content: `Cloud storage options that grow with your needs.`,
      },
      {
        heading: "24/7 Accessibility",
        content: `Access your data anytime, anywhere, with robust cloud solutions.`,
      },
    ],
  },
];

function CombinedComponent() {
  return (
    <div className="space-y-16 lg:w-[80vw] xs:ml-4 lg:ml-0">
      <h1 className="font-medium lg:text-4xl md:text-3xl text-xl text-center text-[#4b4b4b]">
        Here’s how radpretation.ai works
      </h1>
      {data.map((item) => (
        <div key={item.id} className="shadow-md grid xs:place-items-center pl-6 pr-6">
          {/* First Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
            <div className="inline-flex gap-2 lg:w-[40vw] lg:ml-42 xs:ml-12">
              <div className="icon-container lg:p-2">
                <div className="hidden lg:flex circle justify-center align-items-center">
                  <span className="number">{item.id}</span>
                </div>
              </div>
              <div className="mt-1 lg:ml-3">
                <h3 className="md:text-2xl font-bold">{item.title}</h3>
                <div className="grid grid-cols-1 place-items-left -ml-14 lg:ml-0 xs:w-[90vw] lg:w-full mt-2">
                  {item.sections.map((section, index) => (
                    <p
                      key={index}
                      className="text-[#8226aa] font-bold text-left sm:min-w-[80%]"
                    >
                      {section.heading}
                      <span className="text-gray-600 font-medium text-left sm:min-w-[80%]">
                        {" "}
                        {section.content}
                      </span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <img
                src={item.image}
                alt={item.title}
                className="xs:w-[400px] xs:[300px] lg:w-[400px] lg:h-[300px] rounded-lg object-cover p-4"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CombinedComponent;

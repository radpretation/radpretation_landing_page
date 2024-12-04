import React from "react";

const ImpactCard = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-[#ffffff0e] backdrop-blur-lg rounded-md w-[350px] h-[450px] grid place-items-center text-white border-2 border-sky-400 m-2">
      {imageSrc && (
        <img
          className="w-[350px] h-[280px] -mt-9 rounded-t-md object-cover"
          src={imageSrc}
          alt={title || "Card Image"}
        />
      )}
      <div className="p-2">
        <h5 className="">{title}</h5>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default ImpactCard;

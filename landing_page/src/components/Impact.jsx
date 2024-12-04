import React from "react";
import ImpactCard from "./ImpactCard";
import Image1 from "../images/Image1.png";
import Image2 from "../images/Image2.jpg";
import Image3 from "../images/Image3.jpg";

function Impact() {
  const cardData = [
    {
      imageSrc: Image1,
      title: "Card Title 1",
      description: "Card description 1",
    },
    {
      imageSrc: Image2,
      title: "Card Title 2",
      description: "Card description 1",
    },
    {
      imageSrc: Image3,
      title: "Card Title 3",
      description: "Card description 1",
    },
  ];
  return (
    <>
      <div className="mt-[100px]"></div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center">
        {cardData.map((card) => (
          <ImpactCard key={card.title} {...card} />
        ))}
      </div>
    </>
  );
}

export default Impact;

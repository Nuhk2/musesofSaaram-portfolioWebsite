import React, { useEffect, useState } from "react";

const AnimatedTagline: React.FC = () => {
  const words = ["emotion", "connection", "action"]; // change these as desired
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // rotates every 2 seconds
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="text-center sm:text-left flex flex-wrap justify-center sm:justify-start gap-2 text-[#d8b26e] italic font-neue font-extralight">
      <span className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Crafting experiences that inspire
      </span>
      <span
        key={index}
        className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#fceed5] font-bold tracking-wider transition-all duration-500 ease-in-out"
      >
        {words[index]}
      </span>
    </div>
  );
};

export default AnimatedTagline;

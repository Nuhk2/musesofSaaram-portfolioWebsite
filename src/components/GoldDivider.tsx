import React from "react";

const GoldDivider: React.FC = () => {
  return (
    <div className="relative h-[2px] my-8 overflow-hidden">
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-3/4 h-full 
                      bg-gradient-to-r from-transparent via-[#d8b26e] to-transparent
                      shadow-[0_0_8px_rgba(216,178,110,0.4)]">
      </div>
    </div>
  );
};

export default GoldDivider;
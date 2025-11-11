import React from "react";
import ImageGallery from "./ImageGallery";
// import Hero from "./Hero";

const HeroTitle: React.FC = () => {
  const text = "muses";

  return (
    <div>
    <div className="text-center">
      <h1 className="text-8xl md:text-9xl lg:text-[24rem] font-bold leading-none text-gold pt-12 select-none">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block mr-2 transition-all duration-700 ease-out hover:scale-125 hover:text-[#E1C08A] cursor-default"
          >
            {char}
          </span>
        ))}
      </h1>

      {/* Subtext below the title */}
      <p className="text-sm md:text-xl italic font-silk text-gold/80 tracking-wide text-center pr-8 pb-8">
        <span className="text-2xl text-gold/90 md:text-3xl italic">P</span>
        hotography &{" "}
        <span className="text-2xl text-gold/90 md:text-3xl italic">V</span>
        isual Work
      </p>
      <div className="text-gold min-h-screen flex items-center justify-center px-24">
  <div className="space-y-[-20px] text-left">
    {/* the ESSENCE */}
    <div className="flex items-center">
      <p className="italic font-silk text-beige mr-3" style={{ fontSize: '78px' }}>
        the
      </p>
      <p
        className="uppercase font-bold text-beige leading-none"
        style={{ fontSize: '98px' }}
      >
        ESSENCE
      </p>
    </div>

    {/* of CREATIVITY */}
    <div className="flex items-center pl-12">
      <p className="italic font-silk text-beige mr-3" style={{ fontSize: '78px' }}>
        of
      </p>
      <p
        className="uppercase font-bold text-beige leading-none"
        style={{ fontSize: '98px' }}
      >
        CREATIVITY
      </p>
    </div>

    {/* is NOT TO BE */}
    <div className="flex items-center pl-20">
      <p className="italic font-silk text-beige mr-3" style={{ fontSize: '78px' }}>
        is
      </p>
      <p
        className="uppercase font-bold text-beige leading-none"
        style={{ fontSize: '98px' }}
      >
        NOT TO BE
      </p>
    </div>

    {/* AFRAID */}
    <div className="flex item-center pl-44">
      <p
        className="uppercase font-bold text-beige leading-none"
        style={{ fontSize: '98px' }}
      >
        AFRAID
      </p>
    </div>
  </div>
  </div>
    </div>
    <ImageGallery />
</div>

    
  );
};

export default HeroTitle;

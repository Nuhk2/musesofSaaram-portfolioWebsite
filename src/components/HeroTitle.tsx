import React, { useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImageGallery from "./ImageGallery";

const HeroTitle: React.FC = () => {
  const text = "muses";

  // --- animation setup ---
  const controls = useAnimation();
const [ref, inView] = useInView({
  threshold: 0.2, // triggers when 20% of the section is visible
  triggerOnce: false, // set to true if you want it to animate only once
});

useEffect(() => {
  if (inView) {
    controls.start("visible");
  } else {
    controls.start("hidden");
  }
}, [controls, inView]);

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: [0.25, 0.1, 0.25, 1] },
  },
};

  return (
    <div>
      <div className="text-center">
        {/* Title */}
        <h1
          className="text-8xl md:text-[12rem] sm:text-[10rem] lg:text-[256px] font-bold leading-none text-gold pt-40 
      md:pt-40 select-none"
        >
          {text.split("").map((char, i) => (
            <span
              key={i}
              className="inline-block mr-2 transition-all duration-700 ease-out hover:scale-125 hover:text-[#E1C08A] cursor-default"
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Subtext */}
        <p className="text-sm md:text-xl italic font-silk text-gold/80 tracking-wide text-center pr-8 pb-8">
          <span className="text-2xl text-gold/90 md:text-3xl italic">P</span>
          hotography &{" "}
          <span className="text-2xl text-gold/90 md:text-3xl italic">V</span>
          isual Work
        </p>

        {/* QUOTE SECTION — animated */}
        <motion.div
          ref={ref}
          className="text-gold flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-12 md:py-20 lg:min-h-screen"
          variants={fadeIn}
          initial="hidden"
          animate={controls}
        >
          <div className="space-y-[-10px] sm:space-y-[-15px] md:space-y-[-20px] text-left">
            {/* the ESSENCE */}
            <div className="flex items-center">
              <p className="italic font-silk text-beige mr-2 sm:mr-3 text-4xl sm:text-5xl md:text-6xl lg:text-[78px]">
                the
              </p>
              <p className="uppercase font-bold text-beige leading-none text-5xl sm:text-6xl md:text-7xl lg:text-[98px]">
                ESSENCE
              </p>
            </div>

            {/* of CREATIVITY */}
            <div className="flex items-center pl-6 sm:pl-8 md:pl-12">
              <p className="italic font-silk text-beige mr-2 sm:mr-3 text-4xl sm:text-5xl md:text-6xl lg:text-[78px]">
                of
              </p>
              <p className="uppercase font-bold text-beige leading-none text-5xl sm:text-6xl md:text-7xl lg:text-[98px]">
                CREATIVITY
              </p>
            </div>

            {/* is NOT TO BE */}
            <div className="flex items-center pl-10 sm:pl-14 md:pl-20">
              <p className="italic font-silk text-beige mr-2 sm:mr-3 text-4xl sm:text-5xl md:text-6xl lg:text-[78px]">
                is
              </p>
              <p className="uppercase font-bold text-beige leading-none text-5xl sm:text-6xl md:text-7xl lg:text-[98px]">
                NOT TO BE
              </p>
            </div>

            {/* AFRAID */}
            <div className="flex items-center pl-20 sm:pl-28 md:pl-44">
              <p className="uppercase font-bold text-beige leading-none text-5xl sm:text-6xl md:text-7xl lg:text-[98px]">
                AFRAID
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <ImageGallery />
    </div>
  );
};

export default HeroTitle;

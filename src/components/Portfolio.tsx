import React , { useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { projects } from "../data/portfolioData";

const Portfolio: React.FC = () => {
  // Group projects into rows of 2 (for flex layout)
  const rows = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2));
  }

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
    <section className=" text-white py-20 px-6 md:px-20 lg:px-32">
      {/* Header */}
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
                Let's
              </p>
              <p className="uppercase font-regular text-beige leading-none text-5xl sm:text-6xl md:text-7xl lg:text-[98px]">
                CREATE
              </p>
            </div>

            {/* of CREATIVITY */}
            <div className="flex items-center pl-6 sm:pl-8 md:pl-12">
              
              <p className="uppercase font-regular text-beige leading-none text-5xl sm:text-6xl md:text-7xl lg:text-[98px]">
                SOMETHING
              </p>
            </div>

            {/* is NOT TO BE */}
            <div className="flex items-center pl-10 sm:pl-14 md:pl-20">
              
              <p className="uppercase font-regular text-beige leading-none text-5xl sm:text-6xl md:text-7xl lg:text-[98px]">
                AWESOME
              </p>
            </div>

            {/* AFRAID
            <div className="flex items-center pl-20 sm:pl-28 md:pl-44">
              <p className="uppercase font-bold text-beige leading-none text-5xl sm:text-6xl md:text-7xl lg:text-[98px]">
                AFRAID
              </p>
            </div> */}
            
          </div>
          </motion.div>
         

      {/* Portfolio Rows */}
      <div className="flex flex-col gap-24 max-w-7xl mx-auto">
        {rows.map((pair, rowIndex) => {
          return (
            <div
              key={rowIndex}
              className="flex flex-col md:flex-row items-center justify-between gap-10"
            >
              {pair.map((project, i) => {
                const globalIndex = rowIndex * 2 + i;

                // 🧠 Correct 1s-2L-3L-4s pattern
                const patternIndex = globalIndex % 4;
                const isSmall = patternIndex === 0 || patternIndex === 3;

                const widthClass = isSmall ? "md:w-[40%]" : "md:w-[60%]";
                const heightClass = isSmall ? "h-64" : "h-80";

                // Add vertical stagger for small images
                const translateYClass =
                  isSmall && globalIndex % 2 === 0 ? "md:-translate-y-6" : "";

                return (
                  <div
                    key={project.id}
                    className={`flex flex-col items-start ${widthClass} transition-transform duration-300 ${translateYClass}`}
                  >
                    {/* Image */}
                    <Link
                      to={`/project/${project.id}`}
                      className="overflow-hidden  w-full"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full ${heightClass} object-cover  transform transition-transform duration-300 hover:scale-105`}
                      />
                    </Link>

                    {/* Text */}
                    <div className="mt-3 w-full">
                      {/* First line: Category left, Date right */}
                      <div className="flex justify-between items-center text-sm text-gray-400 mb-1">
                        <span className="text-[#D1B38E]">{project.category}</span>
                        <span>{project.date}</span>
                      </div>

                      {/* Second line: Number and Title, centered */}
                      <div className="flex mt-4 items-center gap-4">
                        <span className="text-6xl italic font-silk text-[#D1B38E]">{project.number}</span>
                        <Link to={`/project/${project.id}`} className="hover:text-[#D1B38E] transition-colors duration-300 w-full">
                          <h3 className="text-4xl font-light tracking-normal leading-none break-words">
                            {project.title}
                          </h3>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

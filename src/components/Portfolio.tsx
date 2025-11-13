import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/portfolioData";

const Portfolio: React.FC = () => {
  // Group projects into rows of 2 (for flex layout)
  const rows = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2));
  }

  return (
    <section className=" text-white py-20 px-6 md:px-20 lg:px-32">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="italic text-[#D1B38E] font-silk text-lg">let’s</p>
        <h2 className="text-5xl text-gold font-bold leading-tight">
          CREATE <br /> SOMETHING <br /> AWESOME
        </h2>
      </div>

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

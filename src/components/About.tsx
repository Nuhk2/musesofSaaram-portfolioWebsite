import React from "react";
import profilePic from "../Images/project1/3.jpeg"
const About: React.FC = () => {
  return (
    <section className="px-6 sm:px-12 md:px-48 py-36 text-[#d8b26e] font-neue ">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        About Me
      </h2>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Image */}
        <div className="md:w-1/3 w-full flex justify-center">
          <img
            src={profilePic}
            alt="Your Name"
            className="rounded-2xl shadow-lg w-64 h-64 object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:w-2/3 w-full text-center md:text-left space-y-4">
          <p>
            Hello! I'm Saaram, a passionate photographer based in Islamabad, Pakistan. I specialize in capturing 
            landscapes, portraits, or events with a unique perspective and attention to detail.
          </p>
          <p>
            Photography for me is more than just images—it's about telling stories, capturing emotions, and freezing moments in time 
            that speak to the soul. My work combines creativity with technical expertise to deliver visuals that are both beautiful and meaningful.
          </p>
          <p>
            When I'm not behind the camera, I enjoy [hobby/interest] and constantly exploring new techniques to elevate my craft.
          </p>

          {/* Optional CTA Button */}
          <a
            href="#contacts"
            className="inline-block mt-4 px-6 py-2 border border-[#d8b26e] rounded-2xl hover:bg-[#d8b26e] hover:text-[#1a1a1a] transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

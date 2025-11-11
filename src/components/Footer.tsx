import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const IconInstagram = FaInstagram as React.FC<React.SVGProps<SVGSVGElement>>;
const IconBehance = FaBehance as React.FC<React.SVGProps<SVGSVGElement>>;
const IconDribbble = FaDribbble as React.FC<React.SVGProps<SVGSVGElement>>;
const IconEnvelope = FaEnvelope as React.FC<React.SVGProps<SVGSVGElement>>;


const Footer: React.FC = () => {
  return (
   <footer className="bg-[#121110] text-gold/80 border-t border-gold/20 py-10 px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 items-center text-center md:text-left gap-8">
  
  {/* Left Section (Icons) */}
  <div className="flex justify-center md:justify-start space-x-6 text-gold/70 text-xl">
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gold transition-transform transform hover:scale-110 duration-300"
    >
      <IconInstagram />
    </a>
    <a
      href="https://behance.net"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gold transition-transform transform hover:scale-110 duration-300"
    >
      <IconBehance />
    </a>
    <a
      href="https://dribbble.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gold transition-transform transform hover:scale-110 duration-300"
    >
      <IconDribbble />
    </a>
    <a
      href="mailto:hello@pixelstudio.com"
      className="hover:text-gold transition-transform transform hover:scale-110 duration-300"
    >
      <IconEnvelope />
    </a>
  </div>

  {/* Center Section */}
  <div className="flex justify-center">
<Link 
    to="/"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="text-3xl md:text-3xl text-gold/70 font-silk tracking-wider hover:text-gold transition-transform transform hover:scale-110 duration-300"
    >
      Muses of Saaram</Link>
  </div>

  {/* Right Section */}
  <div className="flex justify-center md:justify-end">
    <p className="text-xs md:text-base text-gold/70">
      © {new Date().getFullYear()} Muses of Saaram. All rights reserved.
    </p>
  </div>

</footer>

  );
};

export default Footer;

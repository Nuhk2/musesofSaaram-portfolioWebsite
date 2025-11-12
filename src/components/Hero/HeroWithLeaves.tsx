import React, { useEffect, useState } from "react";
import leafImg from "../../assets/leaf.png"; // make sure to have a leaf PNG
// import Hero from "./Hero";
import HeroTitle from "./HeroTitle";

interface LeafProps {
  id: number;
  left: number;
  duration: number;
  size: number;
  delay: number;
  rotation: number;
  distance: number;
}

const NUM_LEAVES = 25; // number of leaves

const HeroWithLeaves: React.FC = () => {
  const [leaves, setLeaves] = useState<LeafProps[]>([]);

  useEffect(() => {
    const generatedLeaves: LeafProps[] = Array.from({ length: NUM_LEAVES }).map(
      (_, i) => ({
        id: i,
        left: Math.random() * 100, // random horizontal position
        duration: 10 + Math.random() * 5, // 5-10 seconds
        size: 20 + Math.random() * 30, // 30px-60px width
        delay: Math.random() * 10, // staggered start
        rotation: Math.random() * 360, // initial rotation
        distance: 450 + Math.random() * 100,
      })
    );
    setLeaves(generatedLeaves);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#121110]">
      {/* Leaves layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {leaves.map((leaf) => (
          <img
            key={leaf.id}
            src={leafImg}
            alt="leaf"
            className="absolute top-[-50px]"
            style={{
              left: `${leaf.left}%`,
              width: `${leaf.size}px`,
              animation: `fall ${leaf.duration}s linear ${leaf.delay}s infinite`,
              transform: `rotate(${leaf.rotation}deg) translateY(${leaf.distance}vh)`,
            }}
          />
        ))}
      </div>

      {/* Hero content layer */}
      <div className="relative z-100 flex items-center justify-center min-h-screen">
        <HeroTitle />
      </div>
      

      {/* Leaf animation keyframes */}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(200vh) rotate(360deg);
            opacity: 0;
          }
        }

        
      `}</style>
    </div>
  );
};

export default HeroWithLeaves;

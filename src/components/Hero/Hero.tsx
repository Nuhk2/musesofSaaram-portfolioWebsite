// import { motion } from 'framer-motion';
// import HeroTitle from './HeroTitle';
import HeroWithLeaves from './HeroWithLeaves';



<HeroWithLeaves/>
const Hero: React.FC = () => (
  <section id="hero" className="relative flex flex-col items-center justify-center overflow-hidden pb-12">
    <div className="">

    <div className="flex items-center justify-center min-h-screen">
  <img
    src="https://www.rogerlowe.co.uk/wp-content/uploads/2024/09/Birds-copy-1024x768.jpg"
    alt="Centered"
    className="w-1/2 max-w-[500px] h-auto rounded-lg px-2"
  />
  <img
    src="https://www.rogerlowe.co.uk/wp-content/uploads/2024/09/Birds-copy-1024x768.jpg"
    alt="Centered"
    className="w-1/2 max-w-[500px] h-auto rounded-lg px-2"
  />
  <img
    src="https://www.rogerlowe.co.uk/wp-content/uploads/2024/09/Birds-copy-1024x768.jpg"
    alt="Centered"
    className="w-1/2 max-w-[500px] h-auto rounded-lg px-2"
  />
  <img
    src="https://www.rogerlowe.co.uk/wp-content/uploads/2024/09/Birds-copy-1024x768.jpg"
    alt="Centered"
    className="w-1/2 max-w-[500px] h-auto rounded-lg px-2"
  />
</div>


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
    
  </section>
);

export default Hero;
import React from "react";
import AnimatedTagline from "./Hero/AnimatedTagline";
import GoldDivider from "./GoldDivider";

const Contact: React.FC = () => {
  return (
    <section className="text-[#d8b26e] px-6 sm:px-12 md:px-48 py-20 pt-8 font-neue">
      <GoldDivider />
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-14 pt-8">
        <span className="text-[#d8b26e]/70 font-silk italic">hello,</span>{" "}
        <span className="font-medium tracking-wide">SAARAM</span>
      </h2>

      {/* Form */}
      <form className="flex flex-col gap-10 max-w-5xl text-[#d8b26e]">
        {/* ROW 1 */}
        <div className="flex flex-col sm:flex-row gap-8">
          {/* NAME */}
          <div className="flex-1 flex items-center gap-4">
            <label className="text-base md:text-2xl sm:text-2xl font-regular whitespace-nowrap">
              MY NAME IS
            </label>

            {/* wrapper must be relative */}
            <div className="relative flex-1">
              {/* input is peer */}
              <input
                type="text"
                placeholder="your name"
                className="peer w-full bg-transparent text-sm sm:text-base placeholder-[#d8b26e]/40 focus:outline-none pb-2 border-none"
                aria-label="your name"
              />
              {/* static subtle baseline if you want — optional, remove if undesired */}
              <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-[#d8b26e]/15"></div>

              {/* animated underline: expands on peer focus */}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#d8b26e] transition-all duration-300 ease-out peer-focus:w-full"></span>
            </div>
          </div>

          {/* FROM */}
          <div className="flex-1 flex items-center gap-4">
            <label className="text-base md:text-2xl sm:text-2xl font-regular whitespace-nowrap">
              I’M FROM
            </label>

            <div className="relative flex-1">
              <input
                type="text"
                placeholder="company name or website"
                className="peer w-full bg-transparent text-sm sm:text-base placeholder-[#d8b26e]/40 focus:outline-none pb-2 border-none"
                aria-label="company"
              />
              <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-[#d8b26e]/15"></div>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#d8b26e] transition-all duration-300 ease-out peer-focus:w-full"></span>
            </div>
          </div>
        </div>

        {/* ROW 2: PROJECT */}
        <div className="flex items-center gap-4">
          <label className="text-base md:text-2xl sm:text-2xl font-regular whitespace-nowrap">
            DESCRIBE YOUR PROJECT
          </label>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="your project idea"
              className="peer w-full bg-transparent text-sm sm:text-base placeholder-[#d8b26e]/40 focus:outline-none pb-2 border-none"
              aria-label="project"
            />
            <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-[#d8b26e]/15"></div>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#d8b26e] transition-all duration-300 ease-out peer-focus:w-full"></span>
          </div>
        </div>

        {/* ROW 3: EMAIL + OR */}
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex-1 flex items-center gap-4">
            <label className="text-base md:text-2xl sm:text-2xl font-regular whitespace-nowrap">
              YOU CAN EMAIL ME AT
            </label>
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="your email"
                className="peer w-full bg-transparent text-sm sm:text-base placeholder-[#d8b26e]/40 focus:outline-none pb-2 border-none"
                aria-label="email"
              />
              <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-[#d8b26e]/15"></div>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#d8b26e] transition-all duration-300 ease-out peer-focus:w-full"></span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="text-base md:text-2xl sm:text-2xl font-regular whitespace-nowrap">
              OR
            </label>
            <div className="relative flex-1 min-w-[180px]">
              <input
                type="text"
                placeholder="enter other way"
                className="peer w-full bg-transparent text-sm sm:text-base placeholder-[#d8b26e]/40 focus:outline-none pb-2 border-none"
                aria-label="other"
              />
              <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-[#d8b26e]/15"></div>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#d8b26e] transition-all duration-300 ease-out peer-focus:w-full"></span>
            </div>
          </div>
        </div>

        {/* ROW 4 */}
        <div className="flex items-center gap-4">
          <label className="text-base md:text-2xl sm:text-2xl font-regular whitespace-nowrap">
            I FOUND YOU THROUGH
          </label>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="provide how (optional)"
              className="peer w-full bg-transparent text-sm sm:text-base placeholder-[#d8b26e]/40 focus:outline-none pb-2 border-none"
              aria-label="found-through"
            />
            <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-[#d8b26e]/15"></div>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#d8b26e] transition-all duration-300 ease-out peer-focus:w-full"></span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-8">
          <AnimatedTagline />
          <button
            type="submit"
            className="border border-[#d8b26e]/60 rounded-full px-10 py-2 text-sm sm:text-base text-[#d8b26e] hover:bg-[#d8b26e] hover:text-black transition-all"
          >
            send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;

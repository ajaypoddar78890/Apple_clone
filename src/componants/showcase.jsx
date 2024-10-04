// src/components/Showcase.jsx
// import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  return (
    <div className="main container mx-auto px-10 md:pt-20 font-customheading">
      <div className="text-gray-300 md:text-center     w-full md:mx-auto">
        <h2 className="text-pop-up-right text-4xl md:text-6xl  md:font-bold lg:text-8xl  whitespace-nowrap overflow-hidden">
          A17 Pro chip.
        </h2>
        <h2
          className="text-pop-up-right text-4xl md:text-6xl
        md:font-bold lg:text-8xl whitespace-nowrap overflow-hidden"
        >
          A monster win for gaming.
        </h2>

        <p className="text-lg first-line: py-2 md:text-2xl mt-2 md:mt-4 md:font-bold text-gray-500">
          It’s here. The biggest redesign in the history of Apple GPUs.
        </p>
      </div>
      <div className="videosection mt-10 md:mt-10   ">
        <video
          className="w-full h-full object-cover"
          playsInline
          preload="auto"
          muted
          autoPlay
          loop={true}
        >
          <source src="./assets/videos/iphonemockvideo.webm" />
        </video>
      </div>
    </div>
  );
};

export default Showcase;

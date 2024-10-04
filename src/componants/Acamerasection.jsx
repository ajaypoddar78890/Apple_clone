import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextGenerateEffectDemo } from "./TextGenerateEffectDemo";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Acamerasection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const element = imageRef.current;

    gsap.fromTo(
      element,
      { scale: 1 }, // Starting scale
      {
        scale: 1.5, // Ending scale
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top 50%", // Start animation when the top of the image is at the top of the viewport
          end: "bottom top", // End animation when the bottom of the image is at the top of the viewport
          scrub: true, // Smoothly scale with scrolling
        },
      }
    );
  }, []);

  return (
    <div className="main container mx-auto px-5 md:px-10   md:mt-12  ">
      <div className="text-gray-300  pt-5 ">
        <h2 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold whitespace-normal overflow-hidden">
          A camera that captures your wildest imagination.
        </h2>
        <p className="text-md md:text-xl py-5 md:mt-4 font-bold text-gray-600 font-custometext">
          <TextGenerateEffectDemo />
        </p>
      </div>
      <div className="relative overflow-hidden h-auto">
        {" "}
        {/* Adjust height as needed */}
        <img
          src="/assets/images/lizardimg.webp"
          alt="Lizard"
          ref={imageRef}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Acamerasection;

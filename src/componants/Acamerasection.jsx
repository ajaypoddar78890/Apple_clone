import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
          start: "top top", // Start animation when the top of the image is at the top of the viewport
          end: "bottom top", // End animation when the bottom of the image is at the top of the viewport
          scrub: true, // Smoothly scale with scrolling
        },
      }
    );
  }, []);

  return (
    <div className="main container mx-auto px-5 md:px-10 mt-12">
      <div className="text-gray-300 px-5 md:px-10">
        <h2 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold whitespace-normal overflow-hidden">
          A camera that captures your wildest imagination.
        </h2>
        <p className="text-lg md:text-2xl py-5 md:mt-4 font-bold text-gray-600">
          From dramatic framing flexibility to next-generation portraits, see
          what you can do with our most powerful iPhone camera system. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          praesentium facilis doloribus fugit tenetur nostrum, perferendis nisi
          vero? Quod nisi incidunt reiciendis! Ea quibusdam aut deserunt
          distinctio molestiae, dignissimos natus?
        </p>
      </div>
      <div className="relative overflow-hidden h-[500px]">
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

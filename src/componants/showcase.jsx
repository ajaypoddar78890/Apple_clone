// src/components/Showcase.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const h2Refs = useRef([]);
  const pRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Create a GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center", // Animation starts when the top of the section hits the center of the viewport
        end: "bottom top", // Animation ends when the bottom of the section hits the top of the viewport
        scrub: true, // Syncs the animation with scroll
        markers: false, // Set to true if you want to see the start and end markers for debugging
      },
    });

    // Typewriter effect for <h2> elements
    tl.fromTo(
      h2Refs.current,
      { width: 0, opacity: 0 },
      {
        width: "100%",
        opacity: 1,
        duration: 3,
        ease: "steps(30)",
        stagger: 2, // Staggered effect
      }
    )
      .to(h2Refs.current, { width: "100%", duration: 0.5 })
      .fromTo(
        pRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.5 } // Delayed start
      );
  }, []);

  return (
    <div ref={sectionRef} className="main container mx-auto px-10">
      <div className="text-gray-300 px-10 md:text-6xl w-full h-full container mx-auto">
        <h2
          ref={(el) => (h2Refs.current[0] = el)}
          className="text-pop-up-right text-2xl md:text-4xl lg:text-6xl whitespace-nowrap overflow-hidden"
        >
          A17 Pro chip.
        </h2>
        <h2
          ref={(el) => (h2Refs.current[1] = el)}
          className="text-pop-up-right text-2xl md:text-4xl lg:text-5xl whitespace-nowrap overflow-hidden"
        >
          A monster with Gaming
        </h2>

        <p
          ref={pRef}
          className="text-lg first-line: py-2 md:text-2xl mt-2 md:mt-4 text-gray-600"
        >
          It’s here. The biggest redesign in the history of Apple GPUs.
        </p>
      </div>
      <div className="videosection md:mt-10   ">
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

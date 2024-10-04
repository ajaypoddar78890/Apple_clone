import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoCarousel from "./VideoCarousel";

const Highlight = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const titleAnimation = gsap.to("#title", {
      opacity: 1,
      y: 0,
      duration: 2,
      scrollTrigger: {
        trigger: "#title",
        start: "top 80%", // Animation starts when the title is 80% into the viewport
        toggleActions: "play none none reverse", // Replay animation on scroll back
      },
    });

    const linksAnimation = gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 3,
      stagger: 0.25,
      scrollTrigger: {
        trigger: "#highlights",
        start: "top 80%", // Animation starts when the section is 80% into the viewport
        toggleActions: "play none none reverse", // Replay animation on scroll back
      },
    });

    // Clean up animations when component unmounts
    return () => {
      titleAnimation.kill();
      linksAnimation.kill();
    };
  }, []);

  return (
    <section
      id="highlights"
      className="h-full w-full overflow-hidden bg-zinc-900 md:my-28 justify-between mx-auto px-5 pt-5 md:px-10 font-customheading"
    >
      <div className="container-heading font-customheading flex justify-between container">
        <div>
          <h1
            id="title"
            className="opacity-0 translate-y-20 text-xl md:text-2xl font-semibold lg:text-5xl font-customheading"
          >
            Get The Highlights
          </h1>
        </div>
        <div className="md:flex gap-2">
          <p className="opacity-0 translate-y-20 text-lg md:text-xl text-blue-800 link lg:text-xl cursor-pointer">
            Watch the Story
          </p>
          <p className="opacity-0 translate-y-20 text-lg md:text-xl text-blue-800 link lg:text-xl cursor-pointer">
            Watch the reel
          </p>
        </div>
      </div>

      <VideoCarousel />
    </section>
  );
};

export default Highlight;

import { useEffect } from "react";
import gsap from "gsap";
import VideoCarousel from "./VideoCarousel";

const Highlight = () => {
  useEffect(() => {
    gsap.to("#title", { opacity: 1, y: 0, duration: 2 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 2, stagger: 0.25 });
  }, []);

  return (
    <section
      id="highlights"
      className="h-full w-screen overflow-hidden   bg-zinc-900 md:my-28 justify-between mx-auto px-5 pt-5 md:px-10"
    >
      <div className="container-heading flex justify-between container  ">
        <div>
          <h1
            id="title"
            className="opacity-0 translate-y-20 text-lg md:text-2xl font-semibold lg:text-3xl"
          >
            Get The Highlights
          </h1>
        </div>
        <div className="md:flex gap-3">
          <p className="opacity-0 translate-y-20 text-sm md:text-md  text-blue-800 link lg:text-xl cursor-pointer">
            Watch the Story
          </p>
          <p className="opacity-0 translate-y-20 text-sm md:text-md text-blue-800 link lg:text-xl cursor-pointer">
            Watch the reel
          </p>
        </div>
      </div>

      <VideoCarousel />
    </section>
  );
};

export default Highlight;

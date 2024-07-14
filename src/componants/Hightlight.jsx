import { useEffect } from "react";
import gsap from "gsap";

const Highlight = () => {
  useEffect(() => {
    gsap.to("#title", { opacity: 1, y: 0, duration: 2 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 2, stagger: 0.25 });
  }, []);

  return (
    <section
      id="highlights"
      className="h-screen w-screen overflow-hidden my-10 bg-zinc-900 md:my-28 flex justify-between container mx-auto px-5 pt-5 md:px-10"
    >
      <div>
        <h1
          id="title"
          className="opacity-0  translate-y-20 text-lg md:text-2xl font-semibold lg:text-3xl"
        >
          Get The Highlights
        </h1>
      </div>
      <div className="md:flex gap-3 ">
        <p className="opacity-0 translate-y-20 text-sm md:text-md md:text-blue-800 link lg:text-xl">
          Watch the reel
        </p>
        <p className="opacity-0 translate-y-20 text-sm md:text-md md:text-blue-800 link lg:text-xl">
          Watch the reel
        </p>
      </div>
    </section>
  );
};

export default Highlight;

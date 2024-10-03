import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContainerScroll } from "../componants/ui/container-scroll-animation";

gsap.registerPlugin(ScrollTrigger);

export function HeroScrollDemo() {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;

    // Check if the element is available
    if (element) {
      gsap.fromTo(
        element.querySelectorAll(".animated-text"),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    } else {
      console.error("Text element not found!");
    }
  }, []);

  return (
    <div className="flex flex-col overflow-hidden mx-h-[40vh] ">
      <ContainerScroll 
        titleComponent={
          <div ref={textRef}>
            <h1 className="animated-text text-3xl md:text-4xl font-semibold text-zinc-700 dark:text-white">
              Colour through and through.
              <br />
              <span className="animated-text text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Tough all around.
              </span>
            </h1>
          </div>
        }
      >
        <img
          src="/assets/images/iphone15collage.webp"
          alt="hero"
          className="mx-auto rounded-2xl object-cover max-h-[100vh] w-auto"
          draggable={true}
        />
      </ContainerScroll>
    </div>
  );
}

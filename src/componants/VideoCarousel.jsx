// import { list } from "postcss";
import { hightlightsSlides } from "../constants";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const VideoCarousel = () => {
  useEffect(() => {
    // Calculate the total width needed for horizontal scrolling
    const totalWidth = document.querySelector(".video-carousel").scrollWidth;
    const viewportWidth = window.innerWidth;

    gsap.to(".video-carousel_container", {
      xPercent: -200 * (hightlightsSlides.length - 1), // Adjust based on the number of slides
      ease: "none", // No easing for linear motion
      scrollTrigger: {
        trigger: "video-carousel",
        scroller: "body", // Use "body" to ensure it works with the scroll container
        pin: true,
        scrub: 1, // Adjust this value for the scroll-to-animation synchronization
        markers: true, // Markers for debugging
        start: "30%",
        end: () => `+=${totalWidth - viewportWidth}`, // End value based on total scrollable width
      },
    });
  }, [hightlightsSlides]);

  return (
    <>
      <div className="flex overflow-x-auto ">
        <div className="video-carousel flex">
          {hightlightsSlides.map((item, i) => (
            <div key={item.id} id="slider" className="pr-10 md:pr-10">
              <div className="video-carousel_container mt-5">
                <div className="w-full h-full flex-center rounded-3xl bg-black">
                  <video
                    className="w-full h-full object-cover"
                    playsInline
                    preload="auto"
                    muted
                    autoPlay
                    loop={true}
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                </div>

                <div className="absolute top-4 left-4 z-10">
                  <p className="md:text-2xl text-lg font-medium">
                    The Brand new iPhone 15 <br />
                    has all the features needed
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoCarousel;

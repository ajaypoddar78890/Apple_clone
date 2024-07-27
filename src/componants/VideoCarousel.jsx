import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hightlightsSlides } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
  useEffect(() => {
    // const totalWidth = document.querySelector(".video-carousel").scrollWidth;
    // const viewportWidth = window.innerWidth;
    // const scrollableWidth = totalWidth - viewportWidth;

    gsap.to(".video-carousel_container", {
      xPercent: -90 * (hightlightsSlides.length - 1), // Adjust based on the number of slides
      ease: "none", // No easing for linear motion
      scrollTrigger: {
        trigger: "#highlights", // Change the trigger to the highlights section
        scroller: "body", // Use "body" to ensure it works with the scroll container
        pin: true,
        scrub: 4, // Adjust this value for the scroll-to-animation synchronization

        start: "top 10%", // Start animation when #highlights hits the top of the viewport
        end: " 0%",
      },
    });
  }, []);

  return (
    <div className="flex overflow-x-hidden parent mt-10">
      <div className="video-carousel flex">
        {hightlightsSlides.map((item) => (
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
                <p className="md:text-3xl md:font-semibold italic text-md font-medium">
                  The Brand new iPhone 15 <br />
                  has all the features needed
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;

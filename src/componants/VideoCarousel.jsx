// import { list } from "postcss";
import { hightlightsSlides } from "../constants";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const VideoCarousel = () => {
  useEffect(() => {
    gsap.to(".video-carousel_container", {
      xPercent: -3500,
      ease: "none",
      scrollTrigger: {
        trigger: ".video-carousel_container",
        scroller: "body ",
        pin: true,
        scrub: 0.5,
        markers: true,
        start: "top",
      },
    });
  }, [hightlightsSlides]);

  return (
    <>
      <div className="flex overflow-x-auto">
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
    </>
  );
};

export default VideoCarousel;

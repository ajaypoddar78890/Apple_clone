import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const [videoSrc, setvideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 768) {
      setvideoSrc(smallHeroVideo);
    } else setvideoSrc(heroVideo);
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => window.removeEventListener("resize", handleVideoSrcSet);
  }, []);

  useGSAP(() => {
    //  gsap.to ('#hero' , {opacity: 1, delay: 2})
    //  gsap.to ('#cta' , {opacity: 1, delay: 2})
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
      ease: "power2.inOut",
      duration: 1,
    });
    gsap.to("#cta", {
      opacity: 1,
      delay: 2,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);
  return (
    <section className="custom-section w-full h-full nav-height bg-black relative container mx-auto px-5 md:px-10">
      <div className="content w-full flex-center flex-col py-2 md:py-4">
        <div className="video-container md:w-full w-full flex-center">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            loop={true}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20"
        >
          <p id="hero" className="hero-title md:mb-3  md:text-4xl lg:text-5xl ">
            iphone 15
          </p>
          <a
            className="bg-blue-800 px-10 py-1 rounded-lg text-black font-semibold  mb-5 md:mb-5"
            href="#highlights"
          >
            Buy
          </a>
          <p className="font-medium text-xl">from $199/month or $999</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

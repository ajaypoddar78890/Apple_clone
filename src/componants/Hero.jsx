import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "..";
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
    <section className="custom-section    bg-black relative     ">
      <div className=" container-div h-full selection: container mx-auto  ">
        <p
          id="hero"
          className="hero-title  first-letter:  md:text-4xl lg:text-5xl "
        >
          iphone 15
        </p>

        <div className="    ">
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
          <p className="cta-text md:text-2xl text-xl ">buy now</p>
          <button className="cta-btn md:text-lg text-sm ">$1,299.99</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

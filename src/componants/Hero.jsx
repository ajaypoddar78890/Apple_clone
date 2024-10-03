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
    <section className=" custom-section  bg-black  ">
      <div className=" container mx-auto ">
        <p
          id="hero"
          className="hero-title  first-letter:  md:text-4xl lg:text-5xl "
        >
          iphone 15 pro
        </p> 
        <div className=" md:m-15">
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
          <p className="cta-text md:text-2xl text-xl  px-10 py-2 bg-blue-700  rounded-lg mb-5 cursor-pointer">
            Buy now
          </p>
          <p className="cta-btn md:text-lg text-sm ">
            From $999 or $41.62/mo. for 24 mo.1
          </p>
          <p>Apple Intelligence coming this fall2</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

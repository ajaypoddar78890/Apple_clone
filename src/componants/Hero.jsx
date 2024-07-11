  import gsap from "gsap"
  import { useGSAP } from "@gsap/react"
  import {heroVideo, smallHeroVideo} from "../utils";
  import {useState} from  "react"
import { useEffect } from "react";
 

const Hero = () => {
  const [videoSrc, setvideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo:heroVideo);


  const handleVideoSrcSet =() =>{
    if(window.innerWidth < 768){
      setvideoSrc(smallHeroVideo)
    }else 
    setvideoSrc(heroVideo)
  }

  useEffect (()=>{
    window.addEventListener("resize", handleVideoSrcSet)
    return () => window.removeEventListener("resize", handleVideoSrcSet)
  },[])





  useGSAP(()=>{
     gsap.to ('#hero' , {opacity: 1, delay: 1.5})
     gsap.to ('#cta' , {opacity: 1, delay: 2})
  },[])
  return (
    <section className="w-full nav-height bg-black relative">
    <div className="5/6 w-full flex-center flex-col py-10 ">
      <p id="hero" className="hero-title"> iphone 15</p>

      <div className="md:w-full w-full flex-center">
        <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc} loop={true}>
        <source src={videoSrc} type="video/mp4" />
        </video>

      </div>
    </div>

    <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">

   <a href="#highlights"> Buy</a>
   <p className="font-normal text-xl">
    from  $199/month or %999
   </p>


    </div>
      
    </section>
  )
}

export default Hero

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words1 = `The iPhone 15 is Apple's latest flagship, blending cutting-edge design with advanced technology. Built with a titanium frame, it offers enhanced durability while maintaining a sleek, lightweight feel. The Super Retina XDR display provides stunning visuals with ProMotion technology, ensuring smoother scrolling and responsiveness. Powered by the new A17 Bionic chip, the iPhone 15 delivers unmatched performance, perfect for gaming, multitasking, and AI-driven applications. The camera system has been upgraded with a 48MP primary sensor, offering professional-level photography and 8K video recording. The addition of an improved Night Mode and Photonic Engine enhances low-light performance. iPhone 15 also introduces USB-C charging, providing faster data transfer and charging speeds. It supports satellite communication for emergency use, ensuring connectivity even in remote locations. The device comes with iOS 17, packed with new features like enhanced customization, StandBy Mode, and an updated FaceTime experience.`;

export function TextGenerateEffectDemo() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Start the animation when 10% of the component is in view
  });

  // Start animations when the component is in view
  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div ref={ref} className="">
      {hasAnimated && <TextGenerateEffect words={words1} />}
    </div>
  );
}

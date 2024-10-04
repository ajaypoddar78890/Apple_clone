import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words1 = `   From dramatic framing flexibility to next-generation portraits, see what you can do with our most powerful iPhone camera system. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          praesentium facilis doloribus fugit tenetur nostrum, perferendis nisi
          vero? Quod nisi incidunt reiciendis! Ea quibusdam aut deserunt
          distinctio molestiae, dignissimos natus?`;

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
    <div ref={ref}>{hasAnimated && <TextGenerateEffect words={words1} />}</div>
  );
}

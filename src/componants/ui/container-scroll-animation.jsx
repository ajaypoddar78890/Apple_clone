"use client";
import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import PropTypes from "prop-types";

export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[50rem] md:h-[60rem] mt-30 flex items-center justify-center relative p-2"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translateY={translateY} titleComponent={titleComponent} />
        <Card rotate={rotate} translateY={translateY} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

ContainerScroll.propTypes = {
  titleComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  children: PropTypes.node.isRequired,
};

export const Header = ({ translateY, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translateY,
      }}
      className="max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

Header.propTypes = {
  translateY: PropTypes.object.isRequired,
  titleComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
};

export const Card = ({ rotate, scale, translateY, children }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        translateY, // Apply translateY here
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl    mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full m overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  rotate: PropTypes.object.isRequired,
  scale: PropTypes.object.isRequired,
  translateY: PropTypes.object.isRequired, // Update PropTypes for translateY
  children: PropTypes.node.isRequired,
};

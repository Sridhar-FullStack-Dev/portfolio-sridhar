import { useEffect, useRef } from "react";
import { Vortex } from "../ui/vortex";
import LocomotiveScroll, { ILocomotiveScrollOptions } from "locomotive-scroll";
import gsap from "gsap";
import SplitType from "split-type";
import { motion } from "framer-motion";

export default function Hero() {
  const heroLocoRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]") as HTMLElement,
      smooth: true,
    } as ILocomotiveScrollOptions);

    const text = new SplitType(textRef.current!, {
      types: "chars",
    });

    gsap.from(text.chars, {
      opacity: 0,
      y: 100,
      rotateX: -90,
      stagger: 0.02,
      duration: 1,
      ease: "power4.out",
      delay: 3,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, ease: "easeInOut", duration: 1 }}
      ref={heroLocoRef}
      className="h-screen w-screen overflow-hidden"
    >
      <Vortex
        backgroundColor="transparent"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <h1
            ref={textRef}
            data-scroll
            data-scroll-speed="0.2"
            className="px-32 text-8xl text-center houseMontage-font uppercase"
          >
            Hurray!
          </h1>
        </motion.div>

        <p
          data-scroll
          data-scroll-speed="0.1"
          className="text-2xl text-center w-96 sarcolenta-font tracking-wider capitalize"
        >
          You've reached the right spot to develop your business idea to the
          world wide
        </p>
      </Vortex>
    </motion.div>
  );
}

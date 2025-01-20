import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SplitType from "split-type";
import { Vortex } from "../ui/vortex";
import Image from "next/image";

export default function Hero() {
  const [show, setShow] = useState<boolean>(false);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShow(true);
    }, 3000);

    return () => {
      clearTimeout(showTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="h-screen w-screen overflow-hidden"
    >
      {show && (
        <Vortex
          backgroundColor="transparent"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", delay: 2 }}
            ref={textRef}
            className="px-32 text-8xl text-center houseMontage-font uppercase"
          >
            Hurray!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", delay: 2.2 }}
            className="text-2xl text-center w-96 sarcolenta-font tracking-wider capitalize"
          >
            You&apos;ve reached the right spot to develop your business idea to the
            world wide
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", delay: 2.5 }}
          >
            <IoIosArrowDown className="animate-bounce mt-5 text-xl" />
          </motion.div>
        </Vortex>
      )}
    </motion.div>

    // <div className="h-screen w-screen"></div>
  );
}

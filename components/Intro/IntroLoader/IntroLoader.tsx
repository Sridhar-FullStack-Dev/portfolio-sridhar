import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroLoaderProps {
  loading: boolean;
  setLoading: any;
}

export default function IntroLoader({ loading, setLoading }: IntroLoaderProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 3 });
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      animation.stop();
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="absolute bottom-12 right-0 w-full sarcolenta-font">
      <div className="flex justify-between items-center gap-8">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ ease: "easeInOut", duration: 3 }}
          className="w-[92%] h-1 bg-alt-white bg-opacity-5"
        ></motion.div>
        <motion.div className="text-4xl font-medium tracking-wide w-[8%]">
          <motion.span>{rounded}</motion.span>%
        </motion.div>
      </div>
    </div>
  );
}

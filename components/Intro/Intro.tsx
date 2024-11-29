"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import IntroHeading from "./IntroHeading/IntroHeading";
import IntroLoader from "./IntroLoader/IntroLoader";

export default function Intro() {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="fixed h-screen w-screen"
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="relative h-full w-full bg-alt-black text-alt-white flex justify-center items-center intro-font">
            <IntroHeading />
            <IntroLoader setLoading={setLoading} loading={loading} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

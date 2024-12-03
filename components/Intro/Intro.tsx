"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import IntroHeading from "./IntroHeading/IntroHeading";
import IntroLoader from "./IntroLoader/IntroLoader";
import Particles from "../ui/particles";

export default function Intro() {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="fixed h-screen w-screen z-[9999]"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="relative h-full w-full bg-alt-black text-alt-white flex justify-center items-center atc-font">
            <IntroHeading />
            <IntroLoader setLoading={setLoading} loading={loading} />
            <Particles
              className="absolute inset-0"
              quantity={100}
              ease={80}
              refresh
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

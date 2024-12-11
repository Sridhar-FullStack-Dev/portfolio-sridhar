import { motion } from "framer-motion";
import GradualSpacing from "../ui/gradual-spacing";

export default function About() {
  return (
    <div className="text-white houseMontage-font">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ ease: "linear", delay: 0.3, duration: 1 }}
        className="sm:text-7xl md:text-8xl houseMontage-font text-center tracking-wider p-4"
      >
        ABOUT
      </motion.h1>

      <div className="flex justify-between items-start container mt-14">
        <div className="w-1/2 flex justify-center items-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.3 }}
            className="bg-alt-white rounded-full relative h-[40rem] w-96"
          ></motion.div>
        </div>

        <div className="w-1/2">
          <GradualSpacing
            className="font-display text-center text-lg font-bold -tracking-widest text-white md:text-7xl md:leading-[5rem]"
            text="Gradual Spacing"
          />
        </div>
      </div>
    </div>
  );
}

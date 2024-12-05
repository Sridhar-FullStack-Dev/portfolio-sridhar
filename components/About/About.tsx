import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ ease: "linear", delay: 0.3, duration: 1 }}
        className="sm:text-7xl md:text-8xl houseMontage-font text-center tracking-wider p-4"
      >
        ABOUT
      </motion.h1>
    </div>
  );
}

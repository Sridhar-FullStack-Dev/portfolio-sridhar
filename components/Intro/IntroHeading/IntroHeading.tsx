import { motion } from "framer-motion";

export default function IntroHeading() {
  const text = "Hey I am so lucky, you visited my site".split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div>
      <motion.div
        className="text-4xl flex flex-wrap justify-center gap-2 mb-32"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {text.map((word, index) => (
          <motion.span variants={child} key={index} className="mr-4">
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

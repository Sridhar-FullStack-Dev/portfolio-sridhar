import { motion } from "framer-motion";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="w-1/3 flex justify-start items-center">
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 4 }}
        title="Sridhar - Portfolio"
        className="houseMontage-font relative z-10 sm:text-sm laptop:text-lg uppercase font-medium flex justify-center items-center gap-2"
      >
        <p className="text-white tracking-widest">Sridhar</p>
        <span className="text-white text-base font-sans absolute sm:-top-1 laptop:top-0 sm:-right-4 laptop:-right-5">
          &trade;
        </span>
      </motion.div>
    </Link>
  );
}

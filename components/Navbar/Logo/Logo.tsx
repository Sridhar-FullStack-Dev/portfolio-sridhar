import { motion } from "framer-motion";
import Link from "next/link";

interface LogoProps {
  isContactSection: boolean;
}

export default function Logo({ isContactSection }: LogoProps) {
  return (
    <Link href={"/"} className="w-1/3 flex justify-start items-center">
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 4 }}
        title="Sridhar - Portfolio"
        className="houseMontage-font relative z-10 text-lg uppercase font-medium flex justify-center items-center gap-2"
      >
        <p
          className={`tracking-widest ${
            isContactSection ? "text-black" : "text-white"
          } `}
        >
          Sridhar
        </p>
        <span
          className={`text-base font-sans absolute top-0 -right-5 ${
            isContactSection ? "text-black" : "text-white"
          }`}
        >
          &trade;
        </span>
      </motion.div>
    </Link>
  );
}

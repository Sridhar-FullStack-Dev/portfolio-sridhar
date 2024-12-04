import { BorderBeam } from "@/components/ui/border-beam";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface LogoProps {
  isMenusOpen: boolean;
  setIsMenusOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Logo({ isMenusOpen, setIsMenusOpen }: LogoProps) {
  return (
    <Link onClick={() => setIsMenusOpen(!isMenusOpen)} href={"/"}>
      <motion.div
        initial={{ opacity: 0, x: "-50px" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 3.5 }}
        title="Sridhar - Portfolio"
        className="houseMontage-font tracking-wide text-3xl relative uppercase flex justify-center items-center gap-2"
      >
        <div className="relative w-10 h-10 overflow-hidden rounded-full">
          <Image
            src={"/logo.png"}
            alt="Sridhar"
            height={50}
            width={50}
            priority={true}
            className="w-10 h-10 rounded-full object-cover"
          />
          <BorderBeam size={20} duration={10} delay={9} />
        </div>

        <p className="mt-1 tracking-widest">Sridhar</p>
      </motion.div>
    </Link>
  );
}

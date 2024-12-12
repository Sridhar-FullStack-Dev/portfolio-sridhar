import { motion } from "framer-motion";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface LogoProps {
  isMenusOpen: boolean;
  setIsMenusOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Logo({ isMenusOpen, setIsMenusOpen }: LogoProps) {
  const [isContactSection, setIsContactSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        setIsContactSection(rect.top <= 0 && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link onClick={() => setIsMenusOpen(!isMenusOpen)} href={"/"}>
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 4 }}
        title="Sridhar - Portfolio"
        className="houseMontage-font relative z-10 tracking-wide text-3xl uppercase flex justify-center items-center gap-2"
      >
        <p
          className={`mt-1 tracking-widest ${
            isContactSection ? "text-black" : ""
          }`}
        >
          Sridhar
        </p>
        <span
          className={`text-base font-sans absolute top-0 -right-5 ${
            isContactSection ? "text-black" : ""
          }`}
        >
          &trade;
        </span>
      </motion.div>
    </Link>
  );
}

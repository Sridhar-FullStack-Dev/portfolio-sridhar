"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo/Logo";
import Menus from "./Menus/Menus";
import Pricing from "./Pricing/Pricing";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", () => {
    const footer = document.querySelector(".footer");
    if (footer) {
      const footerTop = footer.getBoundingClientRect().top;
      setHidden(footerTop <= window.innerHeight);
    }
  });

  return (
    <motion.div
      className="fixed top-0 w-full flex justify-between items-center sm:px-4 laptop:px-10 sm:py-2 laptop:py-1.5 border-b-2 border-alt-white bg-transparent backdrop-blur-sm z-[99]"
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <Logo />

      <div className="w-1/3 flex justify-end items-center gap-4">
        <Pricing />
      </div>
    </motion.div>
  );
}

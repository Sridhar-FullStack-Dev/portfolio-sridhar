"use client";
import Logo from "./Logo/Logo";
import Menus from "./Menus/Menus";
import More from "./More/More";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

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
      className="fixed top-0 w-full flex justify-between items-center px-10 py-1.5 border-b-2 border-alt-white bg-transparent backdrop-blur-sm overflow-hidden z-[99]"
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <Logo />
      <Menus />
      <More />
    </motion.div>
  );
}

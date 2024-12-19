"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo/Logo";
import Menus from "./Menus/Menus";
import More from "./More/More";

export default function Navbar() {
  const [isContactSection, setIsContactSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contacts");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        setIsContactSection(rect.top <= 0 && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full flex justify-between items-center px-10 py-1.5 z-10 border-b-2 border-alt-white bg-transparent backdrop-blur-sm overflow-hidden">
      <Logo isContactSection={isContactSection} />
      <Menus isContactSection={isContactSection} />
      <More isContactSection={isContactSection} />
    </div>
  );
}

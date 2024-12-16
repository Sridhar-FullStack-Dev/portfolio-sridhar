"use client";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import CollaborateBtn from "./CollaborateBtn/CollaborateBtn";
import Logo from "./Logo/Logo";
import Menus from "./Menus/Menus";

export default function Navbar() {
  const asteriskRef = useRef(null);

  useEffect(() => {
    gsap.to(asteriskRef.current, {
      rotation: 360,
      duration: 4,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  const [isMenusOpen, setIsMenusOpen] = useState<boolean>(false);

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
    <div className="fixed top-10 w-full flex justify-between items-center px-10 z-10">
      <Logo isMenusOpen={isMenusOpen} setIsMenusOpen={setIsMenusOpen} isContactSection={isContactSection} />
      <Menus isMenusOpen={isMenusOpen} setIsMenusOpen={setIsMenusOpen} isContactSection={isContactSection} />
      <CollaborateBtn />
    </div>
  );
}

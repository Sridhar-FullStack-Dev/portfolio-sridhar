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

  return (
    <div className="fixed top-10 w-full flex justify-between items-center px-10 z-10">
      <Logo isMenusOpen={isMenusOpen} setIsMenusOpen={setIsMenusOpen} />
      <Menus isMenusOpen={isMenusOpen} setIsMenusOpen={setIsMenusOpen} />
      <CollaborateBtn />
    </div>
  );
}

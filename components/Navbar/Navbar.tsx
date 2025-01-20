"use client";
import Logo from "./Logo/Logo";
import Menus from "./Menus/Menus";
import More from "./More/More";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full flex justify-between items-center px-10 py-1.5 border-b-2 border-alt-white bg-transparent backdrop-blur-sm overflow-hidden z-[99]">
      <Logo />
      <Menus />
      <More />
    </div>
  );
}

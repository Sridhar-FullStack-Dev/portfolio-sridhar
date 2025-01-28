import { useState } from "react";
import { VscMenu } from "react-icons/vsc";

export default function MobileMenus() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="laptop:hidden">
      <div onClick={() => setIsOpen(!isOpen)}>
        <VscMenu />
      </div>

      {isOpen && (
        <div className="fixed top-0 right-0 h-1/2 w-screen bg-white">
          <div className="flex flex-col justify-center items-center gap-4 h-full">
            <span>Home</span>
            <span>About</span>
            <span>Projects</span>
            <span>Contact</span>
          </div>
        </div>
      )}
    </div>
  );
}

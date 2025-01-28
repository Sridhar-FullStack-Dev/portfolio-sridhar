import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Burger from "./Burger/Burger";
import Stairs from "./Stairs/Stairs";
import Menu from "./Menu/Menu";

export default function Menus() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="h-screen w-screen fixed top-0 right-0 z-50">
      <Burger
        openMenu={() => {
          setMenuIsOpen(true);
        }}
      />
      <AnimatePresence mode="wait">
        {menuIsOpen && (
          <>
            <Stairs />
            <Menu
              closeMenu={() => {
                setMenuIsOpen(false);
              }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

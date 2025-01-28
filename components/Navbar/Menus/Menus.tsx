import { menuItem } from "@/lib/const";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import Link from "next/link";

export default function Menus() {
  const lenis = useLenis();
  return (
    <div className="sm:hidden laptop:flex justify-center items-center gap-8 text-sm milker-font tracking-wider w-1/3">
      {menuItem.map((menu, menuIndex) => (
        <motion.div key={menuIndex} className="w-fit">
          <Link
            onClick={() => {
              lenis?.scrollTo(`${menu.href}`, { lerp: 0.02 });
            }}
            href={menu.href}
          >
            <span className="text-white">{menu.name}</span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}



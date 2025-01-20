import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import Link from "next/link";

interface MenusProps {
  isContactSection: boolean;
}

export default function Menus({ isContactSection }: MenusProps) {
  const lenis = useLenis();
  return (
    <div className="flex justify-center items-center gap-8 text-sm milker-font tracking-wider w-1/3">
      {menuItem.map((menu, menuIndex) => (
        <motion.div key={menuIndex} className="w-fit">
          <Link
            onClick={() => {
              lenis?.scrollTo(`${menu.href}`, { lerp: 0.02 });
            }}
            href={menu.href}
          >
            <span
              className={`${isContactSection ? "text-alt-black" : "text-alt-white"}`}
            >
              {menu.name}
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

interface MenuItem {
  href: string;
  name: string;
}

const menuItem: MenuItem[] = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "#about",
    name: "About",
  },
  {
    href: "#services",
    name: "Services",
  },
  {
    href: "#projects",
    name: "Projects",
  },
  {
    href: "#testimonials",
    name: "Testimonials",
  },
  {
    href: "#contacts",
    name: "Contacts",
  },
];

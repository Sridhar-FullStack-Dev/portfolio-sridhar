import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Dispatch,
  SetStateAction,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useLenis } from "lenis/react";

interface MenusProps {
  isMenusOpen: boolean;
  isContactSection: boolean;
  setIsMenusOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Menus({
  isMenusOpen,
  setIsMenusOpen,
  isContactSection,
}: MenusProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setAudio(new Audio("/audio/audio-2.mp3"));
  }, []);

  const playHoverSound = useCallback(() => {
    if (audio) {
      audio.volume = 0.2;
      audio.currentTime = 0;
      audio.play();
    }
  }, [audio]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    playHoverSound();
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const lenis = useLenis();
  return (
    <AnimatePresence mode="wait">
      {isMenusOpen && (
        <div className="fixed left-0 top-20 pl-10 pt-10 h-screen backdrop-blur-sm houseMontage-font z-10">
          <div className="flex flex-col gap-8 text-8xl font-medium">
            {menuItem.map((menu, menuIndex) => (
              <motion.div
                initial={{ x: "-120%" }}
                animate={{ x: 0 }}
                exit={{ x: "-120%" }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                  delay: 0.1 * menuIndex,
                }}
                key={menuIndex}
                onMouseEnter={() => handleMouseEnter(menuIndex)}
                onMouseLeave={handleMouseLeave}
                whileHover={{
                  scale: 1.1,
                  originX: 0,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="w-fit"
              >
                <Link
                  onClick={() => {
                    setIsMenusOpen(!isMenusOpen);
                    lenis?.scrollTo(`${menu.href}`, { lerp: 0.02 });
                  }}
                  href={menu.href}
                >
                  <motion.span
                    animate={{
                      scale: hoveredIndex === menuIndex ? 1.1 : 1,
                      opacity: hoveredIndex === menuIndex ? 1 : 0.2,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`${isContactSection ? "text-black" : "text-white"}`}
                  >
                    {menu.name}
                  </motion.span>
                </Link>

                {hoveredIndex === menuIndex && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    className="h-[1px] bg-white"
                  ></motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </AnimatePresence>
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
    href: "#contacts",
    name: "Contacts",
  },
];

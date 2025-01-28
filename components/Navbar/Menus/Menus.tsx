import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { menuItem } from "@/lib/const";
import Link from "next/link";
import { useLenis } from "lenis/react";

export default function Menus() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const menuRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const menuItemsRef = useRef<HTMLDivElement[]>([]);
  const lenis = useLenis();

  useEffect(() => {
    const menu = menuRef.current;
    const menuItems = menuItemsRef.current;
    const leftPanel = leftPanelRef.current;
    const rightPanel = rightPanelRef.current;

    if (isOpen) {
      setIsAnimating(true);

      const tl = gsap.timeline();

      tl.fromTo(
        [leftPanel, rightPanel],
        {
          scaleX: 0,
          backgroundColor: "#000000",
        },
        {
          scaleX: 1,
          backgroundColor: "#1a1a1a",
          duration: 0.8,
          ease: "power4.inOut",
          transformOrigin: (index) =>
            index === 0 ? "right center" : "left center",
          stagger: 0.1,
        }
      ).fromTo(
        menuItems,
        {
          y: 50,
          opacity: 0,
          rotateX: -40,
          color: "#ffffff",
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          color: "#e6e6e6",
          duration: 0.6,
          stagger: 0.08,
          ease: "power4.out",
        },
        "-=0.4"
      );
    } else if (menu && menuItems.length) {
      const tl = gsap.timeline({
        onComplete: () => setIsAnimating(false),
      });

      tl.to(menuItems, {
        y: -50,
        opacity: 0,
        rotateX: 40,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.in",
      }).to([leftPanel, rightPanel], {
        scaleX: 0,
        backgroundColor: "#000000",
        duration: 0.6,
        ease: "power4.inOut",
        transformOrigin: (index) =>
          index === 0 ? "left center" : "right center",
        stagger: 0.1,
      });
    }
  }, [isOpen]);

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mix-blend-difference fixed right-6 top-6 z-50 w-8 h-8 flex items-center justify-center"
      >
        <div className="relative w-6 h-6">
          <span
            className={`absolute left-0 top-1/2 w-full h-[2px] bg-white transform transition-transform duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 w-full h-[2px] bg-white transform transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 w-full h-[2px] bg-white transform transition-transform duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </div>
      </button>

      {(isOpen || isAnimating) && (
        <div
          ref={menuRef}
          className="fixed top-0 left-0 w-screen h-screen z-40"
        >
          <div ref={leftPanelRef} className="absolute left-0 w-1/2 h-screen" />
          <div
            ref={rightPanelRef}
            className="absolute right-0 w-1/2 h-screen"
          />

          <div className="relative z-50 flex flex-col justify-center items-center h-screen">
            {menuItem.map((menu, menuIndex) => (
              <Link
                key={menu.name}
                href={menu.href}
                ref={(el) => {
                  if (el)
                    menuItemsRef.current[menuIndex] =
                      el as any as HTMLDivElement;
                }}
                className="text-2xl font-medium my-3 hover:text-primary transition-colors relative overflow-hidden group"
                onClick={() => {
                  setIsOpen(false);
                  lenis?.scrollTo(`${menu.href}`, { lerp: 0.02 });
                }}
              >
                <span className="block group-hover:translate-y-full transition-transform duration-300">
                  {menu.name}
                </span>
                <span className="absolute top-0 left-0 block -translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-primary">
                  {menu.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

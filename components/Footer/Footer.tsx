import Link from "next/link";
import { menuItem } from "../Navbar/Menus/Menus";
import FooterLogo from "./FooterMenu/FooterLogo";
import FooterMenu from "./FooterMenu/FooterMenu";
import { useLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  const lenis = useLenis();
  const menuRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    menuRefs.current.forEach((menuItem) => {
      if (!menuItem) return;

      const text = menuItem.querySelector(".text-original");
      const textClone = menuItem.querySelector(".text-clone");

      const tl = gsap.timeline({ paused: true });
      tl.to(text, { yPercent: -100, duration: 0.4, ease: "power2.inOut" }).to(
        textClone,
        { yPercent: -100, duration: 0.4, ease: "power2.inOut" },
        0
      );

      menuItem.addEventListener("mouseenter", () => tl.play());
      menuItem.addEventListener("mouseleave", () => tl.reverse());
    });
  }, []);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    menuRefs.current[index] = el;
  };

  return (
    <footer
      className="relative h-[800px] footer"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[800px] sticky top-[calc(100vh-800px)]">
          <div className="footerBg-webp text-white py-8 px-12 h-full w-full flex flex-col justify-between relative">
            <div className="text-sm flex justify-between items-start">
              <div></div>
              <div></div>
              <div>
                <ul className="font-medium space-y-6">
                  {menuItem.map((menu, index) => (
                    <li key={index}>
                      <Link
                        onClick={() => {
                          lenis?.scrollTo(`${menu.href}`, { lerp: 0.02 });
                        }}
                        href={menu.href}
                      >
                        <div
                          ref={(el) => setRef(el, index)}
                          className="menu-item-container h-8 overflow-hidden cursor-pointer"
                        >
                          <div className="text-original">{menu.name}</div>
                          <div className="text-clone absolute top-full">
                            {menu.name}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <FooterLogo />
            <FooterMenu />
          </div>
        </div>
      </div>
    </footer>
  );
}

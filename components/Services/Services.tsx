"use client";
import { useEffect, useRef } from "react";
import { VelocityScroll } from "../ui/scroll-based-velocity";
import LocomotiveScroll, { ILocomotiveScrollOptions } from "locomotive-scroll";

export default function Services() {
  const servicesLocoRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]") as HTMLElement,
      smooth: true,
    } as ILocomotiveScrollOptions);

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div
      ref={servicesLocoRef}
      id="services"
      className="mt-64"
      data-scroll-container
    >
      <VelocityScroll
        text="✦ Services"
        default_velocity={3}
        className="text-4xl milker-font py-4 bg-alt-white text-alt-black"
      />
    </div>
  );
}

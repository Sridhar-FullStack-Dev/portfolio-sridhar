import { useEffect, useRef } from "react";
import LocomotiveScroll, { ILocomotiveScrollOptions } from "locomotive-scroll";
import { VelocityScroll } from "../ui/scroll-based-velocity";
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
    <div id="services" ref={servicesLocoRef} className="mt-8">
      <VelocityScroll
        text="✦ Services"
        default_velocity={3}
        className="text-4xl milker-font py-4 bg-alt-white text-alt-black"
      />
    </div>
  );
}

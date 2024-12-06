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
    <div ref={servicesLocoRef}>
      {/* <div data-sccroll data-scroll-speed="1">
        <VelocityScroll
          text="SERVICES"
          default_velocity={1}
          className="text-center text-4xl font-bold tracking-[-0.02em] dark:text-white md:text-7xl md:leading-[5rem]"
        />
      </div> */}
    </div>
  );
}

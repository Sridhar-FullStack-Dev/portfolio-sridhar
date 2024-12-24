import LocomotiveScroll, { ILocomotiveScrollOptions } from "locomotive-scroll";
import { useEffect, useRef } from "react";
import ParallaxSection from "./ParallaxSection/ParallaxSection";
import QuoteSection from "./QuoteSection/QuoteSection";

export default function AboutScroll() {
  const aboutLocoRef = useRef<HTMLHeadingElement>(null);

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
    <div ref={aboutLocoRef} data-scroll-container className="px-32">
      <ParallaxSection />
      <QuoteSection />
    </div>
  );
}

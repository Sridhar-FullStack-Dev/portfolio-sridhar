import Image from "next/image";
import { useEffect, useRef } from "react";
import LocomotiveScroll, { ILocomotiveScrollOptions } from "locomotive-scroll";
import ParallaxSection from "./ParallaxSection/ParallaxSection";
const TOTAL_IMAGES = 10;

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

  const imageGrid = Array.from(
    { length: TOTAL_IMAGES },
    (_, index) => index + 1
  );

  return (
    <div ref={aboutLocoRef} data-scroll-container className="px-32">
      <ParallaxSection />

      <div className="grid grid-cols-5 relative h-screen">
        <h1 className="text-[19rem] tracking-wide milker-font font-bold text-center uppercase w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-75">
          dreams
        </h1>

        {imageGrid.map((index) => (
          <Image
            key={index}
            src={`/About/${index}.jpg`}
            alt=""
            height={300}
            width={300}
            className="w-80"
          />
        ))}
      </div>
    </div>
  );
}

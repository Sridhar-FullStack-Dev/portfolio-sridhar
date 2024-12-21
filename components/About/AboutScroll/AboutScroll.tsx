import Image from "next/image";
import { useEffect, useRef } from "react";
import LocomotiveScroll, { ILocomotiveScrollOptions } from "locomotive-scroll";

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
      <div className="flex justify-between items-center relative">
        <div className="relative">
          <div data-scroll data-scroll-speed="0.2">
            <Image
              src={"/About/1.jpg"}
              alt=""
              height={400}
              width={400}
              className="w-96"
            />
          </div>

          <div
            data-scroll
            data-scroll-speed="0.3"
            className="absolute top-1/2 -left-10 text-8xl"
          >
            Mission
          </div>
        </div>
      </div>
    </div>
  );
}

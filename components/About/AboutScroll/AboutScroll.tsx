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
        <div data-scroll data-scroll-speed="0.2" className="relative w-1/2">
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
          className="text-8xl absolute -left-20 top-1/2 pl-4"
        >
          <h1>Mission</h1>
        </div>

        <div className="relative w-1/2 mt-64">
          <div data-scroll data-scroll-speed="0.3">
            <Image
              src={"/About/2.jpg"}
              alt=""
              height={400}
              width={400}
              className="w-96"
            />
          </div>

          <div
            data-scroll
            data-scroll-speed="0.4"
            className="text-8xl absolute left-[20%] bottom-72 pl-4"
          >
            <h1>Vision</h1>
          </div>
        </div>

        <div></div>
      </div>

      <div className="flex justify-end items-center"></div>

      <div className="flex justify-start items-center">
        <div data-scroll data-scroll-speed="0.4" className="relative">
          <Image
            src={"/About/3.jpg"}
            alt=""
            height={400}
            width={400}
            className="w-96"
          />
          <h1
            data-scroll
            data-scroll-speed="0.5"
            className="text-8xl absolute right-1/2 top-1/2 pl-4"
          >
            Vision
          </h1>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { useEffect, useRef } from "react";
import LocomotiveScroll, { ILocomotiveScrollOptions } from "locomotive-scroll";
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
      <div className="flex justify-between items-center relative">
        <div className="relative w-1/3">
          <div data-scroll data-scroll-speed="0.2">
            <Image
              src={"/About/1.jpg"}
              alt=""
              height={400}
              width={400}
              className="w-96"
            />

            <p className="font-sans text-alt-white opacity-70 pt-4 text-xs w-96 text-justify">
              To deliver innovative, user-friendly online solutions that empower
              individuals and businesses, including those without technical
              expertise, to thrive in the digital landscape.
            </p>
          </div>

          <div
            data-scroll
            data-scroll-speed="0.3"
            className="absolute top-1/2 -left-20 text-8xl"
          >
            Mission
          </div>
        </div>

        <div className="relative mt-32 w-1/3">
          <div data-scroll data-scroll-speed="0.4">
            <Image
              src={"/About/2.jpg"}
              alt=""
              height={400}
              width={400}
              className="w-96"
            />

            <p className="font-sans text-alt-white opacity-70 pt-4 text-xs w-96 text-justify">
              To create a digital ecosystem where every individual and business,
              regardless of their background, can seamlessly access and benefit
              from online services to achieve growth and success.
            </p>
          </div>

          <div
            data-scroll
            data-scroll-speed="0.5"
            className="absolute top-1/2 -left-20 text-8xl"
          >
            Vision
          </div>
        </div>

        <div className="relative mt-64 w-1/3">
          <div data-scroll data-scroll-speed="0.6">
            <Image
              src={"/About/3.jpg"}
              alt=""
              height={400}
              width={400}
              className="w-96"
            />

            <p className="font-sans text-alt-white opacity-70 pt-4 text-xs w-96 text-justify">
              To simplify digital adoption for everyone, enabling businesses of
              all sizes to enhance their online presence, streamline operations,
              and achieve sustainable growth.
            </p>
          </div>

          <div
            data-scroll
            data-scroll-speed="0.7"
            className="absolute top-1/2 -left-20 text-8xl"
          >
            Goal
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 relative h-screen">
        <h1 className="text-[20rem] text-center uppercase w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-75">
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

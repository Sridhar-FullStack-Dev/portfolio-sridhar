import gsap from "gsap";
import LocomotiveScroll, { ILocomotiveScrollOptions } from "locomotive-scroll";
import Image from "next/image";
import { useEffect, useRef } from "react";

const TOTAL_IMAGES = 10;
export default function QuoteSection() {
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const imageGrid = Array.from(
    { length: TOTAL_IMAGES },
    (_, index) => index + 1
  );
  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        scale: 0.8,
        y: 100,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]") as HTMLElement,
      smooth: true,
    } as ILocomotiveScrollOptions);

    imagesRef.current.forEach((image, index) => {
      gsap.fromTo(
        image,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2, // Stagger effect
        }
      );
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div className="grid grid-cols-5 relative h-screen">
      <h1
        ref={headingRef}
        className="text-[7rem] leading-none z-10 tracking-wide milker-font font-bold text-center uppercase w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        The best way to predict the future is to create it
      </h1>

      {imageGrid.map((index) => (
        <Image
          key={`about-image-${index}`}
          ref={(el: any) => (imagesRef.current[index - 1] = el)}
          src={`/About/${index}.jpg`}
          alt={`About Image ${index}`}
          height={300}
          width={300}
          className="w-80 opacity-0"
        />
      ))}
    </div>
  );
}

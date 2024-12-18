import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { VelocityScroll } from "../ui/scroll-based-velocity-2";

export default function Footer() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, {
      types: "chars",
      absolute: false,
    });

    gsap.fromTo(
      split.chars,
      {
        y: 100,
        opacity: 0,
        rotationX: -90,
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 1,
        stagger: 0.02,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => split.revert();
  }, []);

  return (
    <div className="relative h-screen">
      <h1
        ref={textRef}
        className="milker-font text-8xl uppercase perspective-1000"
      >
        sridhar
      </h1>
      <VelocityScroll
        text="❃ Footer"
        default_velocity={3}
        className="text-4xl milker-font py-4 bg-alt-white text-alt-black"
      />
    </div>
  );
}

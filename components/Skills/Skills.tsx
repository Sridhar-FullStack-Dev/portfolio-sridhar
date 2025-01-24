import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

export function Skills() {
  const skillsTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!skillsTextRef.current) return;

    const split = new SplitType(skillsTextRef.current, {
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
          trigger: skillsTextRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => split.revert();
  }, []);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-alt-black mt-20 mb-52">
      <div className="flex justify-start items-center w-full pl-16 relative">
        <h1
          ref={skillsTextRef}
          className="milker-font text-left text-8xl uppercase perspective-1000 text-alt-white"
        >
          Skills
        </h1>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-alt-black"></div>
      </div>
    </div>
  );
}

import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import Marquee from "../ui/marquee";
import { RetroGrid } from "../ui/retro-grid";
import { SkillCardOne } from "./SkillsCard/SkillsCardOne";
import { SkillCardTwo } from "./SkillsCard/SkillsCardTwo";

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
      <h1
        ref={skillsTextRef}
        className="milker-font text-8xl uppercase perspective-1000 text-alt-white"
      >
        Skills
      </h1>
      <Marquee className="[--duration:50s] mt-8 relative z-20">
        {Array.from({ length: 3 }).map((_, index) => (
          <SkillCardOne key={index} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:50s] relative z-20">
        {Array.from({ length: 3 }).map((_, index) => (
          <SkillCardTwo key={index} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-alt-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-alt-black"></div>

      <RetroGrid />
    </div>
  );
}

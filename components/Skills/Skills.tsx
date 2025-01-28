import { skills } from "@/lib/const";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

export function Skills() {
  const skillsTextRef = useRef<HTMLHeadingElement>(null);
  const skillsContainerRef = useRef<HTMLDivElement>(null);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Text animation
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

  // Skills animation
  useEffect(() => {
    const skillCards = skillsContainerRef.current?.children;
    if (!skillCards) return;

    gsap.fromTo(
      skillCards,
      {
        y: 100,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skillsContainerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  // Progress animation
  useEffect(() => {
    progressRefs.current.forEach((progressBar, index) => {
      if (!progressBar) return;

      gsap.fromTo(
        progressBar,
        {
          width: "0%",
        },
        {
          width: `${skills[index].level}%`,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: progressBar,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative bg-alt-black text-alt-white mt-20 mb-52 w-screen overflow-hidden">
      <div className="pl-16 relative">
        <h1
          ref={skillsTextRef}
          className="milker-font text-left text-8xl uppercase perspective-1000"
        >
          Skills
        </h1>
      </div>

      <div
        ref={skillsContainerRef}
        className="px-16 mt-8 grid grid-cols-4 gap-4"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-4 px-2 gap-4 h-fit w-auto overflow-hidden border-2 border-gray-900 rounded-2xl"
          >
            <skill.svgElement />

            <div className="w-full">
              <p className="font-medium text-lg capitalize tracking-wider font-sans">
                {skill.skill}
              </p>

              <div className="flex justify-start items-center gap-4">
                <div className="bg-gray-900 w-3/4 rounded-full">
                  <div
                    ref={(el) => {
                      progressRefs.current[index] = el;
                    }}
                    className="h-1 bg-alt-white rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="font-sans">{skill.level} %</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

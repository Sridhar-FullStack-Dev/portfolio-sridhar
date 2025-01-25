import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import FirebaseSVG from "./SVGs/Firebase";
import NextjsSVG from "./SVGs/NextJS";
import ReactjsSVG from "./SVGs/ReactJS";
import TypescriptSVG from "./SVGs/Typescript";
import TailwindSvg from "./SVGs/TailwindCSS";
import NodeJsSVG from "./SVGs/NodeJS";
import MongodbSVG from "./SVGs/MongoDB";
import GithubSVG from "./SVGs/Github";
import AWSSVG from "./SVGs/AWS";

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
    <div className="relative bg-alt-black text-alt-white mt-20 mb-52">
      <div className="pl-16 relative">
        <h1
          ref={skillsTextRef}
          className="milker-font text-left text-8xl uppercase perspective-1000"
        >
          Skills
        </h1>
      </div>

      <div className="px-16 mt-8 grid grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-4 px-2 gap-4 h-fit w-auto overflow-hidden border-2 border-gray-400 rounded-xl"
          >
            {skill.svgElement}

            <div className="w-full">
              <p className="font-medium text-lg capitalize tracking-wider sarcolenta-font ">
                {skill.skill}
              </p>

              <div className="flex justify-start items-center gap-4">
                <div className="bg-gray-900 w-3/4 rounded-full">
                  <div
                    className="h-2 bg-alt-white rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="font-sans">{skill.level} %</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-alt-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-alt-black"></div>
    </div>
  );
}

interface Skills {
  skill: string;
  level: number | string;
  svgElement: JSX.Element;
}

const skills: Skills[] = [
  { skill: "Nextjs", level: 95, svgElement: <NextjsSVG /> },
  { skill: "Firebase", level: 64, svgElement: <FirebaseSVG /> },
  {
    skill: "Typescript",
    level: 80,
    svgElement: <TypescriptSVG />,
  },
  { skill: "Reactjs", level: 70, svgElement: <ReactjsSVG /> },
  {
    skill: "Tailwind css",
    level: 80,
    svgElement: <TailwindSvg />,
  },
  { skill: "Nodejs", level: 55, svgElement: <NodeJsSVG /> },
  { skill: "Mongo DB", level: 50, svgElement: <MongodbSVG /> },
  { skill: "Github", level: 95, svgElement: <GithubSVG /> },
  { skill: "AWS", level: 60, svgElement: <AWSSVG /> },
];

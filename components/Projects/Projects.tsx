import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import ProjectsContent from "./ProjectsContent/ProjectsContent";

export default function Projects() {
  const ProjectsTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ProjectsTextRef.current) return;

    const split = new SplitType(ProjectsTextRef.current, {
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
          trigger: ProjectsTextRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => split.revert();
  }, []);

  return (
    <div id="projects" className="text-alt-white houseMontage-font">
      <h1
        ref={ProjectsTextRef}
        className="milker-font text-8xl uppercase perspective-1000 text-alt-white pl-16"
      >
        featured projects
      </h1>

      <ProjectsContent />
    </div>
  );
}

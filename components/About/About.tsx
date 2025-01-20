import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import AboutScroll from "./AboutScroll/AboutScroll";

export default function About() {
  const aboutTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!aboutTextRef.current) return;

    const split = new SplitType(aboutTextRef.current, {
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
          trigger: aboutTextRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => split.revert();
  }, []);

  return (
    <div id="about" className="text-alt-white houseMontage-font">
      <h1
        ref={aboutTextRef}
        className="milker-font text-8xl uppercase perspective-1000 text-alt-white pl-32"
      >
        ABOUT
      </h1>
      <AboutScroll />
    </div>
  );
}

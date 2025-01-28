import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import TestimonialsCard from "./TestimonialsCard/TestimonialsCard";

export default function Testimonials() {
  const testimonialRefs = [
    useRef<HTMLHeadingElement>(null),
    useRef<HTMLHeadingElement>(null),
    useRef<HTMLHeadingElement>(null),
  ];

  useEffect(() => {
    const splits: SplitType[] = [];

    testimonialRefs.forEach((ref) => {
      if (!ref.current) return;

      const split = new SplitType(ref.current, {
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
            trigger: ref.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      splits.push(split);
    });

    return () => splits.forEach((split) => split.revert());
  }, []);

  return (
    <div id="testimonials" className="mt-40 w-screen overflow-hidden">
      <h1
        ref={testimonialRefs[0]}
        className="milker-font tracking-wider text-8xl uppercase perspective-1000 text-alt-white pl-16"
      >
        Testimonials
      </h1>

      <div className="text-6xl pl-16 mt-8 houseMontage-font">
        <h2 ref={testimonialRefs[1]}>Don&rsquo;t take my word for it!</h2>
        <h2 ref={testimonialRefs[2]}>Hear it from my clients.</h2>
      </div>

      <TestimonialsCard />
    </div>
  );
}

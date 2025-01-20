import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

export default function Testimonials() {
  const testimonialsTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!testimonialsTextRef.current) return;

    const split = new SplitType(testimonialsTextRef.current, {
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
          trigger: testimonialsTextRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => split.revert();
  }, []);

  return (
    <div id="testimonials">
      <h1
        ref={testimonialsTextRef}
        className="milker-font text-8xl uppercase perspective-1000 text-alt-white"
      >
        Testimonials
      </h1>
    </div>
  );
}

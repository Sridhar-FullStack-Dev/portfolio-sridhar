import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import TestimonialsCard from "./TestimonialsCard/TestimonialsCard";

export default function Testimonials() {
  const testimonialsTextRef = useRef<HTMLHeadingElement>(null);
  const testimonialsTextRef2 = useRef<HTMLHeadingElement>(null);
  const testimonialsTextRef3 = useRef<HTMLHeadingElement>(null);

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
  useEffect(() => {
    if (!testimonialsTextRef2.current) return;

    const split = new SplitType(testimonialsTextRef2.current, {
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
  useEffect(() => {
    if (!testimonialsTextRef3.current) return;

    const split = new SplitType(testimonialsTextRef3.current, {
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
        className="milker-font tracking-wider text-sm uppercase perspective-1000 text-alt-white pl-16"
      >
        Testimonials
      </h1>

      <div className="text-6xl pl-16 mt-8 houseMontage-font">
        <h2 ref={testimonialsTextRef2}>Don&rsquo;t take my word for it!</h2>
        <h2 ref={testimonialsTextRef3}>Hear it from my clients.</h2>
      </div>

      <TestimonialsCard />
    </div>
  );
}

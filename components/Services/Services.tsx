'use client'
import { useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { VelocityScroll } from "../ui/scroll-based-velocity";

export default function Services() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const smoothProgress = useSpring(progress, { damping: 20 });
  return (
    <div id="services" className="mt-8">
      <VelocityScroll
        text="✦ Services"
        default_velocity={3}
        className="text-4xl milker-font py-4 bg-alt-white text-alt-black"
      />

      <div style={{ height: "500px" }}>
      </div>
    </div>
  );
}

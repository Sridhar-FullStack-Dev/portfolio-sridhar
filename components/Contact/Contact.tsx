import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Contact() {
  const container = useRef<HTMLDivElement>(null);
  const paths = useRef<SVGTextPathElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      paths.current.forEach((path, i) => {
        if (path) {
          path.setAttribute("startOffset", `${-40 + i * 40 + e * 40}%`);
        }
      });
    });
  }, []);

  return (
    <div ref={container} className="houseMontage-font tracking-wide">
      <svg className="w-full mb-40" viewBox="0 0 250 90">
        <path
          fill="none"
          id="curve"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text className="text-[6px] uppercase" style={{ fill: "white" }}>
          {[...Array(3)].map((_, i) => (
            <textPath
              key={i}
              ref={(ref) => {
                if (ref) {
                  paths.current[i] = ref;
                }
              }}
              startOffset={`${i * 40}%`}
              href="#curve"
            >
              Dont't hesitate to contact me! •
            </textPath>
          ))}
        </text>
      </svg>
    </div>
  );
}

import SVGCurve from "./SVGCurve/SVGCurve";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import ContactForm from "./ContactForm/ContactForm";

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
    <div ref={container} id="contact" className="h-full">
      <SVGCurve paths={paths} />
      <ContactForm />
    </div>
  );
}

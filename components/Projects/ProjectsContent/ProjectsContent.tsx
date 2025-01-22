import gsap from "gsap";
import Image from "next/image";
import styles from "./Home.module.css";
import { useState } from "react";

export default function ProjectsContent() {
  const [isShowMore, setIsShowMore] = useState<number | null>(0);
  const manageMouseEnter = (e: any, index: number) => {
    gsap.to(e.target, {
      top: "-2vw",
      backgroundColor: projects[index].color,
      duration: 0.3,
    });
  };

  const manageMouseLeave = (e: any) => {
    gsap.to(e.target, {
      top: "0",
      backgroundColor: "white",
      duration: 0.3,
      delay: 0.1,
    });
  };

  return (
    <div className={`${styles.container} milker-font text-alt-black`}>
      <div className={styles.projectContainer}>
        {projects.map((project, index) => {
          return (
            <div
              onMouseEnter={(e) => {
                manageMouseEnter(e, index);
                setIsShowMore(index);
              }}
              onMouseLeave={(e) => {
                manageMouseLeave(e);
              }}
              key={index}
              className="px-16 flex justify-between items-center gap-4 relative"
            >
              <p>{project.title}</p>

              <Image
                src={"/Projects/up-right-arrow.png"}
                alt="click"
                height={64}
                width={64}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface Project {
  title: string;
  color: string;
}

const projects: Project[] = [
  { title: "maria cars", color: "#ADD8E6" },
  { title: "Powder Blue", color: "#B0E0E6" },
  { title: "Sky Blue", color: "#87CEEB" },
  { title: "Light Steel Blue", color: "#B0C4DE" },
  { title: "Mint Cream", color: "#F5FFFA" },
  { title: "Lavender", color: "#E6E6FA" },
  { title: "Beige", color: "#F5F5DC" },
  { title: "Light Green", color: "#90EE90" },
  { title: "Honeydew", color: "#F0FFF0" },
];

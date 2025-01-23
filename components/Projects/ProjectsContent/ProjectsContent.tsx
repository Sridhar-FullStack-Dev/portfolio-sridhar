import gsap from "gsap";
import Image from "next/image";
import styles from "./Home.module.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/const";
import Link from "next/link";

export default function ProjectsContent() {
  const [isShowMore, setIsShowMore] = useState<number | null>(null);
  const manageMouseEnter = (e: any, index: number) => {
    gsap.to(e.target, {
      top: "-2vw",
      backgroundColor: projects[index].color,
      duration: 0.3,
    });
  };

  const manageMouseLeave = (e: any, index: number) => {
    gsap.to(e.target, {
      top: "0",
      backgroundColor: "white",
      duration: 0.3,
      delay: 0.1,
    });
  };

  return (
    <div className={`${styles.container} milker-font text-alt-black mt-8`}>
      <div className={styles.projectContainer}>
        {projects.map((project, index) => {
          return (
            <div
              onMouseEnter={(e) => {
                manageMouseEnter(e, index);
                setIsShowMore(index);
              }}
              onMouseLeave={(e) => {
                manageMouseLeave(e, index);
                setIsShowMore(null);
              }}
              key={index}
              className="px-16 flex justify-between items-center gap-4 relative"
            >
              <p>{project.title}</p>

              <Link target="_blank" href={project.link || "/"}>
                <AnimatePresence mode="wait">
                  {isShowMore === index && (
                    <motion.span
                      initial={{
                        scale: 0,
                        rotate: -180,
                        opacity: 0,
                      }}
                      animate={{
                        scale: 1,
                        rotate: 0,
                        opacity: 1,
                      }}
                      exit={{
                        scale: 0,
                        rotate: 180,
                        opacity: 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        mass: 1,
                        delay: 0.3,
                      }}
                      className="h-32 w-32 !bg-white !absolute -top-10 right-40 cursor-pointer rounded-full overflow-hidden hover:shadow-lg transition-shadow"
                      style={{
                        border: `1px solid black`,
                        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                      }}
                    >
                      <motion.span
                        className="w-full h-full flex justify-center items-center p-4"
                        whileHover={{
                          scale: [1, 1.2, 1.1],
                          rotate: [0, -10, 45],
                          transition: {
                            duration: 0.4,
                            ease: [0.25, 0.1, 0.25, 1],
                            scale: {
                              repeat: Infinity,
                              repeatType: "reverse",
                              duration: 1,
                            },
                          },
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                      >
                        <Image
                          src={"/Projects/up-right-arrow.png"}
                          alt="click"
                          height={512}
                          width={512}
                          className="w-12 h-12"
                        />
                      </motion.span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

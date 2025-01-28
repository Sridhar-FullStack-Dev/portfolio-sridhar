import { menuItem } from "@/lib/const";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { mountAnim, opacity, slideLeft } from "../anim";
import Link from "./link";
import styles from "./style.module.scss";

export default function Menu({ closeMenu }: { closeMenu: () => void }) {
  return (
    <motion.div
      className={styles.menu}
      variants={opacity}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={styles.header}>
        <NextLink
          href={"tel:+919843849354"}
          className="font-sans text-lg font-medium italic text-alt-black hover:underline"
        >
          +91 9843849354
        </NextLink>
        <motion.svg
          variants={slideLeft}
          {...mountAnim}
          onClick={() => {
            closeMenu();
          }}
          width="30"
          height="30"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 1.5L67 67" stroke="#0c0c0c" />
          <path d="M66.5 1L0.999997 66.5" stroke="#0c0c0c" />
        </motion.svg>
      </div>

      <div className={styles.body}>
        {menuItem.map((el, index) => {
          return (
            <Link data={el} index={index} key={index} closeMenu={closeMenu} />
          );
        })}
      </div>
    </motion.div>
  );
}

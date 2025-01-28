import { menuItem } from "@/lib/const";
import { motion } from "framer-motion";
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
          <path d="M1.5 1.5L67 67" stroke="white" />
          <path d="M66.5 1L0.999997 66.5" stroke="white" />
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

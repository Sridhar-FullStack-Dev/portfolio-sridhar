import styles from "./style.module.scss";
import { VscMenu } from "react-icons/vsc";

export default function ({ openMenu }: { openMenu: () => void }) {
  return (
    <div
      onClick={() => {
        openMenu();
      }}
      className={styles.button}
    >
      <VscMenu />
    </div>
  );
}

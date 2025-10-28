import styles from "./_styles/page.module.css";

import MainPageImage from "@/app/_components/MainPageImage/MainPageImage";

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <MainPageImage />
      </div>
    </div>
  );
}

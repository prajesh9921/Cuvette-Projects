import React from "react";
import styles from "./GenreSelector.module.css";

export default function GenreSelector({ setGenreList, title, genreList }) {

  const handleCross = () => {
    const temp = genreList.filter(item => item !== title);
    setGenreList(temp);
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p onClick={handleCross} className={styles.cross}>
        X
      </p>
    </div>
  );
}

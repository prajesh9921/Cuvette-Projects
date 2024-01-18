import React, { useState, useEffect } from 'react';
import styles from './GenreCard.module.css';

export default function GenreCard({title, color, img, addGenre, list}) {
  const [isClicked, setIsClicked] = useState(false);

  const containerStyle = {
    backgroundColor: color,
    borderColor: isClicked ? 'yellow' : 'transparent', // Border color applied only when clicked
    borderWidth: isClicked ? 5 : 0, // Border width applied only when clicked
  };

  useEffect(() => {
    if (list.includes(title)) {
      setIsClicked(true)
    } else {
      setIsClicked(false)
    }
  }, [list, addGenre])

  const handleClick = () => {
      if (isClicked) {
        const temp = list.filter(item => item !== title);
        addGenre(temp); 
        setIsClicked(false)
      } else {
        addGenre(prev => [...prev, title]);
        setIsClicked(true)
      }
  }

  return (
    <div className={isClicked ? styles.container_clicked : styles.container} style={containerStyle} onClick={handleClick}>
        <p className={styles.title}>{title}</p>
        <img src={img} alt="Poster" className={styles.img}/>  
    </div>
  );
}

import React, { useEffect } from 'react';
import styles from './ProfileCard.module.css';
import Profile from '../../../assets/Images/profile.png';

export default function ProfileCard() {

    let userData = localStorage.getItem('userData')
    userData = JSON.parse(userData);

    let genreData = localStorage.getItem('genres')
    genreData = JSON.parse(genreData);

  return (
    <div className={styles.container}>
      <img src={Profile} alt="Profile"/>
      <div className={styles.userData}>
        <p className={styles.subText}>{userData?.name || ""}</p>
        <p className={styles.subText}>{userData?.email || ""}</p>
        <p className={styles.headText}>{userData?.username || ""}</p>
        
        <div className={styles.genreContainer}>
          {genreData.map((item) => <GenreSelector key={item} title={item}/>) }
        </div>
      </div>
    </div>
  );
}

const GenreSelector = ({title = "Prajesh"}) => {
  return (
    <div className={styles.selector}>
      {title}
    </div>
  )
}
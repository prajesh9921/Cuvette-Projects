import React, { useEffect, useState } from "react";
import Profile from "../../assets/Images/profileRound.png";
import styles from "./MoviesPage.module.css";
import { MoviesApi } from "../../api/api";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

export default function MoviesPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    fetchMoviesData();
  }, []);

  const fetchMoviesData = async () => {
    const res = await MoviesApi({ setLoading });
    setMoviesData(res);
  };

  const handleProfileClick = (profile) => {
    navigate("/home");
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h2 className={styles.title}>Super app</h2>

        <div onClick={handleProfileClick} style={{ cursor: "pointer" }}>
          <img src={Profile} alt="Profile" />
        </div>
      </div>

      <p className={styles.subText}>Entertainment according to your choice</p>

      {loading ? (
        <div className={styles.loadingContainer}>
          <ReactLoading type="spinningBubbles" color="#fff" />
        </div>
      ) : (
        <div className={styles.movieCardLayout}>
          {moviesData.map((item) => {
            return (
              <div className={styles.movieCard}>
                <img
                  className={styles.moviePoster}
                  src={item?.Poster}
                  alt="Movie Poster"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

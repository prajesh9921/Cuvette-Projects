import React, { useState } from "react";
import styles from "./GenrePage.module.css";
import GenreSelector from "../../components/Genre/GenreSelector/genreSelector";
import WarningIcon from "../../assets/Svg/warning";
import GenreCard from "../../components/Genre/GenreCard/genreCard";
import CV1 from "../../assets/Images/ci1.png";
import CV2 from "../../assets/Images/ci2.png";
import CV3 from "../../assets/Images/ci3.png";
import CV4 from "../../assets/Images/ci4.png";
import CV5 from "../../assets/Images/ci5.png";
import CV6 from "../../assets/Images/ci6.png";
import CV7 from "../../assets/Images/ci7.png";
import CV8 from "../../assets/Images/ci8.png";
import CV9 from "../../assets/Images/ci9.png";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function GenrePage() {
  const navigate = useNavigate();

  const [genreList, setGenreList] = useState([]);

  const handelNext = () => {
    if (genreList.length >= 3) {
      localStorage.setItem('genres', JSON.stringify(genreList));
      navigate("/home");
    }
  };

  return (
    <div className={styles.container}>
      {/* Left part */}
      <div className={styles.leftContainer}>
        <h2 className={styles.title}>Super app</h2>
        <h1>
          Choose your <br /> entertainment <br />
          category
        </h1>
        <div className={styles.selectorWrapper}>
          {genreList.map((item) => {
            return (
              <GenreSelector
                title={item}
                setGenreList={setGenreList}
                genreList={genreList}
              />
            );
          })}
        </div>
        {genreList.length < 3 ? (
          <p style={{ display: "flex", alignItems: "center" }}>
            <WarningIcon />{" "}
            <span className={styles.warningText}>
              Minimum 3 category required
            </span>
          </p>
        ) : null}
      </div>

      {/* Right part */}
      <div className={styles.rightContainer}>
        <div className={styles.cardsContainer}>
          <GenreCard
            color="#FF5209"
            title="Action"
            img={CV1}
            addGenre={setGenreList}
            list={genreList}
          />
          <GenreCard
            color="#D7A4FF"
            title="Drama"
            img={CV2}
            addGenre={setGenreList}
            list={genreList}
          />
          <GenreCard
            color="#148A08"
            title="Romance"
            img={CV3}
            addGenre={setGenreList}
            list={genreList}
          />
          <GenreCard
            color="#84C2FF"
            title="Thriller"
            img={CV4}
            addGenre={setGenreList}
            list={genreList}
          />
          <GenreCard
            color="#902500"
            title="Western"
            img={CV5}
            addGenre={setGenreList}
            list={genreList}
          />
          <GenreCard
            color="#7358FF"
            title="Horror"
            img={CV6}
            addGenre={setGenreList}
            list={genreList}
          />
          <GenreCard
            color="#FF4ADE"
            title="Fantasy"
            img={CV7}
            addGenre={setGenreList}
            list={genreList}
          />
          <GenreCard
            color="#E61E32"
            title="Music"
            img={CV8}
            addGenre={setGenreList}
            list={genreList}
          />
          <GenreCard
            color="#6CD061"
            title="Fiction"
            img={CV9}
            addGenre={setGenreList}
            list={genreList}
          />
        </div>
        <Button
          onPress={handelNext}
          title="Next Page"
        />
      </div>
    </div>
  );
}

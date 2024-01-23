import React from "react";
import styles from "./HomePage.module.css";
import ProfileCard from "../../components/Home/ProfileCard/ProfileCard";
import Notes from "../../components/Home/Notes/Notes";
import WeatherCard from "../../components/Home/Weather/Weather";
import TimerCard from "../../components/Home/Timer/TimerCard";
import ArticleSection from "../../components/Home/ArticleSection/ArticleSection";

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* <ProfileCard /> */}

      {/* Left Part */}
      <div className={styles.leftPart}>
        {/* Upper */}
        <div className={styles.upper}>
          <div style={{ gap: 20, display: "flex", flexDirection: "column", flex: 1 }}>
            <ProfileCard />
            <WeatherCard />
          </div>

          <Notes />
        </div>

        {/* Lower */}
        <TimerCard/>
      </div>

      {/* Right Part */}
      <ArticleSection/>
    </div>
  );
}

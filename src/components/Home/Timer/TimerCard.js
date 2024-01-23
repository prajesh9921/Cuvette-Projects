import React from "react";
import styles from "./TimerCard.module.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { UpArrow, DownArrow } from "../../../assets/Svg/upDownIndicator";

export default function TimerCard() {
  const renderTime = ({ remainingTime }) => {
    return (
      <div className="timer">
        <p className={styles.timerText}>05:08:56</p>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.timer}>
        <CountdownCircleTimer
          isPlaying
          duration={10}
          colors="#FF6A6A"
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}
          rotation="counterclockwise"
          strokeWidth={5}
          strokeLinecap="round"
          trailColor="transparent"
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TimerHands title="Hours" time="05" colonVisible={true} />
          <p style={{ fontSize: 50, marginTop: 50 }}>:</p>
          <TimerHands title="Minutes" time="09" colonVisible={true} />
          <p style={{ fontSize: 50, marginTop: 50 }}>:</p>
          <TimerHands title="Seconds" time="00" />
        </div>

        <div className={styles.startBtn}>
            <p className={styles.startBtnText}>Start</p>
        </div>
      </div>
    </div>
  );
}

const TimerHands = ({ title, time, colonVisible = false }) => {
  return (
    <div className={styles.timerHand}>
      <p className={styles.timerHandTitle}>{title}</p>
      <UpArrow onPress={() => console.log("pressed")} />
      <p className={styles.timerHandTimeText}>{time}</p>
      <DownArrow onPress={() => console.log("pressed")} />
    </div>
  );
};

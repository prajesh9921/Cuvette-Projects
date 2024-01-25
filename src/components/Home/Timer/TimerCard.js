import React, { useState } from "react";
import styles from "./TimerCard.module.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { UpArrow, DownArrow } from "../../../assets/Svg/upDownIndicator";

export default function TimerCard() {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [duration, setDuration] = useState(0);
  const [isTimerStart, setIsTimerStart] = useState(false);

  const TimeLimit = {
    hours: 23,
    minutes: 59,
    seconds: 59,
  };

  const increaseTime = (name) => {
    if (parseInt(time[name]) === TimeLimit[name]) {
      setTime((prevTime) => ({
        ...prevTime,
        [name]: "00",
      }));
    } else if (parseInt(time[name]) < TimeLimit[name]) {
      let temp = parseInt(time[name]) + 1;
      temp = temp.toString().length < 2 ? `0${temp}` : `${temp}`;
      setTime((prevTime) => ({
        ...prevTime,
        [name]: temp,
      }));
    }
  };

  const decreaseTime = (name) => {
    if (time[name] === "00") {
      setTime((prevTime) => ({
        ...prevTime,
        [name]: TimeLimit[name].toString(),
      }));
    } else if (parseInt(time[name]) > 0) {
      let temp = parseInt(time[name]) - 1;
      temp = temp.toString().length < 2 ? `0${temp}` : `${temp}`;
      setTime((prevTime) => ({
        ...prevTime,
        [name]: temp,
      }));
    }
  };

  const handleStartTimer = () => {
    const hoursInSeconds = parseInt(time.hours) * 3600;
    const minutesInSeconds = parseInt(time.minutes) * 60;
    const timeInSeconds =
      hoursInSeconds + minutesInSeconds + parseInt(time.seconds);
    setDuration(timeInSeconds);
    setIsTimerStart(true);
  };

  const handlePauseTimer = () => {
    setTime({
      hours: "00",
      minutes: "00",
      seconds: "00",
    });
    setIsTimerStart(false);
    setDuration(0);
  };

  const renderTime = ({ remainingTime }) => {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    return (
      <div className="timer">
        <p className={styles.timerText}>
          {hours.toString().length < 2 ? `0${hours}` : hours} :{" "}
          {minutes.toString().length < 2 ? `0${minutes}` : minutes} :{" "}
          {seconds.toString().length < 2 ? `0${seconds}` : seconds}
        </p>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.timer}>
        <CountdownCircleTimer
          key={isTimerStart}
          isPlaying={isTimerStart}
          duration={duration}
          colors="#FF6A6A"
          onComplete={() => {
            setIsTimerStart(false);
            setDuration(0);
            return { shouldRepeat: false, delay: 1 }}}
          rotation="counterclockwise"
          strokeWidth={5}
          strokeLinecap="round"
          trailColor="transparent"
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TimerHands
            increase={() => increaseTime("hours")}
            decrease={() => decreaseTime("hours")}
            title="Hours"
            time={time.hours}
            colonVisible={true}
          />
          <p style={{ fontSize: 50, marginTop: 50 }}>:</p>
          <TimerHands
            increase={() => increaseTime("minutes")}
            decrease={() => decreaseTime("minutes")}
            title="Minutes"
            time={time.minutes}
            colonVisible={true}
          />
          <p style={{ fontSize: 50, marginTop: 50 }}>:</p>
          <TimerHands
            increase={() => increaseTime("seconds")}
            decrease={() => decreaseTime("seconds")}
            title="Seconds"
            time={time.seconds}
          />
        </div>

        <div
          className={isTimerStart ? styles.startBtn : styles.stopBtn}
          onClick={isTimerStart ? handlePauseTimer : handleStartTimer}
        >
          <p className={styles.startBtnText}>
            {isTimerStart ? "Stop" : "Start"}
          </p>
        </div>
      </div>
    </div>
  );
}

const TimerHands = ({
  title,
  time,
  colonVisible = false,
  increase,
  decrease,
}) => {
  return (
    <div className={styles.timerHand}>
      <p className={styles.timerHandTitle}>{title}</p>
      <UpArrow onPress={increase} />
      <p className={styles.timerHandTimeText}>{time}</p>
      <DownArrow onPress={decrease} />
    </div>
  );
};

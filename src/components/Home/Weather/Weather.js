import React, {useEffect, useState} from "react";
import styles from "./Weather.module.css";
import Thermometer from "../../../assets/Svg/thermometer";
import Wind from "../../../assets/Svg/wind";
import WaterDrop from "../../../assets/Svg/waterDrop";
import { WeatherApi } from "../../../api/api";

export default function WeatherCard() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchWeatherData();
  }, [])

  const fetchWeatherData = async () => {
    const res = await WeatherApi();
    setData(res);
  }

  return (
    <div className={styles.container}>
      <div className={styles.dateTime}>
        <p className={styles.dateText}>{data?.location?.localtime}</p>
      </div>
      <div className={styles.infoDiv}>
        <div className={styles.weatherBox}>
          {/* <ThunderCloud /> */}
          <img src={data?.current?.condition?.icon} alt="" />
          <p className={styles.weatherBoxTitle}>{data?.current?.condition?.text}</p>
        </div>

        <hr className={styles.customhr}/>

        <div className={styles.temperatureBox}>
          <p className={styles.temperatureBoxTitle}>{data?.current?.temp_c}°C</p>
          <p className={styles.alignP}>
            <Thermometer />{" "}
            <span className={styles.subText}>
              {data?.current?.pressure_mb} mbar <br />
              Pressure
            </span>
          </p>
        </div>

        <hr className={styles.customhr}/>

        <div className={styles.windBox}>
          <p className={styles.alignP}>
            <Wind />{" "}
            <span className={styles.subText}>
              {data?.current?.wind_kph} km/h <br />
              Wind
            </span>
          </p>

          <p className={styles.alignP}>
            <WaterDrop />{" "}
            <span className={styles.subText}>
              {data?.current?.humidity}% <br />
              Humidiy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

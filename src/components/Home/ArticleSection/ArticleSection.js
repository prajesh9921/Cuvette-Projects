import React, { useEffect, useState } from "react";
import styles from "./ArticalSection.module.css";
import { NewsApi } from "../../../api/api";
import ReactLoading from "react-loading";
import moment from "moment";
import AppleCar from "../../../assets/Images/appleCar.jpg";

export default function ArticleSection() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!data || data.length === 0) {
      fetchNews();
    }
  }, []);

  const fetchNews = async () => {
    const res = await NewsApi({ setLoading });
    const randomNumer = Math.floor(Math.random() * (res.length || 0));
    setData(res[randomNumer]);
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <ReactLoading type="spinningBubbles" color="#fff" />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div
        style={{
          backgroundImage: `url(${data?.image_url || AppleCar})`,
          backgroundSize: "cover",
          height: "60%",
          width: "100%",
          flex: 2,
          display: "flex",
          alignItems: "end",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20, 
        }}
      >
        <div className={styles.nameDiv}>
          <p className={styles.name}>{data?.title}</p>
          <p>{moment(data?.pubDate).format("MMMM Do YYYY")} | {moment(data?.pubDate).format("h:mm a")}</p>
        </div>
      </div>

      <div className={styles.descriptionDiv}>
        <p className={styles.description}>
          {data?.description}
        </p>
      </div>
    </div>
  );
}

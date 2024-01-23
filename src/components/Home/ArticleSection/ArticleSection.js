import React, { useEffect, useState } from "react";
import styles from "./ArticalSection.module.css";
import { NewsApi } from "../../../api/api";
import ReactLoading from "react-loading";
import moment from "moment";

export default function ArticleSection() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const res = await NewsApi({ setLoading });
    setData(res[1]);
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
          backgroundImage: `url(${data?.urlToImage})`,
          backgroundSize: "cover",
          height: "60%",
          width: "100%",
          flex: 2,
          display: "flex",
          alignItems: "end",
        }}
      >
        <div className={styles.nameDiv}>
          <p className={styles.name}>{data?.title}</p>
          <p>{moment(data?.publishedAt).format("MMMM Do YYYY")} | {moment(data?.publishedAt).format("h:mm a")}</p>
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

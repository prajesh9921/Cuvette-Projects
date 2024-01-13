import React from "react";
import MusicCover from "../../assets/Images/coverImage.png";
import styles from "./Register.module.css";

export default function Register() {
  return (
    <div className={styles.container}>
      {/* Left Part */}
      <div className={styles.leftContainer}>
        <h1>
          Discover new things on <br /> Superapp
        </h1>
        <img src={MusicCover} alt="Music Cover" className={styles.coverImg} />
      </div>

      {/* Right Part */}
      <div className={styles.rightContainer}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Super app</h2>
          <p style={{textAlign: 'center', marginBottom: 50}}>Create your new account</p>

          <input type="text" className={styles.input} placeholder="Name" />
          <input type="text" className={styles.input} placeholder="UserName" />
          <input type="email" className={styles.input} placeholder="Email" />
          <input type="text" className={styles.input} placeholder="Mobile" />

          <label>
            <input type="checkbox" name="confirmation" />{" "}
            <p className={styles.checkBoxText}>
              Share my registration data with Superapp
            </p>
          </label>

          <button className={styles.signUpBtn}>SIGN UP</button>

          <p className={styles.checkBoxText}>
            {" "}
            By clicking on Sign up. you agree to Superapp{" "}
            <span style={{ color: "#72DB73" }}>
              {" "}
              Terms and Conditions of Use{" "}
            </span>
          </p>
          <p className={styles.checkBoxText}>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp{" "}
            <span style={{ color: "#72DB73" }}> Privacy Policy </span>
          </p>
        </div>
      </div>
    </div>
  );
}

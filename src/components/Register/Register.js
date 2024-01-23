import React, { useState } from "react";
import MusicCover from "../../assets/Images/coverImage.png";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    check: false,
  });
  const [error, setError] = useState(false);

  // Function to check is valid email
  const isEmailValid = (email) => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  };

  // Function to check numeric value
  const isNonNumeric = (input) => {
    const nonNumericRegex = /^[^0-9]+$/;
    return nonNumericRegex.test(input);
  };

  // Handle change
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  // Submit form function
  const handleSubmit = () => {
    let isValid = true;
  
    if (formData.name.trim().length < 10 || formData.name === "") {
      setError(true)
      isValid = false;
    }
    if (formData.username.trim().length < 5 || formData.username === "") {
      setError(true)
      isValid = false;
    }
    if (!isEmailValid(formData.email)) {
      setError(true)
      isValid = false;
    }
    if (isNonNumeric(formData.mobile) === true || formData.mobile === "") {
      setError(true)
      isValid = false;
    }
    
    if (isValid && formData.check) {
      console.log("form validation successful");
      localStorage.setItem("userData", JSON.stringify(formData));
      navigate("/genre");
      setFormData({
        name: "",
        username: "",
        email: "",
        mobile: "",
        check: false,
      });
    }
  };

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
          <p style={{ textAlign: "center", marginBottom: 50 }}>
            Create your new account
          </p>

          <input
            type="text"
            className={styles.input}
            name="name"
            placeholder="Name"
            onChange={(event) => handleChange(event)}
          />
          {error ? <p style={{color: 'red', fontSize: 12}}>Name should be of greater than 10 letters</p> : null}
          <input
            type="text"
            className={styles.input}
            name="username"
            placeholder="UserName"
            onChange={(event) => handleChange(event)}
          />
          {error ? <p style={{color: 'red', fontSize: 12}}>Name should be of greater than 5 letters.</p> : null}
          <input
            type="email"
            className={styles.input}
            name="email"
            placeholder="Email"
            onChange={(event) => handleChange(event)}
          />
          {error ? <p style={{color: 'red', fontSize: 12}}>Please enter valid email.</p> : null}
          <input
            type="text"
            className={styles.input}
            name="mobile"
            placeholder="Mobile"
            onChange={(event) => handleChange(event)}
          />
          {error ? <p style={{color: 'red', fontSize: 12}}>Please enter valid phone number.</p> : null}

          <label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.checked })
              }
              type="checkbox"
              name="check"
            />
            <p className={styles.checkBoxText}>
              Share my registration data with Superapp
            </p>
          </label>
          {error ? <p style={{color: 'red', fontSize: 12, marginBottom: 20}}>Please click the checkbox.</p> : null}

          <button className={styles.signUpBtn} onClick={handleSubmit}>
            SIGN UP
          </button>

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

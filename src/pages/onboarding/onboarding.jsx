import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import onboarding from "../../assets/tech_semester_onboarding.png";

import styles from "./onboarding.module.css";

const Onboarding = () => {
  const navigate = useNavigate();
  const registerHandler = () => {
    navigate("/register");
  };
  const loginHandler = () => {
    navigate("/login");
  };
  return (
    <Fragment>
      <div className={styles["image-container"]}>
        <img src={onboarding} alt="Onboarding" />
      </div>
      <div className={styles.message}>
        <h3 className={styles.title}>
          Welcome to one of the best Learning Platform.
        </h3>
        <p className={styles.subtitle}>
          Tech Semester has been designed and built to churn out one of the best
          developers and designers in the African Ecosystem. Ride with us on
          this wonderful journey
        </p>
      </div>
      <div className={styles.action}>
        <div className={styles.btn}>
          <button onClick={registerHandler} className={styles["register-btn"]}>
            Register
          </button>
        </div>
        <div onClick={loginHandler} className={styles.btn}>
          <button className={styles["login-btn"]}>Login</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Onboarding;

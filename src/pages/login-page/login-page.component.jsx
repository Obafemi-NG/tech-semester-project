import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

import CustomButton from "../../UI/custom-button/custom-button.ui";
import CustomInput from "../../UI/custom-input/custom-input.ui";

import styles from "./login-page.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/register");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (email.includes("@") && password.trim().length > 7) {
      setIsFormValid(true);
      console.log(email, password);
    }
    setEmail("");
    setPassword("");
  };
  return (
    <Fragment>
      <div className={styles["login-container"]}>
        <div className={styles.title}>
          <h3>Login</h3>
        </div>
        <div className={styles["sub-title"]}>
          <h5>Login to your account</h5>
          <p>
            Thank you for checking back. We are always dedicated to serving you
            the best. Please enter your Login details.
          </p>
        </div>
        <form onSubmit={submitHandler}>
          <CustomInput
            label="Username"
            type="text"
            placeholder="Email or Phone Number"
            name="username"
            handleChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <CustomInput
            label="Password"
            type="text"
            placeholder="Password"
            name="password"
            handleChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className={styles["remember-user"]}>
            <input type="checkbox" />
            <label> Remember Me</label>
          </div>
          <div className={styles.action}>
            <CustomButton>Login</CustomButton>
          </div>
        </form>
        <div className={styles.footer}>
          <p>
            Do not have an account ?{" "}
            <span onClick={handleNavigate}>Create an account</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;

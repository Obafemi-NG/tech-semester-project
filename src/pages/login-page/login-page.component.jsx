import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { userActions } from "../../store/user/user.slice";

import CustomButton from "../../UI/custom-button/custom-button.ui";
import CustomInput from "../../UI/custom-input/custom-input.ui";

import styles from "./login-page.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  // const userDetails = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/register");
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ email, password });
    dispatch(userActions.onLogin({ email, password }));
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
            value={email}
            handleChange={emailChangeHandler}
          />
          <CustomInput
            label="Password"
            type="text"
            placeholder="Password"
            name="password"
            value={password}
            handleChange={passwordChangeHandler}
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

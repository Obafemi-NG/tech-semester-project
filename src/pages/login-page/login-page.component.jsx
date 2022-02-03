import { Fragment, useState } from "react";
import styles from "./login-page.module.css";
import CustomButton from "../../UI/custom-button/custom-button.ui";
import CustomInput from "../../UI/custom-input/custom-input.ui";

const LoginPage = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setState({
      [name]: value,
    });
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
        <form>
          <CustomInput
            label="Username"
            type="text"
            placeholder="Email or Phone Number"
            name="username"
            handleChange={onChangeHandler}
            value={state.email}
          />
          <CustomInput
            label="Password"
            type="text"
            placeholder="Password"
            name="password"
            handleChange={onChangeHandler}
            value={state.password}
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
            Do not have an account ? <span>Create an account</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;

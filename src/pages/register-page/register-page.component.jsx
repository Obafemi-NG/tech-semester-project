import { Fragment, useState } from "react";

import CustomButton from "../../UI/custom-button/custom-button.ui";
import CustomInput from "../../UI/custom-input/custom-input.ui";

import styles from "./register-page.module.css";

const RegisterPage = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setState({
      [name]: value,
    });
  };

  return (
    <Fragment>
      <div className={styles["register-page"]}>
        <div className={styles["lottery-display"]}>
          <h4>Lottery Display</h4>
          <h2>A few Clicks away from creating your Lottery Display</h2>
        </div>
        <div className={styles["register-section"]}>
          <div className={styles.title}>
            <h3>Register</h3>
          </div>
          <div className={styles["sub-title"]}>
            <h5>Manage all your lottery efficiently</h5>
            <p>
              Let's get you all set up so you can verify your personal account
              and begin setting up your profile
            </p>
          </div>

          <form className={styles["form-section"]}>
            <CustomInput
              className={styles["form-input"]}
              type="text"
              label="First Name"
              handleChange={onChangeHandler}
              name="firstName"
              value={state.firstName}
            />
            <CustomInput
              className={styles["form-input"]}
              type="text"
              label="Last Name"
              handleChange={onChangeHandler}
              name="lastName"
              value={state.lastName}
            />
            <CustomInput
              className={styles["form-input"]}
              type="text"
              label="Phone Number"
              handleChange={onChangeHandler}
              name="phoneNumber"
              value={state.phoneNumber}
            />
            <CustomInput
              className={styles["form-input"]}
              type="text"
              label="Email"
              handleChange={onChangeHandler}
              name="email"
              value={state.email}
            />
            <CustomInput
              className={styles["form-input"]}
              type="text"
              label="Password"
              handleChange={onChangeHandler}
              name="password"
              value={state.password}
            />
            <CustomInput
              className={styles["form-input"]}
              type="text"
              label="Confirm Password"
              handleChange={onChangeHandler}
              name="confirmPassword"
              value={state.confirmPassword}
            />
            {/* <div className = {}>
              <input type="checkbox" />
              <label> Yes, I want to receive Lottery Display emails</label>
            </div> */}
            <CustomButton>Create Account</CustomButton>
          </form>
          <div className={styles["log-in"]}>
            <p>
              Already have an account? <span>Log in</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default RegisterPage;

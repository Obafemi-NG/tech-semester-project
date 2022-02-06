import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import CustomButton from "../../UI/custom-button/custom-button.ui";
import CustomInput from "../../UI/custom-input/custom-input.ui";

import styles from "./register-page.module.css";

const RegisterPage = (props) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/login");
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
  };

  const submitHandler = (e) => {
    e.preventDefault();
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

          <form onSubmit={submitHandler}>
            <div className={styles["form-section"]}>
              <CustomInput
                type="text"
                label="First Name"
                handleChange={onChangeHandler}
                name="firstName"
                value={props.firstName}
              />
              <CustomInput
                type="text"
                label="Last Name"
                handleChange={onChangeHandler}
                name="lastName"
                value={props.lastName}
              />
              <CustomInput
                type="text"
                label="Phone Number"
                handleChange={onChangeHandler}
                name="phoneNumber"
                value={props.phoneNumber}
              />
              <CustomInput
                type="text"
                label="Email"
                handleChange={onChangeHandler}
                name="email"
                value={props.email}
              />
              <CustomInput
                type="text"
                label="Password"
                handleChange={onChangeHandler}
                name="password"
                value={props.password}
              />
              <CustomInput
                type="text"
                label="Confirm Password"
                handleChange={onChangeHandler}
                name="confirmPassword"
                value={props.confirmPassword}
              />
            </div>

            <div className={styles.action}>
              <div className={styles["check-box"]}>
                <input type="checkbox" />
                <label> Yes, I want to receive Lottery Display emails</label>
              </div>
              <div className={styles["check-box"]}>
                <input type="checkbox" />
                <label>
                  {" "}
                  I agree to all the <span>Terms, Privacy Policy</span> and{" "}
                  <span>Fees</span>
                </label>
              </div>
              <CustomButton>Create Account</CustomButton>
            </div>
          </form>

          <div className={styles["log-in"]}>
            <p>
              Already have an account?{" "}
              <span onClick={handleNavigate}>Log in</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default RegisterPage;

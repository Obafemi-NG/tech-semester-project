import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userActions } from "../../store/user/user.slice";

import CustomButton from "../../UI/custom-button/custom-button.ui";
import CustomInput from "../../UI/custom-input/custom-input.ui";

import styles from "./register-page.module.css";

const RegisterPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/login");
  };

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(newUser);
    dispatch(
      userActions.onRegister({
        email: newUser.email,
        password: newUser.password,
        confirmPassword: newUser.confirmPassword,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        phoneNumber: newUser.phoneNumber,
      })
    );
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
                value={newUser.firstName}
              />
              <CustomInput
                type="text"
                label="Last Name"
                handleChange={onChangeHandler}
                name="lastName"
                value={newUser.lastName}
              />
              <CustomInput
                type="text"
                label="Phone Number"
                handleChange={onChangeHandler}
                name="phoneNumber"
                value={newUser.phoneNumber}
              />
              <CustomInput
                type="text"
                label="Email"
                handleChange={onChangeHandler}
                name="email"
                value={newUser.email}
              />
              <CustomInput
                type="text"
                label="Password"
                handleChange={onChangeHandler}
                name="password"
                value={newUser.password}
              />
              <CustomInput
                type="text"
                label="Confirm Password"
                handleChange={onChangeHandler}
                name="confirmPassword"
                value={newUser.confirmPassword}
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

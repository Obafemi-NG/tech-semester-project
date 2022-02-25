import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userActions } from "../../store/user/user.slice";

import CustomButton from "../../UI/custom-button/custom-button.ui";
import CustomInput from "../../UI/custom-input/custom-input.ui";

import styles from "./login-page.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [formIsTouched, setFormIsTouched] = useState(false);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/register");
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onBlurHandler = () => {
    setFormIsTouched(true);
  };

  const invalidInput = formIsTouched ? `${styles.invalid}` : "";

  const submitHandler = (e) => {
    e.preventDefault();
    setFormIsTouched(true);
    if (user.email.includes("@") && user.password.trim().length > 6) {
      setIsFormValid(true);
    }
    console.log(user);
    dispatch(
      userActions.onLogin({ email: user.email, password: user.password })
    );
    setUser({
      email: "",
      password: "",
    });
  };

  const formIsInvalid = !isFormValid && formIsTouched;

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
            label="Email"
            type="text"
            placeholder="Email or Phone Number"
            name="email"
            value={user.email}
            handleChange={onChangeHandler}
            onBlur={onBlurHandler}
            styleName={invalidInput}
          />
          <CustomInput
            label="Password"
            type="text"
            placeholder="Password"
            name="password"
            value={user.password}
            handleChange={onChangeHandler}
            onBlur={onBlurHandler}
            styleName={invalidInput}
          />
          <div className={styles["remember-user"]}>
            <input type="checkbox" />
            <label> Remember Me</label>
          </div>
          {formIsInvalid && (
            <p style={{ color: "red", fontSize: 12 }}>
              Provided E-mail or Password invalid.{" "}
            </p>
          )}
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

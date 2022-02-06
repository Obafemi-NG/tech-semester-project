import { Fragment, useState } from "react";
import RegisterPage from "./pages/register-page/register-page.component";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page/login-page.component";

import HomePage from "./pages/home-page/home-page.component";

const App = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    confirmPassword: "",
  });
  return (
    <Fragment>
      <Routes>
        <Route
          path="/register"
          element={
            <RegisterPage
              email={state.email}
              password={state.password}
              firstName={state.password}
              lastName={state.lastName}
              phoneNumber={state.phoneNumber}
              confirmPassword={state.confirmPassword}
            />
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Fragment>
  );
};

export default App;

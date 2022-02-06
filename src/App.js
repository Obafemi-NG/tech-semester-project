import { Fragment } from "react";
import RegisterPage from "./pages/register-page/register-page.component";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page/login-page.component";

import HomePage from "./pages/home-page/home-page.component";
import Onboarding from "./pages/onboarding/onboarding";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Fragment>
  );
};

export default App;

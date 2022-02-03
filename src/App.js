import { Fragment } from "react";
import RegisterPage from "./pages/register-page/register-page.component";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/login-page/login-page.component";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Fragment>
  );
};

export default App;

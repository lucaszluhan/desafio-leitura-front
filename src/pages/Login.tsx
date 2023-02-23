import React from "react";
import LoginForm from "../components/LoginForm";

interface LoginProps {
  property: string;
}

const Login = () => {
  return (
    <>
      <LoginForm title="Login" />
    </>
  );
};

export default Login;

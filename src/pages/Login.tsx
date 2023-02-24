import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useAppDispatch } from "../store/hooks";
import { loginAction } from "../store/modules/loginSlice";

interface LoginProps {
  property: string;
}

const Login = () => {
  const [username, setUsername] =
    useState<string>("");
  const [password, setPassword] =
    useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || username.length < 4) {
      alert(
        "Preencha o nome de usuário com ao menos 4 caracteres"
      );
      return;
    }
    if (!password || password.length < 1) {
      alert(
        "Preencha a senha com ao menos 4 caracteres"
      );
      return;
    }
    const login = {
      username,
      password,
    };

    const result = await dispatch(
      loginAction(login)
    ).unwrap();
    if (!result.ok) {
      alert(result.message);
      return;
    }
    navigate("/home");
  };
  return (
    <>
      <LoginForm title="Login">
        <TextField
          color="secondary"
          id="standard-basic"
          label="username"
          variant="standard"
          value={username || ""}
          onChange={(ev) =>
            setUsername(ev.target.value)
          }
        />
        <TextField
          color="secondary"
          id="standard-basic"
          label="password"
          variant="standard"
          value={password || ""}
          onChange={(ev) =>
            setPassword(ev.target.value)
          }
        />
        <Button onClick={handleLogin}>
          Login
        </Button>
      </LoginForm>
    </>
  );
};

export default Login;

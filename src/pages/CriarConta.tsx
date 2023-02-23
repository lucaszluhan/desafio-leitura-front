import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { createUser } from "../service/api.service";

const CriarConta = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleCreateUser = async () => {
    if (!username || username.length < 4) {
      alert("Preencha o nome de usuário com ao menos 4 caracteres");
      return;
    }
    if (!password || password.length < 4) {
      alert("Preencha a senha com ao menos 4 caracteres");
      return;
    }
    if (!confirmPassword || password !== confirmPassword) {
      alert("Os campos 'Senha' e 'Confirme Senha' precisam ser iguais");
      return;
    }
    const user = {
      username,
      password,
    };
    const result = await createUser(user);
    if (result.ok) {
      alert("Usuário Criado com Sucesso");
      navigate("/login");
      return;
    }
    alert(result.message.toString());
  };

  const handleBack = () => {
    navigate("/login");
  };

  return (
    <>
      <LoginForm title="Criar Conta" button="Criar Conta">
        {" "}
        <TextField
          color="secondary"
          id="standard-basic"
          label="Username"
          variant="standard"
          value={username || ""}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <TextField
          color="secondary"
          id="standard-basic"
          label="Senha"
          variant="standard"
          value={password || ""}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <TextField
          color="secondary"
          id="standard-basic"
          label="Confirmar Senha"
          variant="standard"
          value={confirmPassword || ""}
          onChange={(ev) => setConfirmPassword(ev.target.value)}
        />
        <Button onClick={handleCreateUser}>Criar Conta</Button>
        <Button onClick={handleBack}>Voltar</Button>
      </LoginForm>
    </>
  );
};

export default CriarConta;

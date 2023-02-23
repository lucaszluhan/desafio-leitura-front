import { Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import Img from "../assets/img.jpg";
interface LoginFormProps {
  title: string;
  input?: any;
}

const LoginForm = ({ title, input }: any) => {
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          background: `url(${Img})`,
          height: "100vh",
          width: "100vw",
        }}
        spacing={2}
      >
        <Grid item xs={12}>
          <Paper>
            <Typography>{title}</Typography>
            <TextField
              id="standard-basic"
              label="Username"
              variant="standard"
            />
            <TextField id="standard-basic" label="Senha" variant="standard" />
            {input}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginForm;

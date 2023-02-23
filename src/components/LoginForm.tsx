import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import Img from "../assets/img.jpg";
interface LoginFormProps {
  title: string;
  children?: JSX.Element;
}

const LoginForm = ({ title, children }: any) => {
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
        <Grid item xs={6}>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              {title}
            </Typography>
            {children}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginForm;

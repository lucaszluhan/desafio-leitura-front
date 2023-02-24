import { Button, Fab } from "@mui/material";
import React from "react";
import FormDialog from "../components/FormBook";
import AddIcon from "@mui/icons-material/Add";

const Home: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <FormDialog close={handleClose} open={open} />
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
    </React.Fragment>
  );
};

export default Home;

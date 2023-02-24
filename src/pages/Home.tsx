import { Button, Fab } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormDialog from "../components/FormBook";
import {
  useAppDispatch,
  useAppSelector,
} from "../store/hooks";
import {
  listaLeituraAction,
  selectAll,
} from "../store/modules/leituraSlice";
// import AddIcon from "@mui/icons-material/Add";

const Home: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const list = useAppSelector(selectAll);
  const dispatch = useAppDispatch();
  const userLogged = useAppSelector(
    (state) => state.Login
  );
  const navigate = useNavigate();

  if (!userLogged) {
    alert("Faça login!");
    navigate("/login");
  }
  useEffect(() => {
    dispatch(
      listaLeituraAction(userLogged.user.id)
    );
  }, [dispatch]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <FormDialog
        close={handleClose}
        open={open}
      />
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
      >
        +{/* <AddIcon /> */}
      </Fab>
      <ul>
        {list.map((item) => (
          <li key={item.idLivro}>{item.nome}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Home;

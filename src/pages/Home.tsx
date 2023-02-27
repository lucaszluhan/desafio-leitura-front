import {
  Button,
  Fab,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormDialog from "../components/FormBook";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { listaLeituraAction, selectAll } from "../store/modules/leituraSlice";
// import AddIcon from "@mui/icons-material/Add";

const Home: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const list = useAppSelector(selectAll);
  const dispatch = useAppDispatch();
  const userLogged = useAppSelector((state) => state.Login);
  const navigate = useNavigate();

  if (!userLogged) {
    alert("Faça login!");
    navigate("/login");
  }
  useEffect(() => {
    dispatch(listaLeituraAction(userLogged.user.id));
  }, [dispatch]);
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
        +{/* <AddIcon /> */}
      </Fab>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">Gênero</TableCell>
              <TableCell align="right">Numero de Páginas</TableCell>
              <TableCell align="right">Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((item) => (
              <TableRow
                key={item.idLivro}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{item.nome}</TableCell>

                <TableCell align="right">{item.genero}</TableCell>
                <TableCell align="right">{item.numPaginas}</TableCell>
                <TableCell align="right">{item.data}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default Home;

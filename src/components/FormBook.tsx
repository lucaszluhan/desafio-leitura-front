import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { creatBookAction } from "../store/modules/leituraSlice";

interface FormDialogProps {
  open: boolean;
  close: () => void;
}

export default function FormDialog({ open, close }: FormDialogProps) {
  const [name, setName] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [paginas, setPaginas] = useState<number>(0);
  const [dataI, setDataI] = useState<string>();
  const [dataT, setDataT] = useState<string>();
  const userLogged = useAppSelector((state) => state.Login);
  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    console.log(userLogged.user.id);
    if (!name) {
      alert("Insira o nome do livro");
      return;
    }
    if (!paginas) {
      alert("Insira o numero de paginas");
      return;
    }
    if (!dataI) {
      alert("Insira a data de início");
      return;
    }
    if (!dataT) {
      alert("Insira a data de término");
      return;
    }
    if (!genre) {
      alert("Insira a data de término");
      return;
    }
    const book = {
      userId: userLogged.user.id,
      nome: name,
      genero: genre,
      numPaginas: paginas,
      data: dataI,
    };
    console.log(book);
    const result = await dispatch(creatBookAction(book)).unwrap();
    close();
  };

  return (
    <div>
      <Dialog open={open} onClose={close}>
        <DialogTitle>Adicione uma leitura</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            onChange={(ev) => setName(ev.target.value)}
            id="name"
            label="Nome do Livro"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            onChange={(ev) => setGenre(ev.target.value)}
            id="name"
            label="Gênero do Livro"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            onChange={(ev) => setPaginas(Number(ev.target.value))}
            id="name"
            label="Numero de páginas"
            type="text"
            fullWidth
            variant="outlined"
          />
          <p>Data de início de leitura</p>
          <TextField
            autoFocus
            margin="dense"
            onChange={(ev) => setDataI(ev.target.value)}
            id="name"
            fullWidth
            type="date"
            variant="outlined"
          />
          <p>Data de término de leitura</p>
          <TextField
            autoFocus
            margin="dense"
            onChange={(ev) => setDataT(ev.target.value)}
            id="name"
            fullWidth
            type="date"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancelar</Button>
          <Button onClick={handleSubmit}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

interface FormDialogProps {
  open: boolean;
  close: () => void;
}

export default function FormDialog({ open, close }: FormDialogProps) {
  const [name, setName] = useState<string>("");
  const [paginas, setPaginas] = useState<number>(0);
  const [dataI, setDataI] = useState<Number>();
  const [dataT, setDataT] = useState<Number>();

  const handleSubmit = () => {
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
    if (!dataI) {
      alert("Insira a data de término");
      return;
    }
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
            onChange={(ev) => setDataI(Number(ev.target.value))}
            id="name"
            fullWidth
            type="date"
            variant="outlined"
          />
          <p>Data de término de leitura</p>
          <TextField
            autoFocus
            margin="dense"
            onChange={(ev) => setDataT(Number(ev.target.value))}
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

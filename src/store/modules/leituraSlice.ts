import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { listaLeitura } from "../../service/api.service";
import { useAppSelector } from "../hooks";

export const listaLeituraAction =
  createAsyncThunk(
    "leitura/lista",
    async (userId: string) => {
      const result = await listaLeitura(userId);
      if (result.ok) {
        return result.data.livros;
      }
      return [];
    }
  );

const leituraAdapter = createEntityAdapter({
  selectId: (item: any) => item.idLivro,
});

export const { selectAll, selectById } =
  leituraAdapter.getSelectors(
    (state: any) => state.leitura
  );

const leituraSlice: any = createSlice({
  name: "leitura",
  initialState: leituraAdapter.getInitialState(),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      listaLeituraAction.fulfilled,
      leituraAdapter.setAll
    );
  },
});

export const { addOne, addMany, updateOne } =
  leituraSlice.actions;
export default leituraSlice.reducer;

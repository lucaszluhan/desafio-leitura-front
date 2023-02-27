import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {
  createBook,
  CreateBookType,
  listaLeitura,
} from "../../service/api.service";
import { useAppSelector } from "../hooks";

export const listaLeituraAction = createAsyncThunk(
  "leitura/lista",
  async (userId: string) => {
    const result = await listaLeitura(userId);
    if (result.ok) {
      return result.data.livros;
    }
    return [];
  }
);

export const creatBookAction = createAsyncThunk(
  "create/book",
  async (book: CreateBookType) => {
    const result = await createBook(book);
    console.log(result.data);
    if (result.ok) {
      return result.data;
    }
  }
);

const leituraAdapter = createEntityAdapter({
  selectId: (item: any) => item.idLivro,
});

export const { selectAll, selectById } = leituraAdapter.getSelectors(
  (state: any) => state.leitura
);

const leituraSlice: any = createSlice({
  name: "leitura",
  initialState: leituraAdapter.getInitialState(),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(listaLeituraAction.fulfilled, leituraAdapter.setAll);
    builder.addCase(creatBookAction.fulfilled, leituraAdapter.addOne);
  },
});

export const { addOne, addMany, updateOne } = leituraSlice.actions;
export default leituraSlice.reducer;

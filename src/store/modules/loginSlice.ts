import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, LoginUserType } from "../../service/api.service";

export const loginAction = createAsyncThunk("user/Login", async (user: LoginUserType) => {
  const result = await loginUser(user);
  return result;
});
const loginSlice = createSlice({
  name: "Login",
  initialState: null,
  reducers: {},
  extraReducers(builder) {},
});

export default loginSlice.reducer;

import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import {
  loginUser,
  LoginUserType,
} from "../../service/api.service";

export const loginAction = createAsyncThunk(
  "user/Login",
  async (user: LoginUserType) => {
    const result = await loginUser(user);
    return result;
  }
);
const loginSlice = createSlice({
  name: "Login",
  initialState: {
    logged: false,
    user: {} as any,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      loginAction.fulfilled,
      (state, action) => {
        return {
          logged: true,
          user: action.payload.data,
        };
      }
    );
  },
});

export default loginSlice.reducer;

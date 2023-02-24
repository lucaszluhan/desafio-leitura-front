import { combineReducers } from "@reduxjs/toolkit";
import Login from "./loginSlice";
import leitura from "./leituraSlice";

export default combineReducers({
  Login,
  leitura,
});

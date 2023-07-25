import { configureStore } from "@reduxjs/toolkit";
import panelSlice from "./reducers/panelReducer";
import userSlice from "./reducers/userReducer";

export const store = configureStore({
  reducer: { panel: panelSlice, user: userSlice },
});

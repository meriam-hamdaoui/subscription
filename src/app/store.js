import { configureStore } from "@reduxjs/toolkit";
import panelSlice from "./reducers/panelReducer";

export const store = configureStore({
  reducer: { panel: panelSlice },
});

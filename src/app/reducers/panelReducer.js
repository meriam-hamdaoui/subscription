import { createSlice } from "@reduxjs/toolkit";

const panelSlice = createSlice({
  name: "panel",
  initialState: {
    isRightPanelActive: false,
  },
  reducers: {
    setRightPanelActive: (state, action) => {
      state.isRightPanelActive = action.payload;
    },
  },
});

export const { setRightPanelActive } = panelSlice.actions;
export default panelSlice.reducer;

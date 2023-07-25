import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  users: [
    {
      id: uuidv4(),
      name: "mariem",
      email: "mariem@example.com",
      password: "azerty123",
    },
  ],
  auth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createAccount: (state, action) => {
      return { ...state, users: [...state.users, action.payload] };
    },
    authenticate: (state, action) => {
      return { ...state, auth: action.payload };
    },
  },
});

export const { createAccount, authenticate } = userSlice.actions;
export default userSlice.reducer;

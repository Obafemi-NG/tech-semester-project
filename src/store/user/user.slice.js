import { createSlice } from "@reduxjs/toolkit";

const INITIAL_USER_STATE = {
  user: [],
};
const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_USER_STATE,
  reducers: {
    onLogin(state, action) {
      state.user = action.payload;
    },
    onRegister(state, action) {
      state.user = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;

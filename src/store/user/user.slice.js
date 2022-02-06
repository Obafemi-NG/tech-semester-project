import { createSlice } from "@reduxjs/toolkit";

const INITIAL_USER_STATE = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
};
const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_USER_STATE,
  reducers: {
    onLogin(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    onRegister(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.confirmPassword = action.payload.confirmPassword;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.phoneNumber = action.payload.phoneNumber;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;

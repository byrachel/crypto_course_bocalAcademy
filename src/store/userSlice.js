import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: "",
  password: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    connexion(state, action) {
      state.login = action.payload.login;
      state.password = action.payload.password;
      state.isLogged = true;
    },
    logout(state) {
      state.login = "";
      state.password = "";
      state.isLogged = false;
    },
  },
});

export const { connexion, logout } = userSlice.actions;
export default userSlice.reducer;

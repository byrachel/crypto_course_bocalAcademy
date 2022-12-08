import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
  cryptoWallet: [
    {
      name: "welcome gift",
      amount: 10,
      devise: "bocal coin",
      adress: "<helloworld />",
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.token = null;
      state.user = null;
    },
    setCryptoWallet(state, action) {
      state.cryptoWallet = [...state.cryptoWallet, action.payload];
    },
    updateCryptoWallet(state, action) {
      state.cryptoWallet = state.cryptoWallet.map((wallet) =>
        wallet.adress === action.payload.adress ? action.payload : wallet
      );
    },
    removeCryptoWallet(state, action) {
      state.cryptoWallet = state.cryptoWallet.filter(
        (wallet) => wallet.adress !== action.payload
      );
    },
  },
});

export const {
  setToken,
  setUser,
  logout,
  setCryptoWallet,
  removeCryptoWallet,
  updateCryptoWallet,
} = userSlice.actions;
export default userSlice.reducer;

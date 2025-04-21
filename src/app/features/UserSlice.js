import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthReady: false,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logOut: (state) => {
      state.user = null;
    },
    authIsReady: (state, { payload }) => {
      state.user = payload;
      state.isAuthReady = true;
    },
  },
});

export const { login, logOut, authIsReady } = UserSlice.actions;
export default UserSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setToken: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token
    },
    removeToken: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
    },
  },
});

export default authSlice.reducer;

export const { removeToken, setToken } = authSlice.actions;

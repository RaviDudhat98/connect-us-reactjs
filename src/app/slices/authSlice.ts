import { createSlice } from "@reduxjs/toolkit";
import { AuthModes } from "../../utils/Enums";

interface AuthState {
  authMode: string;
}

const initialState: AuthState = {
  authMode: AuthModes.SIGN_IN,
};

export const authSlice = createSlice({
  name: "authentication",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAuthMode: (state, actions) => {
      state.authMode = actions.payload || AuthModes.SIGN_IN;
    },
  },
});

export const { setAuthMode } = authSlice.actions;

export default authSlice.reducer;

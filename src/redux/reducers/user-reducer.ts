import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: {
    name: "",
    lastName: ""
  },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setIsAuth(state, action:PayloadAction<boolean>) {
        state.isAuth = action.payload
      },
  
      setUser(state, action) {
        state.user = action.payload;
      }
    }
  })

export default userSlice.reducer;
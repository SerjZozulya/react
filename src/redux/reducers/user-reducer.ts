import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: {
    id: 0,
    email: "",
    firstName: "",
    lastName: "",
    role: ""
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
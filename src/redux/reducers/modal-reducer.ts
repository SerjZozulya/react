import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: 'modal',
    initialState: false,
    reducers: {
      setVisible(state, action) {
        return action.payload
      },
    }
  })

  export default modalSlice.reducer;
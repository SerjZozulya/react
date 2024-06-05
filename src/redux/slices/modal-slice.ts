import { createSlice } from "@reduxjs/toolkit";
import {MODAL_TYPES} from "../../utils/consts"

const initialState = {
  isVisible: false,
  form: MODAL_TYPES.CREATE_TASK_FORM,
  data: {}
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
      setVisible(state, action) {
        state.isVisible = action.payload
      },

      setForm(state, action) {
        state.form = action.payload
      },

      setData(state, action) {
        state.data = action.payload
      },
    }
  })

  export default modalSlice.reducer;
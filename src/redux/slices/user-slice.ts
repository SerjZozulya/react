import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

type InitialStateT = {
  isAuth: boolean;
  user: IUser;
};

const initialState: InitialStateT = {
  isAuth: false,
  user: {
    id: 0,
    email: "",
    firstName: "",
    lastName: "",
    role: "",
    selectedProject: Number(localStorage.getItem("activeProjectId")),
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },

    setUser(state, action) {
      state.user.id = action.payload.id;
      state.user.email = action.payload.email;
      state.user.firstName = action.payload.firstName;
      state.user.lastName = action.payload.lastName;
      state.user.role = action.payload.role;
    },

    setActiveProject(state, action) {
      state.user.selectedProject = action.payload;
    },
  },
});

export default userSlice.reducer;

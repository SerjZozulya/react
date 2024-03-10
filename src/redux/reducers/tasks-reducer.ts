import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITask, todos } from "../../todos";

export enum actionTypes {
    ADD_TASK = "ADD_TASK",
    DELETE_TASK = "DELETE_TASK"
}

enum taskStatuses {
  DONE = "DONE",
  IN_PROGRESS = "IN PROGRESS",
  TODO = "TODO",
}

enum taskTypes {
  BUG = "BUG",
  TASK = "TASK",
}

type SelectedProjectType = {
  id: number;
  name: string;
};

type InitStateType = {
  projects: Array<any>;
  selectedProject: SelectedProjectType;
  tasks: Array<any>;
  newTaskText: string;
  taskType: string;
  status: string;
};

const initialState: InitStateType = {
  projects: [],
  selectedProject: { id: 1, name: "" },
  tasks: todos.todos,
  newTaskText: "",
  taskType: taskTypes.TASK,
  status: taskStatuses.TODO,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    createTask(state, action:PayloadAction<ITask>) {
      state.tasks.push(action.payload)
    },

    deleteTask(state, action:PayloadAction<ITask>) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
    }
  }
})

export default taskSlice.reducer;

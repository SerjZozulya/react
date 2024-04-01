import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { todos } from "../../todos";
import { ITask } from "../../models/ITask";

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
  totalTasks: number;
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
  selectedProject: { id: 1, name: "", totalTasks: todos.total },
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

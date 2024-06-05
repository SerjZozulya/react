import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITask } from "../../models/ITask";
import { IProject } from "../../models/IProject";

enum taskStatuses {
  DONE = "DONE",
  IN_PROGRESS = "IN PROGRESS",
  TODO = "TODO",
}

enum taskTypes {
  BUG = "BUG",
  TASK = "TASK",
}

type InitStateType = {
  tasks: Array<ITask>;
  newTaskText: string;
  taskType: string;
  status: string;
};

const initialState: InitStateType = {
  tasks: [],
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

    editTask(state, action:PayloadAction<ITask>) {
      const index = state.tasks.findIndex(obj => {return obj.id === action.payload.id})
      state.tasks[index] = action.payload
    },

    deleteTask(state, action:PayloadAction<ITask>) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
    },

    setTasks(state, action) {
      state.tasks = action.payload
    },
  }
})

export default taskSlice.reducer;

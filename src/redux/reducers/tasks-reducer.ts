import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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

type InitStateType = {
  projects: Array<any>;
  selectedProject: number;
  tasks: Array<any>;
  newTaskText: string;
  taskType: string;
  status: string;
};

const initialState: InitStateType = {
  projects: [],
  selectedProject: 0,
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

    setProjects(state, action) {
      state.projects = action.payload
    },

    setTasks(state, action) {
      state.tasks = action.payload
    },

    setActiveProject(state, action) {
      state.selectedProject = action.payload
    }
  }
})

export default taskSlice.reducer;

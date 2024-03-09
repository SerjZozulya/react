import { todos } from "../../todos";
import { Action } from "../action-type";

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

let initState: InitStateType = {
  projects: [],
  selectedProject: { id: 1, name: "" },
  tasks: todos.todos,
  newTaskText: "",
  taskType: taskTypes.TASK,
  status: taskStatuses.TODO,
};

export const tasksReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      console.log('CREATE TASK')
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        newTaskText: "",
      };

    case actionTypes.DELETE_TASK:
      console.log('DELETE TASK')
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload)};

    default:
      return state;
  }
};

export const addTaskCreator = (payload: any) => ({type: actionTypes.ADD_TASK, payload: payload})
export const deleteTaskActionCreator = (payload: any) => ({type: actionTypes.DELETE_TASK, payload: payload})

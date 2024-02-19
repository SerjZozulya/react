import "./App.css";
import { FC } from "react";
import { TasksContext } from "./context";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  deleteTaskActionCreator } from "./redux/tasks-reducer";
import { ITodo } from "./types/types";
import Layout from "./UI/Layout";

const App: FC = () => {

  const dispatch = useDispatch()


  const deleteTask = (task: ITodo) => {
    dispatch(deleteTaskActionCreator(task))
  };


  return (
    <TasksContext.Provider value={{ deleteTask }}>
      <BrowserRouter>
        <div className="App">
          <Layout/>
        </div>
      </BrowserRouter>
    </TasksContext.Provider>
  );
};

export default App;

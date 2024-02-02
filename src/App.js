import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeaderContainer from "./components/Header/HeaderContainer";
import Modal from "./components/Modal/Modal";
import CreateTask from "./components/ProjectTasks/Form/CreateTask";
import { useState } from "react";
import { TasksContext } from "./context";
import AppRouter from "./components/AppRouter";
import store from "./redux/store-redux";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes, addTaskActionCreator, deleteTaskActionCreator } from "./redux/tasks-reducer";

const App = () => {

  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks)
  
  const addTask = (task) => {
    dispatch(addTaskActionCreator(task))
  }

  const deleteTask = (task) => {
    dispatch(deleteTaskActionCreator(task))
  };

  const [isModalVisible, setModal] = useState(false);

  const createPost = (newPost) => {
    addTask(newPost)
    setModal(false);
  };

  return (
    <TasksContext.Provider value={{ tasks, deleteTask }}>
      <BrowserRouter>
        <div className="App">
          <div className={"GridBlock"}>
            <Modal visible={isModalVisible} setVisible={setModal}>
              <CreateTask create={createPost} />
            </Modal>
            <HeaderContainer
              openModal={() => setModal(true)}
            />
            <Navbar />
            <AppRouter />
          </div>
        </div>
      </BrowserRouter>
    </TasksContext.Provider>
  );
};

export default App;

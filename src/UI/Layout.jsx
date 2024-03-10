import Navbar from "./Navbar";
import Header from "./Header";
import Modal from "./Modal";
import CreateTask from "../components/ProjectTasks/Form/CreateTask";
import AppRouter from "../components/AppRouter";
import { useState } from "react";
import { addTaskCreator, taskSlice } from "../redux/reducers/tasks-reducer";
import { useAppDispatch } from "../hooks/redux";

const Layout = () => {
  const dispatch = useAppDispatch();
  const {createTask} = taskSlice.actions

  const [isModalVisible, setModal] = useState(false);

  const createPost = (newPost) => {
    dispatch(createTask(newPost));
    setModal(false);
  };

  return (
    <div className={"GridBlock"}>
      <Modal visible={isModalVisible} setVisible={setModal}>
        <CreateTask create={createPost} />
      </Modal>
      <Header openModal={() => setModal(true)} />
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default Layout;

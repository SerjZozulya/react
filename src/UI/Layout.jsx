import Navbar from "./Navbar";
import HeaderContainer from "./HeaderContainer";
import Modal from "./Modal";
import CreateTask from "../components/ProjectTasks/Form/CreateTask";
import AppRouter from "../components/AppRouter";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskCreator } from "../redux/tasks-reducer";

const Layout = () => {
  const dispatch = useDispatch();

  const addTask = (task) => {
    dispatch(addTaskCreator(task));
  };

  const [isModalVisible, setModal] = useState(false);

  const createPost = (newPost) => {
    addTask(newPost);
    setModal(false);
  };

  return (
    <div className={"GridBlock"}>
      <Modal visible={isModalVisible} setVisible={setModal}>
        <CreateTask create={createPost} />
      </Modal>
      <HeaderContainer openModal={() => setModal(true)} />
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default Layout;

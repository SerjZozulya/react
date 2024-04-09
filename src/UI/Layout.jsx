import Navbar from "./Navbar";
import Header from "./Header";
import Modal from "./Modal";
import CreateTask from "../components/ProjectTasks/Form/CreateTask";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { modalSlice } from "../redux/reducers/modal-reducer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const dispatch = useAppDispatch();
  const isModalVisible = useAppSelector((state) => state.modal);
  const { setVisible } = modalSlice.actions;
  return (
    <div className={"GridBlock"}>
      <Modal visible={isModalVisible} setVisible={setVisible}>
        <CreateTask />
      </Modal>
      <Header openModal={() => dispatch(setVisible(true))} />
      <Navbar />
      <div className={"Content-Wrapper"}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

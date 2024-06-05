import Navbar from "./Navbar";
import Header from "./Header";
import Modal from "./Modal";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { modalSlice } from "../redux/slices/modal-slice";
import { Outlet } from "react-router-dom";
import { MODAL_TYPES } from "../utils/consts";

const Layout = () => {
  const dispatch = useAppDispatch();
  const { isVisible, form } = useAppSelector((state) => state.modal);
  const { setVisible, setForm } = modalSlice.actions;
  
  return (
    <div className={"GridBlock"}>
      <Modal visible={isVisible} setVisible={setVisible} form={form}/>
      <Header openModal= {() => {
          dispatch(setVisible(true))
          dispatch(setForm(MODAL_TYPES.CREATE_TASK_FORM))
        }
      } />
      <Navbar />
      <div className={"Content-Wrapper"}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

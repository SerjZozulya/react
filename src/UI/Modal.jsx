import { useAppDispatch } from "../hooks/redux";
import style from "./Modal.module.css";
import Form from './../components/ProjectTasks/Form/Form';

export default function Modal({ visible, setVisible, form }) {
  const dispatch = useAppDispatch()
  const rootClasses = [style.modal];

  if (visible) {
    rootClasses.push(style.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={(e) => dispatch(setVisible(false))}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}><Form form={form}/></div>
    </div>
  );
}

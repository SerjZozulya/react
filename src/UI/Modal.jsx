import { useAppDispatch } from "../hooks/redux";
import style from "./Modal.module.css";

export default function Modal({ children, visible, setVisible }) {
  const dispatch = useAppDispatch()
  const rootClasses = [style.modal];

  if (visible) {
    rootClasses.push(style.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={(e) => dispatch(setVisible(false))}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
}

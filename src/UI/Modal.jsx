import style from "./Modal.module.css";
import React from 'react';

export default function Modal({ children, visible, setVisible }) {
  const rootClasses = [style.modal];

  if (visible) {
    rootClasses.push(style.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={(e) => setVisible(false)}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
}

import s from "./Task.module.css";
import avatar from "../../static/img/avatar.jpg";
import { Button, Tooltip } from "antd";
import { DeleteOutlined, EditFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ITask } from "../../models/ITask";
import { taskSlice } from "../../redux/slices/tasks-slice";
import { useAppDispatch } from "../../hooks/redux";
import { modalSlice } from "../../redux/slices/modal-reducer";
import { deleteTaskFromServer } from "../../http/tasksAPI";
import dayjs from "dayjs";
import { MODAL_TYPES } from "../../utils/consts";

const Task = (task: ITask) => {
  const dispatch = useAppDispatch();
  const { deleteTask } = taskSlice.actions;
  const { setVisible, setForm, setData } = modalSlice.actions;

  const removeRecord = () => {
    deleteTaskFromServer(task.id).then((data) => {
      dispatch(deleteTask(task));
    });
  };

  const openTaskEditor = () => {
    dispatch(setVisible(true))
    dispatch(setForm(MODAL_TYPES.EDIT_TASK_FORM))
    dispatch(setData(task))
  }

  return (
    <div className={s.postContainer}>
      <div className={s.post}>
        <div className={s.avatarAndDateBlock}>
          <img src={avatar} alt={"ava"} />
          <div>{dayjs(task.pubDate).format("DD.MM.YYYY HH:mm")}</div>
        </div>
        <div className={s.text}>
          <Link
            to={`/project/${task.type + "-" + task.id}`}
            className={task.type === "TASK" ? s.taskType : s.bugType}
          >
            {task.type} №{task.id}
          </Link>
          <span className={task.type === "TASK" ? s.taskType : s.bugType}>: {task.summary}</span>
          <div>{task.description}</div>
        </div>
        <div className={s.options}>
          <Tooltip title="delete">
            <Button
              onClick={removeRecord}
              shape="circle"
              icon={<DeleteOutlined />}
            />
          </Tooltip>
          <Tooltip title="edit">
            <Button
              onClick={openTaskEditor}
              shape="circle"
              icon={<EditFilled />}
            />
          </Tooltip>
        </div>
      </div>
      <div className={s.statusBar}>
        <div>STATUS: {task.status}</div>
      </div>
    </div>
  );
};

export default Task;

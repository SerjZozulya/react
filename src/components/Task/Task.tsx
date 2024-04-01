import s from "./Task.module.css";
import avatar from "../../assets/img/avatar.jpg";
import { Button, Tooltip } from "antd";
import { DeleteOutlined, EditFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ITask } from "../../models/ITask";
import { taskSlice } from "../../redux/reducers/tasks-reducer";
import { useAppDispatch } from "../../hooks/redux";
import { modalSlice } from "../../redux/reducers/modal-reducer";

const Task = (task: ITask) => {
  const dispatch = useAppDispatch();
  const { deleteTask } = taskSlice.actions;
  const { setVisible } = modalSlice.actions;

  return (
    <div className={s.postContainer}>
      <div className={s.post}>
        <div className={s.avatarAndDateBlock}>
          <img src={avatar} alt={"ava"} />
          <div>{task.pubDate}</div>
        </div>
        <div className={s.text}>
          <Link
            to={`/project/${task.type + "-" + task.id}`}
            className={task.type === "TASK" ? s.taskType : s.bugType}
          >
            {task.type} №{task.id}
          </Link>
          <span>: {task.summary}</span>
          <div>Description: {task.description}</div>
        </div>
        <div className={s.options}>
          <Tooltip title="delete">
            <Button
              onClick={(e) => {
                dispatch(deleteTask(task));
              }}
              shape="circle"
              icon={<DeleteOutlined />}
            />
          </Tooltip>
          <Tooltip title="edit">
            <Button onClick={() => dispatch(setVisible(true))} shape="circle" icon={<EditFilled />} />
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

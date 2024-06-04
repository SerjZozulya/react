import { Input, Select, Button } from "antd";
import { useEffect, useMemo, useState } from "react";
import s from "./CreateTask.module.css";
import dayjs from "dayjs";
import { ITask } from "../../../models/ITask";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { taskSlice } from "../../../redux/slices/tasks-slice";
import { modalSlice } from "../../../redux/slices/modal-reducer";
import { createTask as createTaskOnServer } from "../../../http/tasksAPI";

const { TextArea } = Input;

export default function CreateTask() {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks);
  const user = useAppSelector((state) => state.user);
  const { createTask } = taskSlice.actions;
  const { setVisible } = modalSlice.actions;

  let emptyTask: ITask = {
    id: 0,
    summary: "",
    status: "TODO",
    type: "TASK",
    pubDate: dayjs(),
    description: "",
    reporterId: user.user.id,
    assigneeId: user.user.id,
    projectId: tasks.selectedProject,
  };

  const [task, setTask] = useState(emptyTask);

  useEffect(() => {
    setTask(emptyTask);
  }, [tasks]);

  const addNewPost = () => {
    createTaskOnServer(task).then((data) => {
      dispatch(createTask(data));
      dispatch(setVisible(false));
      setTask(emptyTask);
    });
  };

  return (
    <form className={s.form}>
      <div>Создать задачу</div>
      <Input
        placeholder="Summary"
        value={task.summary}
        onChange={(e) => setTask({ ...task, summary: e.target.value })}
      />
      <TextArea
        rows={5}
        placeholder="Что нужно сделать?"
        className={s.ta}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        value={task.description}
      />
      <div className={s.settings}>
        Тип задачи:{" "}
        <Select
          defaultValue={task.type}
          options={[
            { value: "TASK", label: <span>TASK</span> },
            { value: "BUG", label: <span>BUG</span> },
          ]}
          onChange={(e) => setTask({ ...task, type: e })}
        />
        {` Статус:`}{" "}
        <Select
          defaultValue={task.status}
          onChange={(e) => setTask({ ...task, status: e })}
          style={{ width: 128 }}
          options={[
            { value: "DONE", label: <span>DONE</span> },
            { value: "IN PROGRESS", label: <span>IN PROGRESS</span> },
            { value: "TODO", label: <span>TODO</span> },
          ]}
        />
        <Button
          type="primary"
          disabled={task.summary === ""}
          onClick={addNewPost}
        >
          Create Task
        </Button>
      </div>
    </form>
  );
}

import { Input, Select, Button } from "antd";
import { useState } from "react";
import s from "./CreateTask.module.css";
import moment from "moment";
import { ITask } from "../../../models/ITask";
import { useAppDispatch } from "../../../hooks/redux";
import { taskSlice } from "../../../redux/reducers/tasks-reducer";
import { modalSlice } from "../../../redux/reducers/modal-reducer";

const { TextArea } = Input;

export default function CreateTask() {

  const dispatch = useAppDispatch();
  const { createTask } = taskSlice.actions;
  const { setVisible } = modalSlice.actions;

  const emptyTask: ITask = {
    id: 0,
    summary: "",
    status: "TODO",
    type: "TASK",
    pubDate: moment().format("DD.MM.YYYY"),
    description: "",
    reporterId: 0,
    assigneeId: 0,
  };

  const [post, setPost] = useState(emptyTask);

  const addNewPost = (e: any) => {
    const newPost = {
      ...post,
      id: Date.now(),
    };
    dispatch(createTask(newPost));
    dispatch(setVisible(false))
    setPost({ ...post, summary: "" });
  };

  return (
    <form className={s.form}>
      <div>Создать задачу</div>
      <Input
        placeholder="Summary"
        value={post.summary}
        onChange={(e) => setPost({ ...post, summary: e.target.value })}
      />
      <TextArea
        rows={5}
        placeholder="Что нужно сделать?"
        className={s.ta}
        onChange={(e) => setPost({ ...post, description: e.target.value })}
        value={post.description}
      />
      <div className={s.settings}>
        Тип задачи:{" "}
        <Select
          defaultValue={post.type}
          options={[
            { value: "TASK", label: <span>TASK</span> },
            { value: "BUG", label: <span>BUG</span> },
          ]}
          onChange={(e) => setPost({ ...post, type: e })}
        />
        {` Статус:`}{" "}
        <Select
          defaultValue={post.status}
          onChange={(e) => setPost({ ...post, status: e })}
          style={{ width: 128 }}
          options={[
            { value: "DONE", label: <span>DONE</span> },
            { value: "IN PROGRESS", label: <span>IN PROGRESS</span> },
            { value: "TODO", label: <span>TODO</span> },
          ]}
        />
        <Button
          type="primary"
          disabled={post.summary === ""}
          onClick={addNewPost}
        >
          Create Task
        </Button>
      </div>
    </form>
  );
}

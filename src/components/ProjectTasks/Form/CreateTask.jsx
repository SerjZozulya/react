import { Input, Select, Button } from "antd";
import { useState } from "react";
import s from "./CreateTask.module.css";
import moment from "moment";

const { TextArea } = Input;

export default function CreateTask({ create }) {

  const [post, setPost] = useState({
    todo: "",
    completed: false,
    type: "TASK",
    pubDate: moment().format("DD.MM.YYYY")
  });

  const addNewPost = (e) => {
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ ...post, todo: "" });
  };

  return (
    <form>
      <div
        style={{
          fontWeight: 1000,
          fontFamily: "Lucida Console",
          marginTop: 30 + "px",
          marginBottom: 5 + "px",
        }}
      >
        Создать задачу
      </div>
      <TextArea
        rows={5}
        placeholder="Что нужно сделать?"
        className={s.ta}
        onChange={(e) => setPost({ ...post, todo: e.target.value })}
        value={post.todo}
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
          defaultValue={post.completed}
          onChange={(e) => setPost({ ...post, completed: e })}
          style={{ width: 128 }}
          options={[
            { value: true, label: <span>DONE</span> },
            { value: "IN PROGRESS", label: <span>IN PROGRESS</span> },
            { value: false, label: <span>TODO</span> },
          ]}
        />
        <Button
          type="primary"
          disabled={post.todo === ""}
          onClick={addNewPost}
        >
          Create Task
        </Button>
      </div>
    </form>
  );
}

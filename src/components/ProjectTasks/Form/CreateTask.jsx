import { Input, Select, Button } from "antd";
import { useState } from "react";
import s from "./CreateTask.module.css";
import moment from "moment";
import React from 'react';

const { TextArea } = Input;

export default function CreateTask({ create }) {

  const [post, setPost] = useState({
    summary: "",
    status: "TODO",
    type: "TASK",
    pubDate: moment().format("DD.MM.YYYY"),
    description: "Hello world!",
    reporterId: 1
  });

  const addNewPost = (e) => {
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ ...post, summary: "" });
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
        onChange={(e) => setPost({ ...post, summary: e.target.value })}
        value={post.summary}
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
          onChange={(e) => setPost({ ...post, completed: e })}
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

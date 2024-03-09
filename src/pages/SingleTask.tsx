import { FC } from "react";
import { useParams } from "react-router-dom";
import { ITask } from "../todos";
import React from 'react';

const SingleTask: FC = ({ posts }: any) => {
  const params: any = useParams();
  const task: ITask = posts.tasks.find(
    (element: ITask) => element.type + "-" + element.id === params.id
  );

  return (
    <div>
      <h1>{params.id}</h1>
      <h2>{task.summary}</h2>
      <h3>Создан: {task.pubDate}</h3>
      <span>
        <div>Description:</div>
        <div>{task.description}</div>
      </span>
    </div>
  );
};

export default SingleTask;

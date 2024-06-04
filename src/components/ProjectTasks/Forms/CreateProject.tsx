import { Input, Select, Button } from "antd";
import { useEffect, useMemo, useState } from "react";
import s from "./CreateTask.module.css";
import dayjs from "dayjs";
import { ITask } from "../../../models/ITask";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { taskSlice } from "../../../redux/slices/tasks-slice";
import { modalSlice } from "../../../redux/slices/modal-reducer";
import { createProject as createProjectOnServer } from "../../../http/projectsAPI";
import { IProject } from "../../../models/IProject";

const { TextArea } = Input;

export default function CreateProject() {
  const dispatch = useAppDispatch();
  const projects = useAppSelector((state) => state.tasks.projects);
  const user = useAppSelector((state) => state.user);
  const { createProject } = taskSlice.actions;
  const { setVisible } = modalSlice.actions;

  let emptyProject: IProject = {
    id: 0,
    title: "",
    description: "",
  };

  const [project, setProject] = useState(emptyProject);

  useEffect(() => {
    setProject(emptyProject);
  }, [projects]);

  const createNewProject = () => {
    createProjectOnServer(project).then((data) => {
      dispatch(createProject(data));
      dispatch(setVisible(false));
      setProject(emptyProject);
    });
  };

  return (
    <form className={s.form}>
      <div>Создать проект</div>
      <Input
        placeholder="Title"
        value={project.title}
        onChange={(e) => setProject({ ...project, title: e.target.value })}
      />
      <TextArea
        rows={5}
        placeholder="Description"
        className={s.ta}
        onChange={(e) => setProject({ ...project, description: e.target.value })}
        value={project.description}
      />
      <div className={s.settings}>
        <Button
          type="primary"
          disabled={project.title === ""}
          onClick={createNewProject}
        >
          Create Project
        </Button>
      </div>
    </form>
  );
}
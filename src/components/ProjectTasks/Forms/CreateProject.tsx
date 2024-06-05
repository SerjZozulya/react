import { Input, Button } from "antd";
import { useEffect, useState } from "react";
import s from "./CreateTask.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { modalSlice } from "../../../redux/slices/modal-slice";
import { IProject } from "../../../models/IProject";
import { projectsAPI } from "../../../redux/services/ProjectService";
import { userSlice } from "../../../redux/slices/user-slice";

const { TextArea } = Input;

export default function CreateProject() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const { setVisible } = modalSlice.actions;
  const [createProject, {}] = projectsAPI.useCreateProjectMutation()
  const [editProject, {}] = projectsAPI.useEditProjectMutation()

  let emptyProject: IProject = {
    id: 0,
    title: "",
    description: "",
    userId: user.user.id
  };

  const [project, setProject] = useState(emptyProject);

  const createNewProject = () => {
    createProject(project).then((response:any) => {
      dispatch(setVisible(false));
      dispatch(userSlice.actions.setActiveProject(response.data.id));
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
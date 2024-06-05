import s from "./Toolbar.module.css";
import {
  DeleteOutlined,
  EditFilled,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { Tooltip, Select, Button } from "antd";
import { useState } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { modalSlice } from "../../../redux/slices/modal-slice";
import { MODAL_TYPES } from "../../../utils/consts";


export default function Toolbar({ projects, activeProjectId, deleteProject, setActiveProject, firstFetch}:any) {

  const dispatch = useAppDispatch();
  const { setVisible, setForm } = modalSlice.actions;
  const defaultId = localStorage.getItem("activeProjectId") || projects[0].id
  firstFetch(defaultId)

  const dropDownItems = projects.map((project:any) => {
    return { value: project.id, label: project.title };
  });

  const handleSelectProject = (id:any) => {
    setActiveProject(id);
  };

  const handleCreateProject = () => {
    dispatch(setVisible(true));
    dispatch(setForm(MODAL_TYPES.CREATE_PROJECT_FORM));
  };

  const handleDeleteProject = () => {
    deleteProject(activeProjectId);
    setActiveProject(projects[0].id);
  };

  const description = ''
  
  return (
    <div className={s.projectsBlock}>
      Текущий проект:
      <Select
        defaultValue={defaultId}
        placeholder="Select"
        className={s.select}
        options={dropDownItems}
        value={activeProjectId}
        onChange={(e) => handleSelectProject(e)}
      />
      <Tooltip title="Add project">
        <Button
          className="headerButtons"
          type="text"
          icon={<PlusSquareOutlined style={{ fontSize: "22px" }} />}
          onClick={handleCreateProject}
        />
      </Tooltip>
      <Tooltip title="Delete Project">
        <Button
          className="headerButtons"
          type="text"
          icon={<DeleteOutlined />}
          onClick={handleDeleteProject}
        />
      </Tooltip>
      <Tooltip title="Edit Project">
        <Button className="headerButtons" type="text" icon={<EditFilled />} />
      </Tooltip>
      <p>Описание проекта: {description}</p>
    </div>
  );
}

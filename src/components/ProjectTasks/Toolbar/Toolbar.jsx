import s from "./Toolbar.module.css";
import {  DeleteOutlined,  EditFilled,  PlusSquareOutlined,} from "@ant-design/icons";
import { Tooltip, Select, Button } from "antd";
import { useState } from "react";
import {useAppSelector} from "../../../hooks/redux"

export default function Toolbar({ projects, setActiveProject }) {
  const tasks = useAppSelector((state) => state.tasks);
  const [activeProjectId, setActiveProjectId] = useState(tasks.selectedProject)

  const dropDownItems = projects.map((project) => {
    return { value: project.id, label: project.title };
  });

  const selectHandler = (id) => {
    setActiveProjectId(id)
    setActiveProject(id)
  }

  return (
    <div className={s.projectsBlock}>
      Текущий проект:
      <Select 
        className={s.select} 
        options={dropDownItems} 
        defaultValue={activeProjectId}
        onChange={e => selectHandler(e)}
      />
      <Tooltip title="Add project">
        <Button
          className="headerButtons"
          type="text"
          icon={<PlusSquareOutlined style={{ fontSize: "22px" }} />}
        />
      </Tooltip>
      <Tooltip title="Delete">
        <Button
          className="headerButtons"
          type="text"
          icon={<DeleteOutlined />}
        />
      </Tooltip>
      <Tooltip title="edit">
        <Button className="headerButtons" type="text" icon={<EditFilled />} />
      </Tooltip>
    </div>
  );
}

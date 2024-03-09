import s from "./Toolbar.module.css";
import React from 'react';
import {
    DeleteOutlined,
    EditFilled,
    PlusSquareOutlined,
  } from "@ant-design/icons";

import { Tooltip, Select, Button } from "antd";

export default function Toolbar(props) {
  return (
    <div className={s.projectsBlock}>
      Текущий проект:
      <Select
        defaultValue="2024"
        options={[
          { value: "2024", label: <span>2024</span> },
          { value: "2023", label: <span>2023</span> },
        ]}
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

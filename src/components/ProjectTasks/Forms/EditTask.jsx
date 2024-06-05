import { Input, Select, Button } from "antd";
import s from "./CreateTask.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { taskSlice } from "../../../redux/slices/tasks-slice";
import { modalSlice } from "../../../redux/slices/modal-slice";
import { editTask as editTaskOnServer } from "../../../http/tasksAPI";

const { TextArea } = Input;

export default function EditTask() {
  const dispatch = useAppDispatch();
  const { editTask } = taskSlice.actions;
  const { setVisible, setData } = modalSlice.actions;
  const {data} = useAppSelector((state) => state.modal)

  const save = () => {
    editTaskOnServer(data).then((response) => {
      dispatch(editTask(data));
      dispatch(setVisible(false));
    });
  };

  return (
    <form className={s.form}>
      <div>Редактирование</div>
      <Input
        placeholder="Summary"
        value={data.summary}
        onChange={(e) => {dispatch(setData({...data, summary: e.target.value}))}}
      />
      <TextArea
        rows={5}
        placeholder="Что нужно сделать?"
        className={s.ta}
        onChange={(e) => {dispatch(setData({...data, description: e.target.value}))}}
        value={data.description}
      />
      <div className={s.settings}>
        Тип задачи:{" "}
        <Select
          value={data.type}
          options={[
            { value: "TASK", label: <span>TASK</span> },
            { value: "BUG", label: <span>BUG</span> },
          ]}
          onChange={(e) => {dispatch(setData({...data, type: e}))}}
        />
        {` Статус:`}{" "}
        <Select
          value={data.status}
          onChange={(e) => {dispatch(setData({...data, status: e}))}}
          style={{ width: 128 }}
          options={[
            { value: "DONE", label: <span>DONE</span> },
            { value: "IN PROGRESS", label: <span>IN PROGRESS</span> },
            { value: "TODO", label: <span>TODO</span> },
          ]}
        />
        <Button
          type="primary"
          disabled={data.summary === ""}
          onClick={save}
        >
          Save
        </Button>
      </div>
    </form>
  );
}

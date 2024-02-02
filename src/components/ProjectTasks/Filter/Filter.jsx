import { Select } from "antd";
import Search from "antd/es/input/Search";
import s from "./Filter.module.css";

export default function Filter({filter, setFilter}) {
  return (
    <div className={s.sorting}>
      <span>Sort by:</span>
      <Select
        style={{ width: "80px" }}
        defaultValue={filter.sorting}
        options={[
          { value: "completed", label: <span>Status</span> },
          { value: "id", label: <span>ID</span> },
        ]}
        onChange={e => setFilter({...filter, sorting: e})}
      />
      <Search
        placeholder="search..."
        style={{ width: "auto" }}
        defaultValue={filter.search}
        onChange={e => setFilter({...filter, search: e.target.value})}
      />
    </div>
  );
}

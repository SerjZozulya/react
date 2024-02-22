import { Divider } from "antd";
import Toolbar from "../components/ProjectTasks/Toolbar/Toolbar";
import Task from "../components/Task/Task";
import s from "./AllTasks.module.css";
import Filter from "../components/ProjectTasks/Filter/Filter";

let AllTasks = ({tasks, remove, filter, setFilter}) => {

  let taskItems = tasks.map((p) => (
    <Task
      key={p.id}
      id={p.id}
      pubDate={p.pubDate}
      summary={p.summary}
      status={p.status}
      type={p.type}
      description={p.description}
    />
  ));

  return (
    <div className={s.tasks}>
      <Toolbar />
      <Divider />
      <div className="myTasksBlock">
        <div className={s.myTasksHeader}>
          <div>My Tasks </div>
          <Filter filter = {filter} setFilter={setFilter}/>
        </div>

        <div>{taskItems}</div>
      </div>
    </div>
  );
};

export default AllTasks;

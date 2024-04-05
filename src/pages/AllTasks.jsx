import { Divider } from "antd";
import Toolbar from "../components/ProjectTasks/Toolbar/Toolbar";
import Task from "../components/Task/Task";
import s from "./AllTasks.module.css";
import Filter from "../components/ProjectTasks/Filter/Filter";
import { useAppSelector } from "../hooks/redux";
import useLocalStorage from "../hooks/useLocalStorage";
import { usePosts } from "../hooks/usePosts";

let AllTasks = () => {

  const tasks = useAppSelector((state) => state.tasks);

  const [filter, setFilter] = useLocalStorage("filter", { search: "", sorting: "id" });

  const sortedAndSearchedPosts = usePosts(
    tasks.tasks,
    filter.sorting,
    filter.search
  );

  let taskItems = sortedAndSearchedPosts.map((p) => (
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
      <div className={s.myTasksBlock}>
        <div className={s.myTasksHeader}>
          <div>My Tasks </div>
          <Filter filter={filter} setFilter={setFilter} />
        </div>
        {taskItems.length === 0 ? (
          <div className={s.emptyArray}>No tasks here!</div>
        ) : (
          <div>{taskItems}</div>
        )}
      </div>
    </div>
  );
};

export default AllTasks;

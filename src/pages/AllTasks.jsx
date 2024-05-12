import { Divider } from "antd";
import Toolbar from "../components/ProjectTasks/Toolbar/Toolbar";
import Task from "../components/Task/Task";
import s from "./AllTasks.module.css";
import Filter from "../components/ProjectTasks/Filter/Filter";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import useLocalStorage from "../hooks/useLocalStorage";
import { usePosts } from "../hooks/usePosts";
import { useEffect } from "react";
import { fetchProjects, fetchTasks } from "../http/tasksAPI";
import { taskSlice } from "../redux/reducers/tasks-reducer";

let AllTasks = () => {
  const tasks = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchProjects().then((data) => dispatch(taskSlice.actions.setProjects(data)));
    fetchTasks(tasks.selectedProject).then((data) => dispatch(taskSlice.actions.setTasks(data)));
  }, []);

  const setActiveProject = (id) => {
    dispatch(taskSlice.actions.setActiveProject(id))
    fetchTasks(id).then((data) => dispatch(taskSlice.actions.setTasks(data)));
  }

  const [filter, setFilter] = useLocalStorage("filter", {
    search: "",
    sorting: "id",
  });

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
      <Toolbar 
        projects={tasks.projects}
        setActiveProject={setActiveProject}
      />
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

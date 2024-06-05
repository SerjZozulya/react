import { Divider } from "antd";
import Toolbar from "../components/ProjectTasks/Toolbar/Toolbar";
import Task from "../components/Task/Task";
import s from "./AllTasks.module.css";
import Filter from "../components/ProjectTasks/Filter/Filter";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import useLocalStorage from "../hooks/useLocalStorage";
import { usePosts } from "../hooks/usePosts";
import { useEffect, useState} from "react";
import { fetchTasks } from "../http/tasksAPI";
import { taskSlice } from "../redux/slices/tasks-slice";
import { userSlice } from "../redux/slices/user-slice";
import { projectsAPI } from "../redux/services/ProjectService";

let AllTasks = () => {
  console.log('All Tasks')
  const tasks = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const { data: projects, error, isLoading, isSuccess } = projectsAPI.useFetchAllProjectsQuery();
  const [deleteProject, {}] = projectsAPI.useDeleteProjectMutation()
  const [activeProjectId, setId] = useState(    localStorage.getItem("activeProjectId") || 0)

  const setActiveProject = (id) => {
    dispatch(userSlice.actions.setActiveProject(id));
    localStorage.setItem("activeProjectId", id)
    fetchTasks(id).then((data) => dispatch(taskSlice.actions.setTasks(data)));
  };

  const handleDelete = (id) => {
    deleteProject(id)
    fetchTasks(projects[0].id).then((data) => dispatch(taskSlice.actions.setTasks(data)));
  };

  const useFirstFetch = (id) => 
    useEffect(() => {
      fetchTasks(id).then((data) => dispatch(taskSlice.actions.setTasks(data)));
      dispatch(userSlice.actions.setActiveProject(id));
    }, []
    )

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
      {isLoading && <h1>ГРУЖУ...</h1>}
      {error && <h1>ОШИБКА</h1>}
      {projects && (
        <>
          <Toolbar
            projects={projects}
            setActiveProject={setActiveProject}
            deleteProject={handleDelete}
            firstFetch={useFirstFetch}
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
        </>
      )}
    </div>
  );
};

export default AllTasks;

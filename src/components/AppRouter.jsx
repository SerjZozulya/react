import Tasks from "./ProjectTasks/Tasks/Tasks";
import { Route, Switch, Redirect } from "react-router-dom";
import TaskPage from "./ProjectTasks/Tasks/TaskPage";
import { Products } from "./Products/Products";
import DialogsContainer from "./Dialogs/Dialogs-container";
import { useContext, useState } from "react";
import { usePosts } from "../hooks/usePosts";
import { TasksContext } from "../context";

const AppRouter = () => {

  const { tasks, store, deleteTask } = useContext(TasksContext);

  const [filter, setFilter] = useState({ search: "", sorting: "id" });
  const sortedAndSearchedPosts = usePosts(tasks.tasks, filter.sorting, filter.search);
  

  let sortPosts = (sorting) => {
    setFilter({ sorting: sorting });
  };

  return (
    <div className={"Content-Wrapper"}>
      <Switch>
        <Route exact path={"/project"}>
          <Tasks
            filter={filter}
            sortPosts={sortPosts}
            remove={deleteTask}
            posts={sortedAndSearchedPosts}
            setFilter={setFilter}
          />
        </Route>

        <Route exact path={"/project/:id"}>
          <TaskPage posts={tasks} />
        </Route>

        <Route path={"/dialogs"}>
          <DialogsContainer store={store} />
        </Route>

        <Route path={"/products"}>
          <Products />
        </Route>
        <Redirect to="/project" />
      </Switch>
    </div>
  );
};

export default AppRouter;

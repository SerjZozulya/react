import AllTasks from "../pages/AllTasks";
import { Route, Switch, Redirect } from "react-router-dom";
import SingleTask from "../pages/SingleTask";
import { Products } from "../pages/Products";
import DialogsContainer from "../pages/Dialogs-container";
import { useContext, useState } from "react";
import { usePosts } from "../hooks/usePosts";
import { TasksContext } from "../context";
import { useSelector } from "react-redux";

const AppRouter = () => {

  const tasks = useSelector(state => state.tasks)

  const {  store, deleteTask } = useContext(TasksContext);

  const [filter, setFilter] = useState({ search: "", sorting: "id" });
  const sortedAndSearchedPosts = usePosts(tasks.tasks, filter.sorting, filter.search);

  let sortPosts = (sorting) => {
    setFilter({ sorting: sorting });
  };

  return (
    <div className={"Content-Wrapper"}>
      <Switch>
        <Route exact path={"/project"}>
          <AllTasks
            filter={filter}
            sortPosts={sortPosts}
            remove={deleteTask}
            tasks={sortedAndSearchedPosts}
            setFilter={setFilter}
          />
        </Route>

        <Route exact path={"/project/:id"}>
          <SingleTask posts={tasks} />
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

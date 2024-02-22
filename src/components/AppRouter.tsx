import AllTasks from "../pages/AllTasks";
import { Route, Switch, Redirect } from "react-router-dom";
import SingleTask from "../pages/SingleTask";
import { Products } from "../pages/Products";
import DialogsContainer from "../pages/Dialogs-container";
import { useState } from "react";
import { usePosts } from "../hooks/usePosts";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const tasks = useSelector((state: any) => state.tasks);

  const [filter, setFilter] = useState({ search: "", sorting: "id" });
  const sortedAndSearchedPosts = usePosts(
    tasks.tasks,
    filter.sorting,
    filter.search
  );

  let sortPosts = (sorting: string) => {
    setFilter({ ...filter, sorting: sorting });
  };

  return (
    <div className={"Content-Wrapper"}>
      <Switch>
        <Route exact path={"/project"}>
          <AllTasks
            filter={filter}
            sortPosts={sortPosts}
            tasks={sortedAndSearchedPosts}
            setFilter={setFilter}
          />
        </Route>

        <Route exact path={"/project/:id"}>
          <SingleTask posts={tasks} />
        </Route>

        <Route path={"/dialogs"}>
          <DialogsContainer />
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

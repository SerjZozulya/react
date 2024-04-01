import AllTasks from "../pages/AllTasks";
import { Route, Switch, Redirect } from "react-router-dom";
import SingleTask from "../pages/SingleTask";
import { usePosts } from "../hooks/usePosts";
import useLocalStorage from "../hooks/useLocalStorage";
import { useAppSelector } from "../hooks/redux";

const AppRouter = () => {
  const tasks = useAppSelector((state: any) => state.tasks);
  const [filter, setFilter] = useLocalStorage("filter", { search: "", sorting: "id" });

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
        <Redirect to="/project" />
      </Switch>
    </div>
  );
};

export default AppRouter;

import { Divider } from "antd";
import Toolbar from "../Toolbar/Toolbar";
import Post from "./Task/Post";
import s from "./Tasks.module.css";
import Filter from "../Filter/Filter";

let Tasks = (props) => {
  let tasks = props.posts.map((p) => (
    <Post
      key={p.id}
      id={p.id}
      pubDate={p.pubDate}
      time={p.time}
      text={p.todo}
      completed={p.completed}
      taskType={p.type}
      remove={props.remove}
    />
  ));

  return (
    <div className={s.tasks}>
      <Toolbar />
      <Divider />
      <div className="myTasksBlock">
        <div className={s.myTasksHeader}>
          <div>My Tasks </div>
          <Filter filter = {props.filter} setFilter={props.setFilter}/>
        </div>

        <div>{tasks}</div>
      </div>
    </div>
  );
};

export default Tasks;

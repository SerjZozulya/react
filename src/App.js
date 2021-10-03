import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/ProjectTasks/Project";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom"
import Notes from "./components/Notes/Notes";

const App = (props) => {
  return (
      <div className="App">
          <div className={"GridBlock"}>
              <Header />
              <Navbar />
              <div className={'Content-Wrapper'}>
                  <Route path={'/dialogs'} render ={() => <Dialogs dispatch = {props.dispatch}
                                                                   messagesData = {props.state.messagesPage}/>}/>
                  <Route path={'/project'} render={() => <Project dispatch = {props.dispatch}
                                                                  tasksData = {props.state.tasksData}/>} />
                  <Route path={'/notes'} render={() => <Notes/>} />
              </div>
          </div>
      </div>

  );
}

export default App;

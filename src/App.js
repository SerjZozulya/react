import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/ProjectTasks/Project";
import {Route} from "react-router-dom"
import Notes from "./components/Notes/Notes";
import DialogsContainer from "./components/Dialogs/Dialogs-container";

const App = (props) => {
  return (
      <div className="App">
          <div className={"GridBlock"}>
              <Header />
              <Navbar />
              <div className={'Content-Wrapper'}>
                  <Route path={'/dialogs'} render ={() => <DialogsContainer store = {props.store}/>}/>
                  <Route path={'/project'} render={() => <Project store = {props.store}/>} />
                  <Route path={'/notes'} render={() => <Notes store = {props.store}/>} />
              </div>
          </div>
      </div>

  );
}

export default App;

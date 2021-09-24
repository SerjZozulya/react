import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"

const App = () => {
  return (
      <BrowserRouter>
          <div className="App">
              <Header />
              <Navbar />
              <div className={'Content-Wrapper'}>
                  <Route path={'/dialogs'} component={Dialogs} />
                  <Route path={'/profile'} component={Profile} />
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;

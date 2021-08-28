import { Provider } from "react-redux";
import store from "./app/store";
import Note from "./components/Note/Note";
import Sidebar from "./components/Sidebar/Sidebar";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Sidebar />

          <Switch>
            <Route path="/:id">
              <Note />
            </Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

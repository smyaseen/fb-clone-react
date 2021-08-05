import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

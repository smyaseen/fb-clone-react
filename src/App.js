import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Login from "./components/login";
// import "bootstrap/dist/js/bootstrap.js";

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
      </Switch>
    </Router>
  );
}

export default App;

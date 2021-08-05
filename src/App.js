import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
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
        {/* <Route path="/signup" component={Signup} /> */}
      </Switch>
    </Router>
  );
}

export default App;

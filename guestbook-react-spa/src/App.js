import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GuestBook from "./components/GuestBook";
import AddComment from "./components/AddComment";
import EditEntry from "./components/EditEntry";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add">
          <AddComment />
        </Route>
        <Route path="/edit/:id">
          <EditEntry />
        </Route>
        <Route path="/">
          <GuestBook />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

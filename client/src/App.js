import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { current } from "./JS/actions/User";
import AddJob from "./pages/AddJob";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Error from "./pages/Error";
import Home from "./pages/Home";
import JobList from "./pages/JobList";
import Profile from "./pages/Profile";
import PrivateRoute from "./router/PrivateRoute";
import { Admin, Resource } from "react-admin";
import restprovider from "ra-data-simple-rest";
import JoBlist from "./components/Admin components/JoBlist";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) dispatch(current());
  }, [dispatch, token]);
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={["/Addjob", "/edit/:id"]}>
          {" "}
          <AddJob />
        </Route>
        <Route path="/jobList">
          {" "}
          <JobList />{" "}
        </Route>
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <PrivateRoute path="/details" component={Profile} />
        <Route path="/*" components={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

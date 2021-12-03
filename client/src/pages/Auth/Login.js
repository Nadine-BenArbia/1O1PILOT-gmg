import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Notification from "../../components/Notification";
import { LoginUser } from "../../JS/actions/User";

import "./Register.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const errors = useSelector(state => state.userReducer.errors);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleUser = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = e => {
    e.preventDefault();
    dispatch(LoginUser(user, history));
  };

  return (
    <div>
      {errors && errors.map(el => <Notification error={el} />)}
      <form>
        <label>Email</label>
        <input
          type="email"
          required
          placeholder="enter your email"
          name="email"
          onInput={handleUser}
          value={user.email}
        />
        <label>Password</label>
        <input
          type="password"
          required
          placeholder="enter your password"
          min={6}
          name="password"
          onInput={handleUser}
          value={user.password}
        />

        <input type="submit" onClick={handleLogin} />
      </form>
    </div>
  );
};

export default Login;
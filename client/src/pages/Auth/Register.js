import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Notification from "../../components/Notification";
import { RegisterUser } from "../../JS/actions/User";
import userReducer from "../../JS/reducer/User";

import "./Register.css";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: 0
  });
  const errors = useSelector(state => state.userReducer.errors);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleUser = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const handleRegister = e => {
    e.preventDefault();
    dispatch(RegisterUser(user, history));
  };

  return (
    <>
      {errors && errors.map(el => <Notification error={el} />)}
      <form>
        <label>Name</label>
        <input
          type="text"
          placeholder="enter your name"
          required
          name="name"
          onInput={handleUser}
          value={user.name}
        />
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
          min={8}
          name="password"
          onInput={handleUser}
          value={user.password}
        />
        <label>role</label>
        <input
          type="string"
          placeholder="user or company"
          name="role"
          onInput={handleUser}
          value={user.role}
        />
        <input type="submit" onClick={handleRegister} />
      </form>
    </>
  );
};

export default Register;
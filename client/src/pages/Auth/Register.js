import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Notification from "../../components/Notification";
import { RegisterUser } from "../../JS/actions/User";

import "./Register.css";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const errors = useSelector((state) => state.userReducer.errors);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(RegisterUser(user, history));
  };

  return (
    <div className="form-container">
      {errors && errors.map((el) => <Notification error={el} />)}

      <form className="Register-form">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-white">
          FIND THE JOB THAT FITS YOUR LIFE{" "}
        </h1>
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

        <label> Role </label>
        <select
          id="role"
          value={user.role}
          onChange={handleUser}
          placeholder=""
          name="role"
        >
          <option label="user" value="user">
            user
          </option>
          <option label="company" value="recruter">
            recruter
          </option>
        </select>

        <input className="Re-submit" type="submit" onClick={handleRegister} />
      </form>
    </div>
  );
};

export default Register;

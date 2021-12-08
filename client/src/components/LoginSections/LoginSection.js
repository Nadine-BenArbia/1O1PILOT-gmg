import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import Notification from "../Notification";
import { LoginUser } from "../../JS/actions/User";

import "./LoginSection.css";
import { Button } from "../Button/Button";

const LoginSection = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const errors = useSelector((state) => state.userReducer.errors);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(LoginUser(user, history));
  };
  const [button, setButton] = useState(true);

  return (
    <div className="loginSection">
      {errors && errors.map((el) => <Notification error={el} />)}

      <form className="loginForm">
        <h3>Login Here</h3>
        <label for="username">Username</label>
        <input
          type="email"
          required
          placeholder="enter your email"
          name="email"
          onInput={handleUser}
          value={user.email}
        />
        <label for="password">Password</label>
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
        <div className="Register--">
          {button && (
            <Button buttonStyle="btn--outline">
              <Link to="/Register">
                {" "}
                if you don't have account Register here : Register{" "}
              </Link>{" "}
            </Button>
          )}
        </div>
        <div class="social">
          <div class="go">
            <i class="fab fa-google"></i> Google
          </div>
          <div class="fb">
            <i class="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>
  );
};
export default LoginSection;

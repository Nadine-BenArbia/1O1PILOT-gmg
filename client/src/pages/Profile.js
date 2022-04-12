import React from "react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Notification from "../components/Notification";
import { current } from "../JS/actions/User";

import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const errors = useSelector((state) => state.userReducer.errors);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleUserUpdate = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleupdate = (e) => {
    e.preventDefault();
    dispatch(current(user, history));
  };
  return (
    <div>
      {errors && errors.map((el) => <Notification error={el} />)}

      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                style={{ width: "150px!important" }}
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt="user img"
              />
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="first name"
                    onInput={handleUserUpdate}
                    value={user.name}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter phone number"
                    onInput={handleUserUpdate}
                    value={user.phone}
                  />
                </div>

                <div className="col-md-12">
                  <label className="labels">Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter email id"
                    onInput={handleUserUpdate}
                    value={user.email}
                  />
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label className="labels">resume</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="resume"
                      onInput={handleUserUpdate}
                      /* value={user.resume}*/
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 text-center">
            <button
              className="btn btn-primary profile-button"
              type="button"
              onClick={handleupdate}
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

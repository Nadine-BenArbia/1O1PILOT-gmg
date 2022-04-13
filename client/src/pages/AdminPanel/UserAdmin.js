import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import { getAlluser } from "../../JS/actions/User";

import "./UserAdmin.css";
const UserAdmin = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    dispatch(getAlluser);
  }, []);
  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card-admin">
              <div className="card-body">
                <h5 className="card-title text-uppercase mb-0">Manage Users</h5>
              </div>
              <div className="table-responsive">
                <table className="table no-wrap user-table mb-0">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Email
                      </th>

                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td onLoad={getAlluser.user}>
                        <h5 className="font-medium mb-0">{user.name}</h5>
                      </td>
                      <td>
                        <span className="text-muted">{user.occupation}</span>
                        <br />
                        <span className="text-muted">{user.role}</span>
                      </td>
                      <td>
                        <span className="text-muted">{user.email}</span>
                        <br />
                        <span className="text-muted">{user.phonen}</span>
                      </td>

                      <td>
                        <button
                          type="button"
                          className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                        >
                          <i className="fa fa-trash" />{" "}
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                        >
                          <i className="fa fa-edit" />{" "}
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                        >
                          <i className="fa fa-upload" />{" "}
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAdmin;

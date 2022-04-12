import React from "react";
import "./JobAdmin.css";
import { useDispatch } from "react-redux";
import { getAllJob } from "../../JS/actions/Jobs";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const JobAdmin = () => {
  const job = useSelector((state) => state.jobReducer.job);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJob(job._id));
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
                <h5 className="card-title text-uppercase mb-0">Manage Jobs</h5>
              </div>
              <div className="table-responsive">
                <table className="table no-wrap user-table mb-0">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Company Name
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Location
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
                      <td onLoad={getAllJob.job}>
                        <h5 className="font-medium mb-0">{job.companyName}</h5>
                      </td>
                      <td>
                        <span className="text-muted">{job.location}</span>
                        <br />
                      </td>
                      <td>
                        <span className="text-muted">{job.email}</span>
                        <br />
                        <span className="text-muted">{job.id_user}</span>
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

export default JobAdmin;

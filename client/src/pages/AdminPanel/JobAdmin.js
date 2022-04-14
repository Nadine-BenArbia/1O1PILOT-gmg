import React from "react";

import { useDispatch } from "react-redux";
import { getAllJob } from "../../JS/actions/Jobs";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const JobAdmin = () => {
  const job = useSelector((state) => state.jobReducer.job);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJob());
  }, []);
  return (
    <div>
      <h2> job List</h2>
      <table className="table table-dark">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">userID</th>
            <th scope="col">companyName</th>
            <th scope="col">name</th>
            <th scope="col">skills</th>
            <th scope="col">location</th>
          </tr>
        </thead>
        <tbody>
          {job.map((job) => {
            return (
              <>
                <tr>
                  <td>{job._id}</td>
                  <td>{job.id_user}</td>
                  <td>{job.companyName}</td>
                  <td>{job.name}</td>
                  <td>{job.skills}</td>
                  <td>{job.location}</td>
                </tr>
              </>
            );
          })}
          ;
        </tbody>
      </table>
    </div>
  );
};

export default JobAdmin;

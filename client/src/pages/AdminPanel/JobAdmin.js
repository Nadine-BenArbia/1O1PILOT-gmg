import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteJob, getAllJob } from "../../JS/actions/Jobs";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./adminJob.css";

const JobAdmin = () => {
  const job = useSelector((state) => state.jobReducer.job);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJob());
  }, []);
  const handleDelete = () => {
    const result = window.confirm("are you sure");
    if (result) {
      dispatch(deleteJob());
    }
  };

  return (
    <div>
      <h2> job List</h2>
      <table className="table table-dark">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">userID</th>
            <th scope="col">companyName</th>
            <th scope="col">email</th>
            <th scope="col">name</th>
            <th scope="col">skills</th>
            <th scope="col">location</th>
            <th scope="col">action</th>
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
                  <td>{job.email}</td>
                  <td>{job.name}</td>
                  <td>{job.skills}</td>
                  <td>{job.location}</td>
                  <td>
                    {" "}
                    <DeleteIcon onClick={handleDelete} />
                  </td>
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

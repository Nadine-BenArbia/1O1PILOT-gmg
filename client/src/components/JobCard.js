import React from "react";
import "./JobCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { deleteJob, getJob } from "../JS/actions/Jobs";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const handleDelete = () => {
    const result = window.confirm("are you sure");
    if (result) {
      dispatch(deleteJob(job._id));
    }
  };
  const handlejob = () => {
    dispatch(getJob(job._id));
  };
  return (
    <div className="card ">
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-row align-items-center">
          <div className="ms-2 c-details">
            <h6 className="mb-0"> {job.companyName}</h6>{" "}
            <span> {job.location}</span>
          </div>
        </div>
        <div className="badge">
          {" "}
          <span>{job.name}</span>{" "}
        </div>
      </div>
      <div className="mt-5">
        <h3> {job.skills} </h3>

        <div className="mt-3"> {job.email} </div>

        <div className="d-flex justify-content-between">
          <Link to={`/edit/${job._id}`}>
            {user && user._id == job.id_user && (
              <EditIcon onClick={handlejob} />
            )}
          </Link>

          {user && user._id == job.id_user && (
            <DeleteIcon onClick={handleDelete} />
          )}
          <div className="badge">{<Link to="/details">Details</Link>}</div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

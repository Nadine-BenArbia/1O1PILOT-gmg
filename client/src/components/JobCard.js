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
    <div className="job_card_list">
      <div className="card" style={{ width: "18rem" }}>
        <div className="logo_card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiyHYtDJQ0t5jCs4j_PiD5ESMvPwnvHVa3w&usqp=CAU"
            className="card-img-top "
            alt="logo"
          />
        </div>
        <div className="card-body">
          <h3 className="card-title">{job.companyName}</h3>
          <h5> skills : {job.skills}</h5>
          <h5> job Title : {job.name}</h5>
          <h5> location : {job.location}</h5>
          <h5> email : {job.email}</h5>

          <ul className="list-group list-group-flush"></ul>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <Link to={`/edit/${job._id}`}>
                {user && user._id === job.id_user && (
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
      </div>
    </div>
  );
};

export default JobCard;

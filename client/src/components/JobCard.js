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
    <div className="containerCard">
      <div className="card">
        <div className="card-body">
          <div className="name">
            {job.companyName}
            <span className="Company-name">{job.name}</span>
          </div>
          <div className="job-infos">
            <span className="job-description">{job.location}</span>
          </div>
          <div className="job-skills">
            <span className="skills">{job.skills}</span>
          </div>
          <div className="job-email">
            <span className="email">{job.email}</span>
          </div>
          <div className="edit-delete">
            <Link to={`/edit/${job._id}`}>
              {user && user._id == job.id_user && (
                <EditIcon onClick={handlejob} />
              )}
            </Link>
            {user && user._id == job.id_user && (
              <DeleteIcon onClick={handleDelete} />
            )}
          </div>
          {
            <Link to="/details">
              <div>Details</div>
            </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default JobCard;
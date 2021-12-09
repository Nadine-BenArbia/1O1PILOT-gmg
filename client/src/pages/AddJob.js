import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addJob, editJob } from "../JS/actions/Jobs";
import "./addjob.css";
const AddJob = () => {
  const [job, setJob] = useState({});
  const [edit, steEdit] = useState(false);
  const jobEdit = useSelector((state) => state.jobReducer.job);

  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  //---------------------------------------------
  useEffect(() => {
    if (params.id) {
      steEdit(true);
    } else {
      steEdit(false);
    }
    edit
      ? setJob(jobEdit)
      : setJob({ name: "", companyName: "", skills: "", location: "" });
  }, [params, edit, jobEdit]);

  //--------------------------------------------
  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };
  const handleJob = () => {
    if (job.name && job.companyName) {
      if (edit) {
        dispatch(editJob(params.id, job, history));
      } else {
        dispatch(addJob(job, history));
      }
    } else {
      alert("fields required");
    }
  };

  return (
    <form className="addJob-form">
      <br />
      <TextField
        id="outlined-required"
        label="Nametitle"
        onChange={handleChange}
        name="name"
        value={job.name}
      />{" "}
      <br />
      <br />
      <TextField
        required
        id="outlined-required"
        label="companyName"
        onChange={handleChange}
        name="companyName"
        value={job.companyName}
      />{" "}
      <br />
      <br />
      <TextField
        required
        id="outlined-required"
        label="Location"
        onChange={handleChange}
        name="Location"
        value={job.Location}
      />{" "}
      <br />
      <br />
      <TextField
        id="outlined-required"
        label="skills"
        onChange={handleChange}
        name="skills"
        value={job.skills}
      />{" "}
      <br />
      <Button onClick={handleJob}>{edit ? "Edit Job" : "ADD Job"} </Button>
    </form>
  );
};

export default AddJob;

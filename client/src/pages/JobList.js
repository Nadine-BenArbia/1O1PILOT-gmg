import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllJob } from "../JS/actions/Jobs";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import JobCard from "../components/JobCard";
import "./JobList.css";

const JobList = () => {
  const jobs = useSelector(state => state.jobReducer.job);
  const isLoad = useSelector(state => state.jobReducer.isLoad);
  const isError = useSelector(state => state.jobReducer.isError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJob());
  }, []);
  return (
    <div>
      {isLoad ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : isError ? (
        <p>Error,try again</p>
      ) : !jobs?.length ? (
        <p> no jobs to apply</p>
      ) : (
        <div className="jobList">
          {jobs?.map(el => (
            <JobCard job={el} key={el._id} />
          ))}
        </div>
      )}
      ;
    </div>
  );
};

export default JobList;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllJob } from "../JS/actions/Jobs";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import JobCard from "../components/JobCard";
import "./JobList.css";
import Addjob from "../components/AddJobSection/Addjob";
import AddJob from "./AddJob";

const JobList = () => {
  const jobs = useSelector((state) => state.jobReducer.job);
  const isLoad = useSelector((state) => state.jobReducer.isLoad);
  const isError = useSelector((state) => state.jobReducer.isError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJob());
  }, []);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  return (
    <div>
      <Addjob />
      <>{isAuth && user.role == "recruter" && <AddJob />}</>
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
          {jobs?.map((el) => (
            <JobCard job={el} key={el._id} />
          ))}
        </div>
      )}
      ;
    </div>
  );
};

export default JobList;

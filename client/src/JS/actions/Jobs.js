import {
  GET_JOBS_FAIL,
  GET_JOBS_LOAD,
  GET_JOBS_SUCCESS,
  GET_JOB_SUCCESS,
} from "../constant/Jobs";
import axios from "axios";

export const getAllJob = () => async (dispatch) => {
  dispatch({ type: GET_JOBS_LOAD });
  try {
    let result = await axios.get("api/job/");
    dispatch({
      type: GET_JOBS_SUCCESS,
      payload: result.data.job,
    });
  } catch (error) {
    dispatch({ type: GET_JOBS_FAIL });
  }
};
export const deleteJob = (id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  dispatch({ type: GET_JOBS_LOAD });
  try {
    await axios.delete(`api/job/${id}`, config);
    dispatch(getAllJob());
  } catch (error) {
    dispatch({ type: GET_JOBS_FAIL });
  }
};

export const addJob = (newJob, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    await axios.post("api/job", newJob, config);
    dispatch(getAllJob());

    history.push("/jobList");
  } catch (error) {
    dispatch({ type: GET_JOBS_FAIL });
  }
};
export const getJob = (id) => async (dispatch) => {
  dispatch({ type: GET_JOBS_LOAD });
  try {
    let { data } = await axios.get(`/api/job/${id}`);
    dispatch({ type: GET_JOB_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ GET_JOBS_FAIL });
  }
};

export const editJob = (id, editJob, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    await axios.put(`/api/job/${id}`, editJob, config);
    dispatch(getAllJob());
    alert("job uptdated");
  } catch (error) {
    dispatch({ type: GET_JOBS_FAIL });
  }
};

import {
  GET_JOBS_FAIL,
  GET_JOBS_LOAD,
  GET_JOBS_SUCCESS,
  GET_JOB_SUCCESS,
} from "../constant/Jobs";

const initialState = {
  jobs: [],
  isLoad: false,
  isError: false,
  job: {},
};
const jobReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_JOBS_SUCCESS:
      return { ...state, job: payload, isLoad: false };
    case GET_JOB_SUCCESS:
      return { ...state, job: payload.job, isLoad: false };
    case GET_JOBS_LOAD:
      return { ...state, isLoad: true };
    case GET_JOBS_FAIL:
      return { ...state, isLoad: false, isError: true };
    default:
      return state;
  }
};
export default jobReducer;

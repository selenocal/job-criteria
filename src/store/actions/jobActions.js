import * as actionTypes from "./actionTypes";

export const saveJob = job => dispatch => {
  dispatch({ type: actionTypes.SAVE_JOB, job });
};

export const editJob = () => dispatch => {
  dispatch({ type: actionTypes.EDIT_JOB });
};

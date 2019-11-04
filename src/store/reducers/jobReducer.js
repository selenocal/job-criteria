import * as actionTypes from "../actions/actionTypes";

const initialState = {
  editMode: true,
  job: {
    yearsExperience: "",
    levelEducation: [false, false, false, false],
    minWorkingHours: "32",
    maxWorkingHours: "40"
  }
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EDIT_JOB:
      return {
        ...state,
        editMode: true
      };
    case actionTypes.SAVE_JOB:
      return {
        ...state,
        editMode: false,
        job: { ...action.job }
      };
    default:
      return state;
  }
};

export default jobReducer;

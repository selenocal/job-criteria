import reducer from "./jobReducer";
import * as actionTypes from "../actions/actionTypes";

describe("JobReducer", () => {
  const initialJobData = {
    yearsExperience: "",
    levelEducation: [false, false, false, false],
    minWorkingHours: "32",
    maxWorkingHours: "40"
  };

  const changedJobData = {
    yearsExperience: "44",
    levelEducation: [true, true, false, true],
    minWorkingHours: "40",
    maxWorkingHours: "40"
  };

  it("expects SAVE_JOB works correctly", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.SAVE_JOB,
        job: changedJobData
      })
    ).toEqual({
      editMode: false,
      job: changedJobData
    });
  });

  it("expects EDIT_JOB works correctly", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.EDIT_JOB
      })
    ).toEqual({
      editMode: true,
      job: initialJobData
    });
  });
});

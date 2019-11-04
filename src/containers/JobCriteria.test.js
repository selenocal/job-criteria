import React from "react";
import { shallow } from "enzyme";
import { JobCriteria } from "./JobCriteria";

describe("<JobCriteria />", () => {

  const criteria = {
    yearsExperience: "5",
    levelEducation: [false, false. false, true],
    minWorkingHours: "32",
    maxWorkingHours: "40",
  };

  it("renders JobCriteria correctly", () => {
    const wrapper = shallow(<JobCriteria job={criteria}/>);

    expect(wrapper).toMatchSnapshot();
  });
});

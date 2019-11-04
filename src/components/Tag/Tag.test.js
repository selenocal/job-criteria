import React from "react";
import { shallow } from "enzyme";
import Tag from "./Tag";

describe("<Tag />", () => {
  it("renders Tag correctly", () => {
    const wrapper = shallow(<Tag>Test Tag</Tag>);

    expect(wrapper.contains("Test Tag")).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});

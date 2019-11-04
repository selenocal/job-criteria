import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("<Button />", () => {
  it("renders Button correctly", () => {
    const wrapper = shallow(<Button>Test Button</Button>);

    expect(wrapper.contains("Test Button")).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});

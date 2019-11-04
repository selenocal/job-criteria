import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

describe("<Card />", () => {
  it("renders Card correctly", () => {
    const wrapper = shallow(
      <Card>
        <div>
          <span>Test</span>
        </div>
      </Card>
    );

    expect(wrapper.contains("Test")).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});

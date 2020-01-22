import React from "react";

import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from "./Button";

configure({ adapter: new Adapter() });

describe("<Button /> component tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button />);
  });

  it("should render a <button /> element with the class name button", () => {
    expect(wrapper.find("button.button").exists()).toBe(true);
  });

  it("should render a <button /> element with the given class name", () => {
    wrapper.setProps({ btnType: "success" });
    expect(wrapper.find("button.success").exists()).toBe(true);
  });

  it("should render a <button /> element with disabled when related prop given so", () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.find("button").props().disabled).toEqual(true);
  });
  
});
